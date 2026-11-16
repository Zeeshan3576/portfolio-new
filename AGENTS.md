# AGENTS.md

> Rules for Claude Code, loaded through CLAUDE.md. The human owns product and architecture decisions. The agent owns research, implementation quality, verification, and execution after approval.

Team commands are skills in `.claude/skills/`. Devs run them with `/<name>`.

---

## 0. Repository specifics

- **Product:** Personal portfolio website (currently the Create Next App scaffold; no content yet).
- **Stack:** Next.js 16.4 (App Router, Turbopack) + React 19.3, TypeScript (strict), Tailwind CSS 4.3. No backend, database or auth.
- **Layout:** `src/app/` (App Router routes, `layout.tsx`, `globals.css`), `public/` (static assets). Import alias `@/*` → `src/*`.
- **Install:** `npm install`
- **Dev:** `npm run dev`
- **Lint:** `npm run lint`
- **Typecheck:** `npx tsc --noEmit` (no script yet)
- **Test:** none configured yet
- **Build:** `npm run build` (needs network for Google Fonts)
- **Migrations:** n/a (no database)
- **Conventions:** Server Components by default; `cacheComponents` and `partialPrefetching` are enabled in `next.config.ts`, so read `node_modules/next/dist/docs/` before adding data fetching or caching. Theme colours are CSS variables in `globals.css` exposed through Tailwind `@theme`. Fonts via `next/font`.
- **Multi-tenancy:** n/a
- **Do not touch:** `.env*`, `.next/`, `next-env.d.ts` (generated), `package-lock.json` except through npm, the `nextjs-agent-rules` block at the end of this file (managed by `next dev`).

## 1. Precedence

1. The human's direct instruction in the current task
2. The nearest nested `AGENTS.md`
3. This file

If a newer instruction from the human changes an earlier decision, follow the new one and say which work it affects.

## 2. Size the task first

| Tier | Examples | Workflow |
|---|---|---|
| **Small** | Bug with clear intended behaviour, copy change, test addition, follows existing pattern | Implement → verify → report |
| **Medium** | New endpoint or screen within existing architecture | Short plan → flag decisions inline → proceed on reversible choices → verify → report |
| **Large** | Schema change, auth, new infra/service/dependency, breaking API change, cross-cutting refactor | Full proposal (§5) → wait for approval → plan → implement → verify → report |

When unsure between two tiers, pick the higher one.

## 3. Decision ownership

### You may decide alone
Choices that follow existing repo conventions, are internal, reversible, don't change external behaviour, data contracts, security posture or cost, and have one obvious answer. Examples: naming, extracting helpers, adding tests, fixing a bug whose intended behaviour is clear. Mention notable assumptions in the report.

### You must ask
- Product behaviour, UX, business rules, scope, acceptance criteria
- Public API contracts or breaking changes
- Auth / authorization approach, tenant isolation, encryption, privacy-sensitive processing
- Database schema, migrations (especially irreversible ones), storage choice
- Any new dependency, framework, paid service, or LLM provider/model
- Infrastructure, deployment, queue/cache technology
- Billing or financial behaviour
- Any choice between materially different approaches

### How to ask
Group questions. Never ask what the repo, its docs, or its config can answer.

```md
## Decisions needed

### D1 — <decision>
**Context:** why it matters
**A:** approach — pros / cons / complexity / reversibility
**B:** ...
**Recommended:** B, because ...
**Choose:** A / B / other
```

Don't implement the part that depends on an open decision. Keep going on independent work.

## 4. Investigate before asking

- Read the relevant code, schema, tests, config, and CI before proposing anything. Search before assuming something doesn't exist.
- Extend existing patterns rather than inventing new ones.
- For unfamiliar APIs, libraries, or provider behaviour, check official docs first (then source repos and specs; blogs and forums only as support).
- **If network access is unavailable,** proceed from repo evidence and list any unverified external assumptions in the report.

Bad: "Which test runner should I use?" when the repo already uses Jest.
Good: "The repo uses Jest, so I extended the existing suite."

## 5. Proposal format (Large tasks)

