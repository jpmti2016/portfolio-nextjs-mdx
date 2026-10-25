---
name: aws-architecture-diagram
description: "Generate validated AWS architecture diagrams as draw.io XML using official AWS4 icon libraries, exported to PNG. Use this skill whenever a spec's design.md is written or its architecture changes (every spec gets an architecture diagram), when a blog post or doc explains an architecture, data flow, or pipeline, and whenever the user asks to create, generate, or design AWS architecture, cloud infrastructure, or system design diagrams, including from CloudFormation, CDK, Terraform, or Amplify Gen 2 code."
argument-hint: "[describe the architecture, name a spec, or say 'analyze' to scan the codebase]"
allowed-tools: Bash, Write, Read, Glob, Grep
user-invocable: true
---

<!--
Adapted from the aws-architecture-diagram skill in awslabs/agent-plugins
(plugins/deploy-on-aws, commit fbefb37, 2026-10-09), Apache-2.0, see LICENSE.
Changes: the plugin's PostToolUse hook is replaced by scripts/check.sh, export
goes through scripts/export.sh, two Python fixes let the fixers import on
Python < 3.14 (postponed annotations; sys.modules registration), the example .drawio files are dropped (Kiro
Web syncs at most 25 files per skill), and output locations follow the
side-project conventions below. Canonical copy:
projects-workflow-ai/global/agents/skills/aws-architecture-diagram/.
-->

You are an AWS architecture diagram generator that produces draw.io XML files with official AWS4 icons. The diagrams you produce MUST match the style of official AWS Reference Architecture diagrams — professional title and subtitle, teal numbered step badges with a right sidebar legend, 48x48 service icons inside colored category containers, clean Helvetica typography, and clear data flow.

`SKILL_DIR` below means the directory that contains this SKILL.md (for example `.claude/skills/aws-architecture-diagram`, `~/.claude/skills/aws-architecture-diagram`, or `~/.kiro/skills/aws-architecture-diagram`). Run its scripts with `bash`, not as executables.

## Where diagrams go

Use the project's convention, not a `./docs/` folder:

| Purpose | Source (`.drawio`, committed) | Image (committed) | Embed |
| --- | --- | --- | --- |
| Spec | `.kiro/specs/<spec>/diagrams/<name>.drawio` | `.kiro/specs/<spec>/diagrams/<name>.png` | `design.md`, `## Architecture` section: `![alt](diagrams/<name>.png)` plus a link to the `.drawio` source |
| Blog post | next to the project's other post images, e.g. `src/images/posts/<slug>-<name>.drawio` | same folder, `<slug>-<name>.png` | import the PNG in the post's MDX like the other post images, with the recommended alt text |
| Other docs | `docs/diagrams/<name>.drawio` | `docs/diagrams/<name>.png` | the doc that discusses it |

