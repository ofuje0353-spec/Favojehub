# Favoje Battle

Favoje Battle is a mobile-first, premium academic esports platform for approved FUTMINNA students. This repository is a production-oriented starter implementation that includes the application shell, Firebase-ready architecture, theme system, PWA configuration, secure security rules, and the expected project structure for the full platform.

## Project structure

- `index.html` — landing page
- `login.html` — email/username login
- `register.html` — student registration
- `dashboard.html` — player dashboard
- `modes.html` — competition modes
- `battle.html` — 1v1 battle
- `battle-rush.html` — Battle Rush
- `tournaments.html` — tournament browser
- `private-room.html` — private room lobby
- `voice-settings.html` — voice controls
- `leaderboard.html` — rankings
- `profile.html` — player profile
- `history.html` — match and tournament history
- `notifications.html` — notifications centre
- `settings.html` — settings
- `admin/` — admin pages
- `css/` — styles and theme system
- `js/` — app modules and Firebase integration
- `functions/` — Cloud Functions backend
- `firestore.rules` — Firestore Security Rules
- `firestore.indexes.json` — Firestore indexes
- `manifest.json` — PWA web app manifest
- `service-worker.js` — cached shell

## Features implemented in this starter

- Premium landing page and navigation shell
- Mobile-first responsive layout
- 14 theme system with Light/Dark variants
- Firebase configuration module with real project values provided by the project owner
- PWA manifest and service worker shell
- Login/register UI flows and validation structure
- Dashboard, leaderboard, settings, notifications, and admin pages
- Firestore security rules and index definitions
- Cloud Functions skeleton for trusted backend operations
- Theme persistence, loading states, and empty states
- Accessibility basics, focus styles, and reduced motion handling

## Important note

This project intentionally does not include fake records, fabricated tournament results, or simulated competitive data. The app shell is designed for real Firebase-backed data and server validation.

## Firebase setup

1. Copy the Firebase web configuration from the repo's `js/firebase-config.js`.
2. Create a Firebase project.
3. Enable Authentication, Firestore, Cloud Functions, App Check, and Hosting.
4. Add the authorized domains for your deployment.
5. Configure `firestore.rules` and `firestore.indexes.json` in the Firebase Console.
6. Deploy Cloud Functions from `functions/`.
7. Set up WebRTC signaling and TURN infrastructure as required for real voice rooms.

## Firestore Rules

Production-oriented rules are included in `firestore.rules` and are intentionally strict by default. They require auth, approval checks for competitive operations, and administrative access for privileged writes.

## Cloud Functions

The starter includes `functions/index.js` with example structured exports for:

- user profile creation
- admin moderation operations
- match result validation
- reward issuance
- leaderboard recalculation

These must be hardened with transactions, idempotency, and validation before production use.

## PWA setup

The app includes:

- `manifest.json`
- `service-worker.js`
- icons can be added under `assets/` and referenced from the manifest

## WebRTC and voice guidance

- WebRTC is used for live voice only.
- No voice recording, replay, or storage is permitted.
- Use Firebase signaling and TURN for real-world connectivity.
- Keep TURN credentials server-side and never ship them in client code.

## Local preview

You can serve the static site locally with any lightweight web server, for example:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Deployment

Use Firebase Hosting for the static application shell, and deploy the Cloud Functions for server-side logic. Detailed deployment steps are provided in the project docs and should be adapted to your Firebase project settings.

## Security reminders

- Never place service-account keys, TURN secrets, or private credentials in client files.
- Do not trust front-end state for admin permissions, match scoring, reward issuance, or ranking changes.
- Use server timestamps, validation, transactions, and idempotency keys for all competitive operations.

## Known limitations

This repository is a structured implementation and secure architecture scaffold. Full real-time gameplay, voice signaling, matchmaking, and admin moderation are backend-dependent and require a configured Firebase project, cloud functions, and production data rules.

## License

This project is provided as a starter implementation for the requested platform and should be adapted to your Firebase project configuration and institutional requirements.