- **Objective** and **current state**
- **Proposed change** and **affected files/modules**
- **API / data changes** (schemas, migrations, backfill, rollback)
- **Security** (authn, authz, validation, tenancy, secrets)
- **Failure behaviour** (timeouts, retries, idempotency, partial failure)
- **Testing strategy** and **rollout** (migration order, compatibility, feature flags)
- **Decisions needed** (§3 format)

Maintain two short tables in the plan for Large tasks:

```md
| ID | Decision | Selected | Reason | Status |
| ID | Assumption | Evidence | Risk if wrong |
```

Never change an approved decision silently. If evidence forces a rethink, reopen it explicitly.

## 6. Unattended runs

When no human can respond (cloud task, background run, `claude -p`):

- Complete all reversible work that doesn't depend on an open decision.
- Stop before any material decision. Don't pick one on the human's behalf.
- End with the **Decisions needed** block and what's ready to continue once answered.

## 7. Implementation rules

- Keep changes scoped to the approved objective. No unrelated refactors.
- Preserve backward compatibility unless a breaking change was approved.
- Validate all untrusted input at the boundary. Handle errors explicitly.
- Never hardcode secrets, tokens, or environment-specific URLs. Never log passwords, auth headers, keys, or payment data.
- No unexplained TODOs, no debug logs, no suppressed lint/type errors without a written reason.
- Comments explain *why*, not *what*.
- Readability over cleverness. No premature abstractions. No duplicated business logic.

### AB Ark coding standards (SSDP ARK-03-02-052, mandatory)

- **Naming:** React components, classes, interfaces and types in PascalCase. Interfaces prefixed `I` (`IUserProfile`), types prefixed `T` (`TUserProfile`). No `Impl` suffix. Functions and variables camelCase with descriptive verbs/names. Constants SCREAMING_SNAKE_CASE, grouped in enums or constant objects.
- **File names:** React component files PascalCase. Utility, API and Redux files camelCase. Next.js App Router files kebab-case. Tests `*.test.ts` or `*.spec.ts`, named `should <expected behaviour> when <condition>`.
- **File size:** max 300 lines per file excluding comments/blank lines (aim 150–200). Components ≤ 200, utilities ≤ 250, type files ≤ 100. Over the limit → split by responsibility (hooks, utils, sub-components).
- **Imports, in order:** React/external libraries → internal components and utilities → types/interfaces → relative imports.
- **Quality:** no unused variables or imports. No `console.log` in production code. Small single-purpose functions, early returns over nesting.
- **Errors:** handle API errors gracefully with user-friendly messages, log errors for troubleshooting, wrap critical UI in Error Boundaries with a fallback.
- **Security:** no secrets, keys or tokens in client-side code. Server-side validation always; client-side validation never replaces it. Enforce authorization on every protected resource (no IDOR, no horizontal/vertical escalation).

## 8. Area-specific rules

**APIs:** define request/response schema, validation, authn/authz, error contract, and pagination for lists. Don't leak internal errors. Document breaking changes before implementing.

**Database:** inspect schema and migration history first. Consider indexes, locking, data volume, nullable/default transitions, backfill, rollback, and old/new app version compatibility. Destructive or hard-to-reverse migrations need approval. Never casually drop data.

**Security:** check authz on every new path (including IDOR), tenancy isolation, injection, XSS/CSRF/SSRF where relevant, file-upload validation, token expiry, webhook signature verification, rate limiting. Surface security-sensitive design choices before implementing.

**Async jobs & retries:** assume at-least-once delivery; make jobs idempotent. Define payload, retry count and backoff, timeout, dead-letter handling, concurrency. Retry only transient failures (network, throttling); never retry validation, authz, or business-rule failures. Keep retries bounded.

**Caching:** define key, TTL, invalidation, tenant/user scoping, and behaviour when the cache is down. Don't cache to hide a broken data model.

**AI / LLM:** provider and model are human decisions. Use structured output with deterministic validation outside the model. Define timeouts, retries, fallback, cost limits, and PII handling. Model output must never trigger privileged actions without normal validation and authorization.

**Third-party integrations:** read official docs, use sandbox mode, isolate provider code behind an adapter, verify webhook signatures, handle rate limits, and document new env vars.

## 9. Bug fixes and refactors

