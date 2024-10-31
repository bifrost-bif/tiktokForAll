import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from './pages/Home';
import GroupStage from './pages/GroupStage';
import KnockoutStage from './pages/KnockoutStage';
import Sanctions from './pages/Sanctions';
import JoueursInscrits from './pages/JoueursInscrits';
import Navbar from './components/Navbar';
import Calendar from "./pages/Calendrier";
import Footer from './components/Footer';
import PolitiqueCookies from './pages/PolitiqueCookies';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import MentionsLegales from './pages/MentionsLegales';
import ConditionsUtilisation from './pages/ConditionsUtilisation';
import ContactDonnees from './pages/ContactDonnees';
import Mosammin from './pages/Mosammin';

import './App.css'; // Fichier CSS pour styliser la page

import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBNQ2DVdcnmk0HHDy4EfDn1Wkeoj310Ho4",
    authDomain: "tiktok-for-all.firebaseapp.com",
    projectId: "tiktok-for-all",
    storageBucket: "tiktok-for-all.appspot.com",
    messagingSenderId: "706031036931",
    appId: "1:706031036931:web:e36c7e387e41d9f4cf3c36",
    measurementId: "G-QCV81DKK17"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const messaging = firebase.messaging();

function App() {
    const [installPrompt, setInstallPrompt] = useState(null);

    fetch('127.0.0.1:3008/register-token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userId: '0', // Remplacez par un identifiant utilisateur unique
        token: 'fcm_token' // Token FCM reçu du client
    })
});

    useEffect(() => {
        // Capture l'événement 'beforeinstallprompt' pour l'installation de l'application
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setInstallPrompt(e); // Sauvegarde l'événement pour une utilisation ultérieure
        });

        // Demande la permission pour les notifications
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                messaging.getToken({ vapidKey: "BK4y6k9l_bWxNROxYpW8uDVxtvRtNA9bMmNx6_rQ_4Lv53MkYIstim05ECM8lTdyOK19Q7bjeGln8fSZQDmYy30" })
                    .then((token) => {
                        console.log('Notification token:', token);
                        
                        // Envoyer le token au serveur pour l'enregistrer dans Firestore
                        fetch('127.0.0.1:3008/register-token', { // Remplacez par l'URL de votre serveur
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userId: 'unique_user_id', // Remplacez par un identifiant d’utilisateur unique
                                token: token // Le token FCM obtenu
                            })
                        })
                        .then(response => {
                            if (response.ok) {
                                console.log('Token enregistré avec succès sur le serveur');
                            } else {
                                console.error('Erreur lors de l\'enregistrement du token sur le serveur');
                            }
                        })
                        .catch((error) => console.error('Erreur de réseau lors de l\'envoi du token:', error));

                    })
                    .catch((err) => {
                        console.log('Erreur lors de la récupération du token', err);
                    });
            } else {
                console.log('Permission de notification refusée');
            }
        });
    }, []);

    const handleInstallClick = () => {
        if (installPrompt) {
            installPrompt.prompt();
            installPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                setInstallPrompt(null);
            });
        }
    };

    return (
        <Router>
            <Navbar /> {/* Barre de navigation */}
            <div className="App">
                {installPrompt && (
                    <button className="install-button" onClick={handleInstallClick}>
                        Disponible en application mobile
                    </button>
                )}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/group-stage" element={<GroupStage />} />
                    <Route path="/knockout-stage" element={<KnockoutStage />} />
                    <Route path="/joueurs-inscrit" element={<JoueursInscrits />} />
                    <Route path="/sanctions" element={<Sanctions />} />
                    <Route path="/eliminatoire" element={<KnockoutStage />} />
                    <Route path="/classement" element={<GroupStage />} />
                    <Route path="/calendrier" element={<Calendar />} />
                    <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                    <Route path="/mentions-legales" element={<MentionsLegales />} />
                    <Route path="/politique-cookies" element={<PolitiqueCookies />} />
                    <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
                    <Route path="/contact-donnees" element={<ContactDonnees />} />
                    <Route path="/mosammin" element={<Mosammin />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

                <Footer /> {/* Ajout du footer */}
            </div>
        </Router>
    );
}

export default App;
