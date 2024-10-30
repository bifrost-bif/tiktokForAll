import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
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


function App() {
    return (
        <Router>
            <Navbar/> {/* Barre de navigation */}
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
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer/> {/* Ajout du footer */}
        </Router>
    );
}

export default App;
