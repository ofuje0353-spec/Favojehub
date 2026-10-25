# Favoje Battle

A secure, mobile-first, installable academic esports platform for approved FUTMINNA students.

This repository now functions as a secure architecture scaffold for the production platform. It intentionally avoids demo data and fabricated competitive records. Real player and match data must be created and verified through Firebase and trusted backend operations only.

## Current status

This scaffold includes:

- production-oriented page structure and route organization
- mobile-first design shell with shared styling tokens
- 14 themes with light/dark variants and instant theme switching
- Firebase-ready configuration module
- Firestore security rule template and indexes
- Cloud Functions starter structure
- PWA manifest and service worker skeleton
- admin and player layout shells
- accessibility and reduced-motion support

## Non-goals for this scaffold

This repository does not claim to provide complete live gameplay, real matchmaking, verified tournament results, real leaderboard data, or production voice signaling without a configured Firebase project and backend deployment.

## Architecture

- Frontend pages live in the repository root and `admin/` directory.
- Shared styling is in `css/styles.css`.
- Application logic is in `js/`.
- Firebase config is in `js/firebase-config.js`.
- Security and database requirements are in `firestore.rules` and `firestore.indexes.json`.
- Trusted server logic is in `functions/index.js`.
- PWA shell is configured via `manifest.json` and `service-worker.js`.

## Required production setup

Before enabling authentication, matchmaking, score validation, or real competitive operations, complete the following external setup:

1. Create or connect your Firebase project.
2. Enable Firebase Authentication.
3. Enable Cloud Firestore.
4. Enable Cloud Functions.
5. Enable App Check.
6. Configure Hosting.
7. Configure WebRTC signaling and TURN infrastructure.
8. Deploy `firestore.rules` and `firestore.indexes.json`.
9. Deploy `functions/index.js`.
10. Add approved institutional student access rules and admin permissions.

## Firebase configuration

Use the values in `js/firebase-config.js` as the starting configuration placeholder only. Replace the placeholders with your actual Firebase web app settings before production deployment.

## Security reminders

- Never put service-account keys or private credentials in frontend code.
- Do not trust front-end values for admin permissions, match scoring, reward issuance, or leaderboard changes.
- Use server timestamps, transactions, idempotency, and backend validation for all competitive operations.
- Voice data must stay live-only; never record or store audio.

## Local run

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Known limitations

The current repository is a secure implementation scaffold. Live production gameplay and moderation require backend operations, Firebase project configuration, real data, and institutional approval workflows.
