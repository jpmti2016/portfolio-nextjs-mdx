#!/usr/bin/env bash
# icon-style.sh <icon.svg|icon.png>
#
# Prints a draw.io style string that embeds a brand icon (Next.js, Stripe,
# GitHub, Claude, ...) as an image shape, for products that have no AWS4
# shape. The icon travels inside the .drawio file, so the diagram renders
# anywhere without the icon file next to it.
#
# Use the output as the style of a 48x48 icon cell inside the usual 120x120
# category container, in place of the resourceIcon style:
#
#   <mxCell id="svc-stripe" style="<output>" value="Stripe&lt;div&gt;&lt;i&gt;payments&lt;/i&gt;&lt;/div&gt;" vertex="1" parent="grp-stripe">
#     <mxGeometry x="36" y="30" width="48" height="48" as="geometry" />
#   </mxCell>
#
# Take the icon from the project's brand folder (e.g.
# src/images/brands/<brand>/logo.svg). If it is missing, add it first by the
# asset-sourcing rule in AGENTS.md ("Brand icons and images").

set -euo pipefail

if [[ $# -ne 1 || ! -f "$1" ]]; then
  echo "Usage: bash icon-style.sh <icon.svg|icon.png>" >&2
  exit 2
fi

case "${1,,}" in
  *.svg) MIME="image/svg+xml" ;;
  *.png) MIME="image/png" ;;
  *) echo "Unsupported icon type (use .svg or .png): $1" >&2; exit 2 ;;
esac

SIZE=$(wc -c <"$1")
if (( SIZE > 200000 )); then
  echo "Icon is ${SIZE} bytes; use an SVG or a PNG under 200 KB so the .drawio stays small." >&2
  exit 1
fi

# draw.io separates style keys with ';', so the data URI uses its
# "data:<mime>,<base64>" form, without the ';base64' token.
B64=$(base64 -w0 "$1" 2>/dev/null || base64 <"$1" | tr -d '\n')
printf 'shape=image;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=10;fontFamily=Helvetica;fontColor=#232F3E;aspect=fixed;imageAspect=0;image=data:%s,%s;\n' "$MIME" "$B64"
