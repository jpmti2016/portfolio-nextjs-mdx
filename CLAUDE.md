<!-- projects-workflow:begin -->
## Workflow rules (managed by projects-workflow-ai)

Claude Code on the web and scheduled sessions read only this repository,
never `~/.claude`, so the branch rules every session must follow are kept
here. Do not edit this block in the repo: it is overwritten from
`global/claude/repo-instructions.md` in projects-workflow-ai by
`sync-projects.sh`. Project notes go outside the markers.

- **`staging` integrates, `main` is production.** `staging` is the default
  branch. `main` changes only through a promotion pull request from
  `staging`, opened when the user asks for a release.
- **Base every branch on `origin/staging`, and open every pull request
  against `staging`**, even when the session started on `main` or the work
  fixes something seen in production (Search Console, a live bug). The fix
  reaches production with the next promotion.
- **Never open a pull request into `main`** except that promotion, and
  **never push to `main`**.
- **Agents open pull requests; the user merges them.** Never merge one, into
  any branch, even when asked to "ship" or "release".
- Branch names: `feat/<issue>-<slug>`, `fix/<issue>-<slug>`,
  `spec/<issue>-<slug>`, or the session's own `claude/<name>` branch.
- There is no test CI on GitHub: run the project's lint and tests before
  opening a pull request, and say in it what was run.
<!-- projects-workflow:end -->
