# Favoje Battle

A secure, mobile-first academic esports platform for approved FUTMINNA students.

## Current implementation status

This repo now contains a clean starter platform scaffold with:

- premium responsive UI shell
- shared style system and theme switching
- route structure for landing, auth, dashboard, battles, tournaments, settings, and admin
- Firebase-ready configuration placeholders
- Firestore rule templates and index scaffolds
- Cloud Functions starter stubs
- PWA manifest and offline shell
- admin approval overview UI

## Architecture layer

The repository is organized around the following principle:

- frontend pages and screens are static and browser-driven
- business logic, auth, approvals, performed match validation, tournament actions, and rewards all belong in Firebase + server functions
- the frontend is intentionally safe and non-authoritative

## Production requirements before launch

Before enabling real user accounts, live matches, rankings, or voice rooms, complete the following:

1. Configure Firebase Authentication
2. Configure Firestore and deploy the rules file
3. Deploy Cloud Functions
4. Turn on App Check
5. Add admin approval workflows
6. Implement real tournament and match validation on the backend
7. Add WebRTC signaling and TURN secure credentials

## Local run

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Important note

The repository is intentionally a secure architecture foundation. It does not use fake leaderboard data or fabricated competition records.
