---
description: "Security review of a scope against the SSDP security guidelines. Read-only."
disable-model-invocation: true
argument-hint: "<scope: module, endpoint or folder>"
---

Security review of: $ARGUMENTS

Don't modify code. Check against SSDP §7.4: authentication, session management, authorization (IDOR, horizontal and vertical escalation), input validation and injection, XSS/CSRF/SSRF, file uploads, secrets in client code, logging of sensitive data, security headers and CORS, rate limiting and brute-force protection, cryptography, webhooks, tenancy isolation, dependencies, data exposure.

Rank findings Critical / High / Medium / Low, each with evidence, exploit scenario, impact, location and fix. Finish with a remediation plan.
