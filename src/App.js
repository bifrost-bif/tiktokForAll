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
import TirageAuSort from './pages/TirageAuSort';


import AdminPage from './components/AdminPage';

import './App.css';
import FinalAnnouncement from "./pages/FinalAnnouncement";

function App() {
    const [installPrompt, setInstallPrompt] = useState(null);

    useEffect(() => {
        // Capture l'événement 'beforeinstallprompt' pour proposer l'installation
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setInstallPrompt(e); // Sauvegarde l'événement pour une utilisation ultérieure
        });

        // Ajoute des restrictions sur le clic droit et les raccourcis pour limiter l'accès au code source
        const handleContextMenu = (e) => e.preventDefault();
        const handleKeyDown = (e) => {
            if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'Shift')) {
                e.preventDefault();
            }
        };

        //document.addEventListener('contextmenu', handleContextMenu);
        //document.addEventListener('keydown', handleKeyDown);

        // Nettoyage des événements lors de la désactivation du composant
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
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
                <Routes>
                    <Route path="/" element={<FinalAnnouncement />} />
                    <Route path="/Accueil" element={<Home />} />
                    <Route path="/joueurs-inscrits" element={<JoueursInscrits />} />
                    <Route path="/sanctions" element={<Sanctions />} />
                    <Route path="/phase-de-groupe" element={<GroupStage />} />
                    <Route path="/eliminatoire" element={<KnockoutStage />} />
                    <Route path="/phase-eliminatoire" element={<KnockoutStage />} />
                    <Route path="/calendrier" element={<Calendar />} />
                    <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                    <Route path="/mentions-legales" element={<MentionsLegales />} />
                    <Route path="/politique-cookies" element={<PolitiqueCookies />} />
                    <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
                    <Route path="/contact-donnees" element={<ContactDonnees />} />
                    <Route path="/mosammin" element={<Mosammin />} />
                    <Route path="/admin" element={<AdminPage/> } />
                    <Route path="/tirage-au-sort" element={<TirageAuSort/> } />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                
                <Footer />
            </div>
        </Router>
    );
}

export default App;
