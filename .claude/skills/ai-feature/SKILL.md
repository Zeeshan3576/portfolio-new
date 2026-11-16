---
description: "Design an AI/LLM feature with provider, cost, safety and validation decisions surfaced first."
disable-model-invocation: true
argument-hint: "<feature>"
---

AI feature: $ARGUMENTS

Don't pick a provider or model silently; that's my decision (AGENTS.md §8). Define: user flow, model options, prompt design, structured output schema, context/retrieval, token limits, caching, validation, retries, fallback, timeouts, latency target, cost controls, PII handling, prompt-injection defences, evaluation and observability.

Present decisions first. Validate output deterministically outside the model, and never let model output trigger privileged actions without normal validation and authorization.
