const admin = require('firebase-admin');
const serviceAccount = require('./tiktok-for-all-firebase-adminsdk-afsct-754b75cafe.json'); 
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Chemin vers le fichier tokens.json
const tokensFilePath = path.join(__dirname, 'tokens.json');

// Fonction pour vérifier et initialiser tokens.json s'il est vide ou inexistant
const initializeTokensFile = () => {
    if (!fs.existsSync(tokensFilePath)) {
        console.log('Création du fichier tokens.json...');
        fs.writeFileSync(tokensFilePath, JSON.stringify({}), 'utf8');
    } else {
        // Vérifier si le fichier est vide et le réinitialiser si nécessaire
        const data = fs.readFileSync(tokensFilePath, 'utf8');
        if (!data || data.trim() === '') {
            console.log('Initialisation du fichier tokens.json avec un objet vide...');
            fs.writeFileSync(tokensFilePath, JSON.stringify({}), 'utf8');
        }
    }
};

// Initialiser tokens.json au démarrage du serveur
initializeTokensFile();

// Endpoint pour enregistrer le token
app.post('/register-token', (req, res) => {
    const { userId, token } = req.body;

    if (!userId || !token) {
        return res.status(400).send('userId and token are required');
    }

    // Charger et mettre à jour tokens.json
    fs.readFile(tokensFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de lecture du fichier tokens.json', err);
            return res.status(500).send('Erreur serveur');
        }

        const tokens = data ? JSON.parse(data) : {}; // Utiliser un objet vide si le fichier est vide
        tokens[userId] = token;

        // Écrire dans tokens.json
        fs.writeFile(tokensFilePath, JSON.stringify(tokens, null, 2), (err) => {
            if (err) {
                console.error('Erreur lors de l’écriture dans tokens.json', err);
                return res.status(500).send('Erreur serveur');
            }
            console.log(`Token enregistré pour l'utilisateur ${userId}`);
            res.status(200).send('Token enregistré');
        });
    });
});

// Fonction pour envoyer des notifications à tous les tokens enregistrés
const sendNotificationsToAll = () => {
    fs.readFile(tokensFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de lecture du fichier tokens.json', err);
            return;
        }

        const tokens = JSON.parse(data);
        const tokenList = Object.values(tokens);

        const message = {
            notification: {
                title: 'Nouveau Match!',
                body: 'Un match est sur le point de commencer!'
            },
            tokens: tokenList
        };

        admin.messaging().sendMulticast(message)
            .then((response) => {
                console.log('Notifications envoyées:', response.successCount);
            })
            .catch((error) => {
                console.error('Erreur en envoyant les notifications:', error);
            });
    });
};

// Route pour tester l'envoi des notifications
app.post('/send-notifications', (req, res) => {
    sendNotificationsToAll();
    res.status(200).send('Notifications envoyées à tous les utilisateurs enregistrés');
});

const PORT = 3008;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
