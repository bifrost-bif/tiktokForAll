import React from 'react';
import { Typography } from '@mui/material';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h3" gutterBottom>Bienvenue au Tournoi</Typography>
            <Typography variant="h5">Sélectionnez une phase pour voir les groupes ou les éliminations directes.</Typography>
        </div>
    );
};

export default Home;
