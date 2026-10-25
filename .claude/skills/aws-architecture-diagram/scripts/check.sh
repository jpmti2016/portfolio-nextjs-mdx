#!/usr/bin/env bash
# check.sh <file.drawio>
#
# Post-processes and validates a draw.io diagram written by this skill, then
# prints a browser preview URL. This is the step the upstream deploy-on-aws
# plugin ran as a Claude Code PostToolUse hook. Skills copied into ~/.kiro,
# ~/.claude or a repo do not carry hooks, so the skill runs it explicitly.
#
# Exit codes: 0 = validation passed, 1 = validation failed, 2 = usage error.
#
# Needs python3 and defusedxml. If defusedxml is missing it uses `uv` (no
# install) when available, otherwise installs it with pip for the user.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LIB="$SCRIPT_DIR/lib"
# Never leave __pycache__ inside the skill (it lives in repos and ~ copies).
export PYTHONDONTWRITEBYTECODE=1

if [[ $# -ne 1 || ! -f "$1" ]]; then
  echo "Usage: bash check.sh <file.drawio>" >&2
  exit 2
fi
FILE="$1"
case "$FILE" in
  *.drawio|*.drawio.xml) ;;
  *) echo "Not a .drawio file: $FILE" >&2; exit 2 ;;
esac

run_py() {
  if python3 -c 'import defusedxml' 2>/dev/null; then
    python3 "$@"
  elif command -v uv >/dev/null 2>&1; then
    uv run --quiet --no-project --with 'defusedxml>=0.7.1' python3 "$@"
  else
    echo "Installing defusedxml for python3 (user site)..." >&2
    python3 -m pip install --quiet --user 'defusedxml>=0.7.1' 2>/dev/null \
      || python3 -m pip install --quiet --user --break-system-packages 'defusedxml>=0.7.1'
    python3 "$@"
  fi
}

echo "== Post-processing (nesting, icon colors, badges, actors, legend) =="
if ! run_py "$LIB/post_process_drawio.py" "$FILE"; then
  echo ""
  echo "Post-processing crashed (see the error above). The file was not modified." >&2
  exit 1
fi

echo ""
echo "== Validation =="
set +e
RESULT="$(run_py "$LIB/validate_drawio.py" "$FILE" 2>&1)"
set -e
echo "$RESULT"

if ! grep -q "VALIDATION PASSED" <<<"$RESULT"; then
  echo ""
  echo "Fix the errors above, rewrite the file, and run check.sh again."
  exit 1
fi

echo ""
echo "== Preview (opens the diagram in app.diagrams.net; data stays in the URL fragment) =="
python3 "$LIB/drawio_url.py" "$FILE" || echo "(preview URL skipped: file too large)"
