import React, { useState } from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import data from '../data.json';
import './KnockoutStage.css'; // Fichier CSS

const KnockoutStage = () => {
    const [isPhaseNotReady] = useState(true);
    const knockoutData = data.knockoutMatches;

    // Fonction pour calculer les pourcentages pour les barres
    const calculatePercentage = (score1, score2) => {
        const total = score1 + score2;
        if (total === 0) return { player1: 50, player2: 50 };
        return {
            player1: (score1 / total) * 100,
            player2: (score2 / total) * 100,
        };
    };

    // Si la phase n'est pas prête, afficher un message d'attente
    if (isPhaseNotReady) {
        return (
            <div className="knockout-stage-container">
                <Typography variant="h4" className="category-title">Phase Éliminatoire</Typography>
                <Box className="info-message suspense-message" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e3f2fd',
                    color: '#0d47a1',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    margin: '20px 10px',
                    maxWidth: '100%',
                    width: '100%',
                }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.6rem' }}>
                        En attente des qualifications des groupes
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem', marginBottom: '20px' }}>
                        Les matchs de la phase éliminatoire seront disponibles une fois les qualifications terminées.
                    </Typography>
                </Box>
            </div>
        );
    }

    return (
        <div className="knockout-stage-container">
            {Object.keys(knockoutData).map((roundName, roundIndex) => (
                <div key={roundIndex} className="round-container">
                    <Typography
                        variant="h2"
                        className="round-title"
                        sx={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: '#333',
                            marginBottom: '20px',
                        }}
                    >
                        {roundName}
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {knockoutData[roundName].map((match, matchIndex) => {
                            const { player1, player2 } = match;
                            const hasValidScores = player1.score !== -1 && player2.score !== -1;
                            const percentages = hasValidScores
                                ? calculatePercentage(player1.score, player2.score)
                                : { player1: 50, player2: 50 };

                            return (
                                <Grid item xs={12} md={6} key={matchIndex}>
                                    <Paper className="match-container">
                                        <div className="match-info">
                                            <div className="player">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}${player1.photo}`}
                                                    alt={player1.name}
                                                    className="player-photo"
                                                />
                                                <span className="player-name">{player1.name}</span>
                                            </div>
                                            <div className="versus-separator">VS</div>
                                            <div className="player">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}${player2.photo}`}
                                                    alt={player2.name}
                                                    className="player-photo"
                                                />
                                                <span className="player-name">{player2.name}</span>
                                            </div>
                                        </div>
                                        {hasValidScores && (
                                            <div className="score-display">
                                                <div className="score-bar">
                                                    <div
                                                        className={`score-bar-part red ${
                                                            player1.score > player2.score ? 'winner' : ''
                                                        }`}
                                                        style={{
                                                            width: `${percentages.player1}%`,
                                                        }}
                                                    >
                                                        {player1.score}k
                                                    </div>
                                                    <div
                                                        className={`score-bar-part blue ${
                                                            player2.score > player1.score ? 'winner' : ''
                                                        }`}
                                                        style={{
                                                            width: `${percentages.player2}%`,
                                                        }}
                                                    >
                                                        {player2.score}k
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Paper>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            ))}
        </div>
    );
};

export default KnockoutStage;
