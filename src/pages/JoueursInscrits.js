import React, { useState } from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'; // Icône pour indiquer l'attente
import './JoueursInscrits.css';

const JoueursInscrits = () => {
    const [isReady, setIsReady] = useState(false); // Changez à true lorsque la liste est prête

    return (
        <div className="joueurs-inscrits-container">
            <Typography variant="h4" className="joueurs-inscrits-title">
                Liste des Joueurs Inscrits
            </Typography>
            
            {/* Afficher un message de préparation si la liste n'est pas prête */}
            {!isReady ? (
                <Box className="preparation-message" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '70vh',
                    backgroundColor: '#f9f9f9',
                    borderRadius: 2,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    padding: 4,
                    textAlign: 'center',
                }}>
                    <HourglassEmptyIcon sx={{ fontSize: 50, color: '#ff9800', marginBottom: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Page en cours de préparation
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', marginTop: 1 }}>
                        La liste des joueurs inscrits sera disponible sous peu. Veuillez revenir dans quelques jours.
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={10}>
                        <Paper className="joueurs-inscrits-paper">
                            <div className="table-container">
                                {/* Table et liste des joueurs ici */}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default JoueursInscrits;
