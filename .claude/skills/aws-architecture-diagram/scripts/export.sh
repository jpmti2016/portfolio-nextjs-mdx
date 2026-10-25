#!/usr/bin/env bash
# export.sh <file.drawio> [output.png|output.svg]
# export.sh --install
#
# Exports a draw.io diagram to an image with the draw.io desktop CLI. The
# default output is a PNG at 2x scale next to the source
# (architecture.drawio -> architecture.png), the format Next.js image
# optimization handles best.
#
# draw.io desktop is free and open source (Apache-2.0). If it is not found,
# this script installs a pinned release, verified by SHA-256, without sudo:
#   - as root with apt (cloud sandboxes): the .deb plus xvfb, so apt pulls the
#     Electron runtime libraries;
#   - otherwise: the AppImage, extracted under $DRAWIO_INSTALL_DIR
#     (default ~/.local/share/drawio-desktop). No FUSE needed.
# With no display (cloud, SSH) it renders through xvfb-run.
#
# Environment:
#   DRAWIO_BIN          use this draw.io binary
#   DRAWIO_INSTALL_DIR  where the AppImage is extracted
#   DRAWIO_NO_INSTALL=1 fail instead of installing

set -euo pipefail

DRAWIO_VERSION="32.6.1"
SHA_APPIMAGE_X86_64="b0b9f76756be5de5b93286e61713f6832956082ff22dd3ad59c2d62eb9eec932"
SHA_APPIMAGE_ARM64="c7f004c1bcd33852102fe4bdf4e00bbd58c02f50d5d136424b1753d6d5153af2"
SHA_DEB_AMD64="515a975fbdb982e0d736b6f99248dbbb856a8b07bb72d6d3648a54b850fa33db"
SHA_DEB_ARM64="eb3354233d55e27624c2e8361680572fdb9528cfc5728d1d44bb7764306b4f61"
RELEASE_URL="https://github.com/jgraph/drawio-desktop/releases/download/v${DRAWIO_VERSION}"
INSTALL_DIR="${DRAWIO_INSTALL_DIR:-$HOME/.local/share/drawio-desktop}"

die() { echo "export.sh: $*" >&2; exit 1; }

is_root() { [[ "$(id -u)" -eq 0 ]]; }

find_drawio() {
  local c
  for c in "${DRAWIO_BIN:-}" "$(command -v drawio 2>/dev/null || true)" \
           "$INSTALL_DIR/drawio" /snap/bin/drawio /opt/drawio/drawio \
           "/Applications/draw.io.app/Contents/MacOS/draw.io"; do
    [[ -n "$c" && -x "$c" ]] && { echo "$c"; return 0; }
  done
  return 1
}

download_verified() {  # <url> <sha256> <dest>
  echo "Downloading $(basename "$1") ..." >&2
  curl -fsSL --retry 3 -o "$3" "$1" || die "download failed: $1"
  local got; got="$(sha256sum "$3" | cut -d' ' -f1)"
  [[ "$got" == "$2" ]] || { rm -f "$3"; die "SHA-256 mismatch for $(basename "$1") (got $got)"; }
}

install_drawio() {
  [[ "${DRAWIO_NO_INSTALL:-}" == "1" ]] && die "draw.io desktop not found and DRAWIO_NO_INSTALL=1"
  [[ "$(uname -s)" == "Linux" ]] \
    || die "draw.io desktop not found. Install it from https://www.drawio.com/ (free), then re-run."
  local arch deb_arch app_arch sha_deb sha_app tmp
  arch="$(uname -m)"
  case "$arch" in
    x86_64)        deb_arch=amd64; app_arch=x86_64; sha_deb=$SHA_DEB_AMD64; sha_app=$SHA_APPIMAGE_X86_64 ;;
    aarch64|arm64) deb_arch=arm64; app_arch=arm64;  sha_deb=$SHA_DEB_ARM64; sha_app=$SHA_APPIMAGE_ARM64 ;;
    *) die "unsupported CPU architecture: $arch" ;;
  esac
  tmp="$(mktemp -d)"
  trap 'rm -rf "$tmp"' RETURN

  if is_root && command -v apt-get >/dev/null 2>&1; then
    download_verified "$RELEASE_URL/drawio-${deb_arch}-${DRAWIO_VERSION}.deb" "$sha_deb" "$tmp/drawio.deb"
    echo "Installing draw.io ${DRAWIO_VERSION} and xvfb with apt ..." >&2
    apt-get update -qq >/dev/null
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends \
      "$tmp/drawio.deb" xvfb xauth >/dev/null
  else
    download_verified "$RELEASE_URL/drawio-${app_arch}-${DRAWIO_VERSION}.AppImage" "$sha_app" "$tmp/drawio.AppImage"
    echo "Extracting draw.io ${DRAWIO_VERSION} to $INSTALL_DIR ..." >&2
    chmod +x "$tmp/drawio.AppImage"
    (cd "$tmp" && ./drawio.AppImage --appimage-extract >/dev/null)
    mkdir -p "$(dirname "$INSTALL_DIR")"
    rm -rf "$INSTALL_DIR"
    mv "$tmp/squashfs-root" "$INSTALL_DIR"
  fi
  find_drawio >/dev/null || die "install finished but the draw.io binary was not found"
}

ensure_display_runner() {  # prints the command prefix needed to render
  if [[ -n "${DISPLAY:-}" || -n "${WAYLAND_DISPLAY:-}" || "$(uname -s)" == "Darwin" ]]; then
    return 0
  fi
  if ! command -v xvfb-run >/dev/null 2>&1; then
    if is_root && command -v apt-get >/dev/null 2>&1; then
      echo "Installing xvfb (no display available) ..." >&2
      apt-get update -qq >/dev/null
      DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends xvfb xauth >/dev/null
    else
      die "no display and xvfb-run is missing. Install xvfb (e.g. sudo apt-get install xvfb) and re-run."
    fi
  fi
  echo "xvfb-run -a"
}

if [[ "${1:-}" == "--install" ]]; then
  if bin="$(find_drawio)"; then echo "draw.io already installed: $bin"; else install_drawio; echo "Installed: $(find_drawio)"; fi
  exit 0
fi

[[ $# -ge 1 && $# -le 2 && -f "$1" ]] || { echo "Usage: bash export.sh <file.drawio> [output.png|output.svg] | --install" >&2; exit 2; }
IN="$1"
OUT="${2:-${IN%.drawio}.png}"
FORMAT="${OUT##*.}"
case "$FORMAT" in
  png) SCALE=(-s 2) ;;
  svg|pdf) SCALE=() ;;
  *) die "unsupported output format: .$FORMAT (use .png, .svg or .pdf)" ;;
esac

BIN="$(find_drawio)" || { install_drawio; BIN="$(find_drawio)"; }
RUNNER_CMD="$(ensure_display_runner)" || exit 1
read -r -a RUNNER <<<"$RUNNER_CMD"

LOG="$(mktemp)"
trap 'rm -f "$LOG"' EXIT
rm -f "$OUT"
if ! "${RUNNER[@]}" "$BIN" --no-sandbox --disable-gpu -x -f "$FORMAT" "${SCALE[@]}" -b 10 \
     -o "$OUT" "$IN" >"$LOG" 2>&1 || [[ ! -s "$OUT" ]]; then
  cat "$LOG" >&2
  die "export failed. As root on Debian/Ubuntu, deleting $INSTALL_DIR and re-running installs the .deb with its runtime libraries."
fi
echo "Exported $OUT ($(du -h "$OUT" | cut -f1))"
