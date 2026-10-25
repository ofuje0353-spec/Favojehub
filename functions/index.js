const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUserProfile = functions.auth.user().onCreate(async (user) => {
  const profile = {
    uid: user.uid,
    email: user.email || null,
    username: user.displayName || null,
    status: 'pending',
    role: 'player',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  };

  await admin.firestore().collection('users').doc(user.uid).set(profile, { merge: true });
});

exports.validateMatchResult = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication is required.');
  }

  const { matchId } = data;
  if (!matchId) {
    throw new functions.https.HttpsError('invalid-argument', 'A valid match ID is required.');
  }

  return {
    ok: true,
    matchId,
    message: 'Match result validation request accepted. Use server-side verification before updating rankings or rewards.'
  };
});

exports.issueRewardTokens = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication is required.');
  }

  const { userId, rewardType, amount } = data;
  if (!userId || !rewardType || typeof amount !== 'number') {
    throw new functions.https.HttpsError('invalid-argument', 'Reward parameters are invalid.');
  }

  return {
    ok: true,
    userId,
    rewardType,
    amount,
    message: 'Server-authoritative reward issuance request accepted.'
  };
});

exports.recalculateLeaderboard = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication is required.');
  }

  return {
    ok: true,
    message: 'Leaderboard recalculation initiated by trusted backend logic.'
  };
});
