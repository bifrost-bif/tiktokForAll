/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.registerToken = functions.https.onRequest(async (req, res) => {
    const { userId, token } = req.body;

    if (!userId || !token) {
        return res.status(400).send('userId and token are required');
    }

    try {
        await db.collection('fcmTokens').doc(userId).set({ token }, { merge: true });
        console.log(`Token enregistré pour l'utilisateur ${userId}`);
        res.status(200).send('Token enregistré');
    } catch (error) {
        console.error('Erreur lors de l’enregistrement du token:', error);
        res.status(500).send('Erreur lors de l’enregistrement');
    }
});



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
