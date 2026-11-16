---
description: "Research and design a third-party integration from official docs, before implementing."
disable-model-invocation: true
argument-hint: "<provider or API>"
---

Integrate: $ARGUMENTS

Read the current official docs first. Summarize: auth, SDK vs API, version, limits, webhooks and signature verification, idempotency, retries, timeouts, sandbox, pricing and required env vars.

Then propose the adapter design (provider code isolated behind an adapter, AGENTS.md §8) and failure handling. Ask me about provider and product choices before implementing. Document any new env vars.