**Bugs:** reproduce or trace → find the root cause (not just the symptom) → fix → add a regression test where feasible → verify. Don't patch the first suspicious line. If intended behaviour is unclear, ask.

**Refactors:** behaviour must not change unless approved. Establish a passing baseline first, add characterization tests if coverage is thin, change in small steps, keep tests green.

## 10. Verification gate

Run the commands from §0 that apply: lint, typecheck, tests, build.

- Never report a check as passing unless it actually ran and passed.
- If a check couldn't run, say which one and why. "Not run" is not "passed."
- Don't invent commands; use the ones in §0 or the repo's config.

## 11. Self-review before reporting

Read your own diff for: wrong behaviour, missed edge cases, missing validation or authz, breaking changes, race conditions, transaction issues, migration hazards, N+1 queries, weak error handling, test gaps, dead code, debug logs, hardcoded values. Fix what you find unless it needs a new decision.

## 12. Git and PRs

AB Ark uses adapted GitFlow (SSDP §7.3.3–7.3.4):

| Branch | Purpose |
|---|---|
| `main` | Latest stable, production-ready |
| `develop` | Integration branch for all ongoing work |
| `uat` | Staging / pre-production validation |
| `prod` | What is live. Most protected |
| `feature/<short-name>` | One task each. Created from `prod`, PR into `develop` |
| `release/vX.Y.Z` | Cut from `prod`. TL-only write access |
| `hotfix/vX.Y.Z` | Cut from `prod` for critical production defects |

- Never commit, merge or push to `main`, `develop`, `uat`, `prod` or `release/*` directly. All changes go through a PR.
- Commits use Conventional Commits (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`), small and focused. Don't mix unrelated changes.
- Never force-push, rewrite shared history, delete remote branches, or commit secrets unless the human explicitly instructs it.
- Before opening a PR: tests pass, no TypeScript errors, standards followed, behaviour manually verified, docs updated if setup/env/API/deployment changed.
- PR description: what changed and why, linked task, dependencies, decisions applied, testing performed, manual test steps, risks.

## 13. Scope control

If you find an unrelated problem, don't fix it. Report it:

```md
### Out-of-scope finding
Found: ...
Impact: ...
Recommended action: ...
```

Exception: fix it if the approved task can't be correct without it, or if it's a critical security or data-loss issue (and say so).

## 14. Stop conditions and incidents

Stop and ask when: requirements conflict, a serious security issue would be introduced, data would be destroyed, a breaking change or major architecture change is needed, a paid dependency or production secret is required, or a licensing issue appears.

**Production incident:** mitigate → preserve data → diagnose → fix → verify → postmortem notes. Smallest safe mitigation first, no refactors. Destructive actions (deleting data, dropping tables, rotating keys, force-pushing, resetting infra) need explicit approval.

## 15. Documentation

Write docs only when they preserve a decision or make future work safer.

- **ADR** (`docs/decisions/ADR-XXXX-title.md`) only for approved decisions on schema, auth, infrastructure, new services, or new major dependencies. Format: Status, Context, Decision, Alternatives, Consequences, Date.
- **Plan doc** (`docs/plans/<feature>.md`) only for Large tasks spanning multiple sessions.
- Update README / env examples when setup or env vars change.

## 16. Completion report

```md
## Done
What now works.

## Files changed
Key files and why.

## Decisions & assumptions
Approved decisions applied; assumptions made.

## Verification
PASS/FAIL/NOT RUN per command, with reason for anything not run.

## Risks / limitations
Anything unresolved.

## Manual test steps
Short steps to verify by hand.

## Next step
The single most useful follow-up.
```

## 17. Communication

Be concise, specific, and evidence-based, like a senior engineer talking to the technical owner. Lead with what you found, then the decision, then your recommendation.

Not: "There are many ways to do this. What do you want?"
But: "The API already uses Redis. For this queue we can (A) use BullMQ on existing Redis or (B) add RabbitMQ. I recommend A since the infra exists and we don't need broker routing. Proceed with A?"

### Step-by-step mode
If the human says "work with me step by step": inspect → report → present the next decision → wait → implement it → verify → present the next decision. Don't dump future decisions that depend on earlier results.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
