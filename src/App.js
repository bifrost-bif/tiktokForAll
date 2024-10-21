import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import GroupStage from './pages/GroupStage';
import KnockoutStage from './pages/KnockoutStage';
import Sanctions from './pages/Sanctions'; // Exemple de page pour les sanctions
import JoueursInscrits from './pages/JoueursInscrits'; // Exemple de page des joueurs inscrits
import Navbar from './components/Navbar';
import Calendar from "./pages/Calendrier"; // Import de la barre de navigation

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
            </Routes>
        </Router>
    );
}

export default App;
