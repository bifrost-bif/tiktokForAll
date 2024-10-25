// server/server.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Pour gérer les requêtes cross-origin
const app = express();
const PORT = 5000; // Port du serveur

// Middleware pour analyser le JSON dans les requêtes POST
app.use(express.json());
app.use(cors()); // Autoriser les requêtes CORS pour interagir avec le client React

// Chemin du fichier JSON
const dataFilePath = path.join(__dirname, '../src/data.json');

// Route pour obtenir les données JSON
app.get('/api/data', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture des données:", err);
            return res.status(500).json({ error: 'Erreur de lecture du fichier' });
        }
        res.json(JSON.parse(data));
    });
});

// Route pour mettre à jour les données JSON
app.post('/api/data', (req, res) => {
    fs.writeFile(dataFilePath, JSON.stringify(req.body, null, 2), 'utf8', (err) => {
        if (err) {
            console.error("Erreur lors de la sauvegarde des données:", err);
            return res.status(500).json({ error: 'Erreur de sauvegarde du fichier' });
        }
        res.json({ message: 'Données mises à jour avec succès' });
    });
});

app.delete('/api/groups/:index', (req, res) => {
    const index = parseInt(req.params.index);
    fs.readFile('data.json', (err, data) => {
        if (err) {
            return res.status(500).send('Erreur lors de la lecture des données');
        }
        const jsonData = JSON.parse(data);
        jsonData.groups.splice(index, 1);
        fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Erreur lors de la mise à jour des données');
            }
            res.status(200).send('Groupe supprimé');
        });
    });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