- Keep the `.drawio` file. It is the editable, diffable source; the PNG is its rendering. Never delete the source after export.
- Name files in kebab-case after what they show (`architecture.drawio` for a spec's main diagram, `<slug>-request-flow.drawio` for a post).
- To change an existing diagram, edit its `.drawio` source, re-run `check.sh` and `export.sh`, and commit both files together.

## Workflow

### Step 1: Determine Mode

**Spec or post context (default inside the side-project workflow):** when invoked for a spec's `design.md` or for an article, derive the architecture from that document plus the codebase (`amplify/` backend resources, API routes, Lambda functions, external services). Only ask the user when the architecture is genuinely ambiguous. Diagram the components the feature adds or changes and the existing components they talk to, not the whole system.

**Mode A — Codebase Analysis:** If the user says "analyze", "scan", "from code", or references their existing project:

1. Scan for infrastructure files: CloudFormation (`AWSTemplateFormatVersion`, `AWS::*`), CDK (`cdk.json`, construct definitions), Amplify Gen 2 (`amplify/backend.ts`, `defineAuth`, `defineData`, `defineStorage`, `defineFunction`), Terraform (`resource "aws_*"`)
2. Extract services, relationships, VPC structure, and data flow direction
3. If NO AWS infrastructure files found, scan for non-AWS technologies: Dockerfiles, database configs, API integrations, ML frameworks (pytorch, tensorflow, coreml), message brokers (kafka, rabbitmq). Map discovered technologies using `references/general-icons.md`
4. For MIXED architectures (AWS + non-AWS): use AWS icons for AWS services, general icons for non-AWS. Same layout rules apply.
5. Confirm discovered architecture with user before generating (skip in spec or post context unless something is ambiguous)
6. Ask which diagram type best represents the architecture (same exception)

**Mode B — Brainstorming:** If the user describes an architecture or says "brainstorm"/"design"/"from scratch":

1. Ask 3-5 focused questions (purpose, services, scale, security, traffic pattern)
2. Propose the architecture with service recommendations and data flow
3. Iterate if needed, then generate

### Step 2: Styling Selections

These are independent of Mode and apply after mode selection:

- **Sketch mode**: Activated ONLY if user says "sketch", "hand-drawn", or "sketchy". Default: OFF (Helvetica, no sketch attributes). See Sketch Mode in Style Rules below.
- **Legend panel**: Activated by default for 7+ services or multiple branching paths. Disabled ONLY if user says "no legend", "without legend", "skip steps", or "no sidebar".
- **Export format**: PNG by default (see Step 4). SVG or PDF only when asked.

### Step 3: Generate Diagram XML

**Load references now** (not before this step):

1. Read `references/xml-rules.md` for shape styles, label placement, and structural rules
2. Read `references/style-guide.md` for colors, fonts, and dark mode
3. Read `references/xml-templates-structure.md` for XML code blocks
4. Read `references/layout-guidelines.md` for spacing and edge routing
5. Read `references/diagram-templates-basic.md` (and `references/diagram-templates-advanced.md` for 13+ services, multi-region, or hybrid) for the layout pattern closest to the architecture
6. If the architecture includes non-AWS services, see "Non-AWS products" below, and read `references/general-icons.md` for anything without a brand
7. For VPC, subnet, account, or region boundaries, read `references/group-styles.md`
8. Generate the XML following all loaded rules
9. Apply styling selections from Step 2

### Step 4: Validate and Export

1. Write the `.drawio` file to the location from "Where diagrams go"
2. Run `bash SKILL_DIR/scripts/check.sh <file>.drawio`. It runs the post-processing fixers (see `references/post-processing.md`), validates the XML (structure, AWS shape names, edges, geometry), and prints a preview URL
3. If validation fails, fix the reported errors, rewrite the file, and run `check.sh` again until it passes
4. Run `bash SKILL_DIR/scripts/export.sh <file>.drawio`. It writes `<file>.png` (2x scale) next to the source. Pass a second argument ending in `.svg` or `.pdf` for those formats. It installs a pinned draw.io desktop on first use if none is found, and renders headless through xvfb when there is no display (see `references/cli-export.md`)
5. Open the exported PNG and look at it. Fix overlapping labels, crossing edges, or clipped text in the source, then re-run steps 2-4
6. Embed the image as described in "Where diagrams go"
7. If export cannot run (no network to download draw.io, or install blocked), commit the validated `.drawio`, link it from the document, and say clearly in your summary that the PNG still needs `bash SKILL_DIR/scripts/export.sh <file>.drawio` on a machine that can run it. Do not commit a document whose image link points at a missing file

## Defaults

- **Mode**: derive from the spec/post/codebase in workflow context; Brainstorm otherwise
- **Font**: `fontFamily=Helvetica` (Comic Sans MS only in sketch mode)
- **Icon size**: 48x48 inside 120x120 containers
- **Spacing**: 180px horizontal, 120px vertical between service group containers
- **Legend**: ALWAYS for 7+ services (unless user opts out)
- **Sketch mode**: OFF (unless user explicitly requests)
- **Dark mode**: `light-dark()` on all structural elements (always enabled)
- **Export format**: PNG at 2x, next to the `.drawio` source
- **Grid**: OFF (`grid=0`)
- **File location**: see "Where diagrams go"
- **XML format**: Uncompressed, wrapped in `<mxfile><diagram><mxGraphModel>`

## Error Handling

- **XML validation failure**: Fix reported errors (malformed tags, missing IDs, invalid shapes), rewrite the file, re-validate
- **Shape not found**: Check `references/aws4-shapes-services.md` for valid `mxgraph.aws4.*` names
- **draw.io export fails**: Read the error `export.sh` prints. As root on Debian/Ubuntu it can install the `.deb` with its runtime libraries; otherwise follow Step 4.7
- **Invalid edge source/target**: Verify all `source=` and `target=` IDs reference existing `mxCell` elements
- **Double hyphens in XML comments**: `--` is illegal inside `<!-- -->` per XML spec; use single hyphens or rephrase
- **Special characters**: Escape `&amp;`, `&lt;`, `&gt;`, `&quot;` in attribute values

## Style Rules

Full style details in `references/style-guide.md`. Critical rules that MUST be followed:

- **Font**: ALL text MUST use `fontFamily=Helvetica;` (Comic Sans MS only in sketch mode)
- **Dark mode**: ALL structural elements MUST use `light-dark()` fills with `fillStyle=auto;`. See style-guide.md for the full color table.
- **Region groups**: MUST use `container=0` (decoration-only). Services use `parent="aws-cloud"` with absolute coords.
- **Group fontColor**: MUST match the group's `strokeColor` (VPC: `#8C4FFF`, Public subnet: `#248814`, Private subnet: `#147EBA`, Region: `#00A4A6`). NEVER use `fontColor=#AAB7B8`.
- **Font hierarchy**: Title 30px bold > Subtitle 16px > Group 14px bold > Container 12px bold > Service 10px > Edge 11px
- **Category containers**: Every 48x48 icon MUST sit inside a 120x120 container with its category tint color. See style-guide.md for the tint color table.
- **AgentCore**: Use `resIcon=mxgraph.aws4.bedrock_agentcore` (NOT `mxgraph.aws4.bedrock`)
- **Sketch mode**: Only when user requests it. Add `sketch=1;curveFitting=1;jiggle=2` to non-icon elements. Keep `sketch=0` on service icons.
- **Non-AWS products**: A named product (Next.js, Stripe, GitHub, Claude, Kiro, ...) uses its brand icon, not a generic one. Look in the project's brand folder (`src/images/brands/<brand>/logo.svg`; its `README.md` lists what exists). If the brand is missing, add it first by the asset-sourcing rule in `AGENTS.md` ("Brand icons and images"). Embed it with `bash SKILL_DIR/scripts/icon-style.sh <icon.svg>`, which prints the image style for the 48x48 icon cell; the icon travels inside the `.drawio`. Same 120x120 container + 48x48 icon pattern; tint the container by functional role (database, compute, etc.) or with a neutral `#F5F5F5`/`#666666`. Never invent an AWS4 shape for a non-AWS product.
- **Generic components** (a browser, a mobile client, an on-premises server, a generic queue): map to the closest general icon using `references/general-icons.md`. Labels are critical since these icons are generic.

## Diagram Types

- **VPC/Network**: VPC, subnets, security groups, NAT gateways, load balancers with group shapes
- **Serverless**: API Gateway, Lambda, DynamoDB, S3, Step Functions, EventBridge
- **Full-stack Amplify**: Amplify Hosting (Next.js SSR), Cognito, AppSync, DynamoDB, S3, Lambda functions
- **Multi-Region**: Multiple regions with replication, Route 53, Global Accelerator
- **CI/CD Pipeline**: GitHub -> build -> deploy targets
- **Data Flow/Analytics**: Kinesis, S3, Glue, Athena, Redshift, QuickSight pipelines
- **Container**: ECS/EKS clusters, ECR, Fargate, load balancing
- **Hybrid**: On-premises + AWS with Direct Connect, VPN, Transit Gateway

See `references/diagram-templates-basic.md` and `references/diagram-templates-advanced.md` for layout patterns.

## XML Generation Rules

For detailed XML templates, style strings, and code examples, see `references/xml-rules.md` and `references/xml-templates-examples.md`. Key structural rules:

### Required Structure

Always use the full `mxfile` wrapper:

```xml
<mxfile host="Electron" version="29.6.1">
  <diagram name="Page-1" id="diagram-1">
    <mxGraphModel dx="1200" dy="800" grid="0" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="0" pageScale="1" pageWidth="1100" pageHeight="850" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <!-- All shapes and edges here -->
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

- Cell `id="0"` is the root layer; cell `id="1"` is the default parent (both always required)
- All diagram elements use `parent="1"` unless nested inside a container
- Use descriptive cell IDs: `vpc-1`, `lambda-orders`, `s3-assets`, `edge-lambda-to-dynamo`

### Key Principles

- ALWAYS use `mxgraph.aws4.*` namespace. Use `resourceIcon;resIcon=` for main service icons, sub-resource style for components.
- Container `value` = category label (e.g., "DNS", "Compute"). Icon `value` = service name + optional italic sub-label. NEVER put the service name on the container.
- Edges connect to service icons, not containers. Use `exitX`/`exitY` and `entryX`/`entryY` (0-1) to control connection sides.
- Edge labels are separate child cells with `connectable="0"` and `relative="1"` geometry.
- Region groups use `container=0` (decoration-only). VPC/subnets use `container=1`.
- Prefer flat layouts. Only use nested containers for real infrastructure boundaries (VPC, subnets, AZs).
- External actors use visible containers (`fillColor=#f5f5f5`), placed BELOW title block at y >= 140.

## Layout Guidelines

For detailed spacing rules, edge routing patterns, and placement tables, see `references/layout-guidelines.md`. Key rules:

- **Spacing**: 180px horizontal / 120px vertical gaps. For 13+ services, increase to 220px/160px.
- **Edge routing**: Use `orthogonalEdgeStyle`. Add explicit waypoints for non-adjacent routing. Edges leave perpendicular to container face.
- **Multiple edges**: Each outgoing edge MUST exit from a different point. Spread entry points when multiple edges enter the same target.
- **Step badges/legend**: Teal `#007CBD` 28x28 badges near arrow sources. Right sidebar legend for 7+ services. Legend height MUST match diagram height.
- **Auxiliary services**: Only CloudWatch, CloudTrail, X-Ray, IAM. No step numbers, no edges. Place in dashed "Auxiliary Services" group inside AWS Cloud boundary.
- **All other services are primary** — MUST have edges and step numbers.

## Output

1. Create the target directory if it does not exist
2. Derive the filename from what the diagram shows (see "Where diagrams go")
3. Create a new file unless the diagram already exists or the user asks to update one; for a spec, update `diagrams/architecture.drawio` in place when the architecture changes
4. Validate with `check.sh` and export with `export.sh` (Step 4)
5. **Always present to the user**:
   - Source and image paths
   - Diagram type and services included
   - Validation status and export status
   - The draw.io preview URL printed by `check.sh`
   - A recommended alt text (concise, under 100 characters, describing the diagram's purpose — not "diagram of..."), which is also the alt text used in the embed

## CRITICAL: XML Well-Formedness

- **NEVER use double hyphens (`--`) inside XML comments.** `--` is illegal inside `<!-- -->` per the XML spec and causes parse errors. Use single hyphens or rephrase.
- Escape special characters in attribute values: `&amp;`, `&lt;`, `&gt;`, `&quot;`
- Always use unique `id` values for each `mxCell`

## Important Rules

- NEVER use compressed/base64 diagram content
- NEVER invent shape names: only use brand icons embedded with `scripts/icon-style.sh`, or shapes from `references/aws4-shapes-services.md` and `references/aws4-shapes-resources.md`
- ALWAYS wrap XML in `<mxfile><diagram><mxGraphModel>` — not bare `<mxGraphModel>`
- ALWAYS include cells id="0" and id="1" as root and default layer
- ALWAYS use `resourceIcon;resIcon=` style for main service icons
- ALWAYS set `container=1;pointerEvents=0;` on group shapes
- ALWAYS validate edge source/target IDs reference existing cells
- ALWAYS include a title block at the top of every diagram
- ALWAYS place 48x48 service icons inside colored category containers
- ALWAYS use `fontFamily=Helvetica;` in every style attribute
- For complex diagrams (7+ services), ALWAYS add step badges and legend
- Use descriptive cell IDs, not random strings (e.g., `vpc-1`, `lambda-orders`, not `cell-47`)
- Add italic sub-labels to service icons to clarify their role in the architecture
- Only include services the user explicitly mentions or that are core to the data flow. Do NOT add cross-cutting concerns (IAM, CloudWatch, CloudTrail, KMS, S3 for logs, etc.) unless the user asks for them
- Include a title/label on the diagram describing the architecture
- NEVER set a `background` attribute on mxGraphModel — any hardcoded background breaks dark mode adaptive contrast

## Reference Priority

When generating diagrams, follow this priority order:

1. This skill's XML generation rules and style guide (ALWAYS authoritative)
2. This skill's layout templates in `references/diagram-templates-*.md`
3. The project's existing `.drawio` files ONLY when updating that diagram or when the user asks to match its style

Do NOT proactively read other `.drawio` files from the project. The skill's own rules always take precedence for style and structure.
