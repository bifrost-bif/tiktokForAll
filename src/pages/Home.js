import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import './home.css';

const Home = () => {
    return (
        <div className="group-stage-container">
            {/* Section pour l'affiche du tournoi */}
            <Typography variant="h5">Sélectionnez une phase pour voir les groupes ou les éliminations
                directes.</Typography>
            <img src="/images/affiche.png" alt="Affiche du Tournoi" className="tournoi-image"/>
        </div>
    )
};

export default Home;
