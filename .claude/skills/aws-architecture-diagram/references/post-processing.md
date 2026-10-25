# Post-Processing Pipeline

Deterministic fixers run first when you call `bash SKILL_DIR/scripts/check.sh <file>.drawio`, in this order:

1. **fix_nesting.py** — Sets Region `container=0`, re-parents children to root
2. **fix_icon_colors.py** — Corrects service icon fillColor to match category
3. **fix_step_badges.py** — Nudges overlapping step badges apart
4. **fix_placement.py** — Moves external actors below the title block (y >= 140)
5. **fix_legend_size.py** — Resizes legend panel to match diagram height

All scripts are in `scripts/lib/`. The pipeline is orchestrated by `scripts/lib/post_process_drawio.py`, which chains them in sequence. `check.sh` then runs `scripts/lib/validate_drawio.py` and prints the preview URL. Run `check.sh` after every write of a `.drawio` file; skills carry no hooks, so nothing runs it for you.


**Dependency**: The pipeline requires `defusedxml` (`pip3 install defusedxml>=0.7.1`). `check.sh` uses it when installed, runs through `uv` when available, and otherwise installs it with pip for the user.
