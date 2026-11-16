---
description: "Pre-release GO / BLOCKED check before merging a release branch to prod."
disable-model-invocation: true
argument-hint: "[release version]"
---

Pre-release review for $ARGUMENTS. No new features.

Check: requirements and acceptance criteria, lint, typecheck, tests, build, migrations (safety and rollback), backward compatibility, env vars, secrets, security, logging and monitoring, rollout and rollback plan, README and docs, known limitations, and that the release branch follows §12 (release/vX.Y.Z cut from prod).

Return GO or BLOCKED. If blocked, list the exact blockers and fixes. Only say GO if evidence supports it.
