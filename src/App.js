import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
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
import Mosammin from './pages/Mosammin'; // Import the new Mosammin page

import './App.css'; // Fichier CSS pour styliser la page


function App() {

    const [installPrompt, setInstallPrompt] = useState(null);

    useEffect(() => {
        
        // Écouter l'événement 'beforeinstallprompt' pour capturer l'invite d'installation
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setInstallPrompt(e); // Sauvegarde l'événement pour l'utiliser plus tard
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
            <Navbar/> {/* Barre de navigation */}
            <div className="App">
                {installPrompt && (
                    <button className="install-button" onClick={handleInstallClick}>
                         Disponible en application mobile
                    </button>
                )}

                {/* Instructions for iOS users to manually install the app */}
                {navigator.userAgent.includes("iPhone") && (
                    <div className="ios-install-instructions">
                        <p>Pour installer cette application sur votre iPhone, appuyez sur <strong>"Partager"</strong> dans la barre de navigation, puis sélectionnez <strong>"Ajouter à l'écran d'accueil"</strong>.</p>
                    </div>
                )}

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/group-stage" element={<GroupStage/>}/>
                    <Route path="/knockout-stage" element={<KnockoutStage/>}/>
                    <Route path="/joueurs-inscrit" element={<JoueursInscrits/>}/>
                    <Route path="/sanctions" element={<Sanctions/>}/>
                    <Route path="/eliminatoire" element={<KnockoutStage/>}/>
                    <Route path="/classement" element={<GroupStage/>}/>
                    <Route path="/calendrier" element={<Calendar/>}/>
                    <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite/>}/>
                    <Route path="/mentions-legales" element={<MentionsLegales/>}/>
                    <Route path="/politique-cookies" element={<PolitiqueCookies/>}/>
                    <Route path="/conditions-utilisation" element={<ConditionsUtilisation/>}/>
                    <Route path="/contact-donnees" element={<ContactDonnees/>}/>
                    <Route path="/mosammin" element={<Mosammin />} />
                </Routes>
                <Footer/> 
            </div>
        </Router>
    );
}

export default App;
