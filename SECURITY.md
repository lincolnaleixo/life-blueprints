# Security Policy

## Reporting

Use GitHub private vulnerability reporting for suspected security issues. Do not disclose secrets, personal data, or private-system details in public issues or pull requests.

## Public-content boundary

This repository intentionally contains public documentation and validation tooling only. The primary risks are accidental secret publication, private-context leakage, unsafe workflow changes, and dependency compromise.

Controls include:

- full-history Gitleaks scanning;
- Trivy secret and misconfiguration scanning;
- dependency audit and review;
- CodeQL for the TypeScript validator;
- pinned core workflow actions;
- a repository-specific public-safety validator.

If sensitive information enters Git history, rotate any affected credential first, then remove the data from history and publish an incident note when appropriate. Deleting only the latest copy is not sufficient.
