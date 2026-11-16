---
description: "Read-only handover analysis of the repo, plus a draft of AGENTS.md §0."
disable-model-invocation: true
---

Act as the incoming senior engineer. Don't modify any code.

Inspect the repo and give me a concise system map: purpose, architecture, frontend, backend, database, auth, integrations, queues/workers, caching, deployment, CI/CD, testing, AI components.

Then list: technical debt, security and operational risks, fragile areas, missing docs, your top 10 recommended actions, and questions only the original team can answer.

Finally, draft the "Repository specifics" section (§0) of AGENTS.md from what you found, using the real commands from package.json and the real folder layout. Show it to me; don't write it to the file until I approve.

$ARGUMENTS
