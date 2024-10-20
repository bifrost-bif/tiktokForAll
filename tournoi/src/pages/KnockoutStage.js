import React, { useState } from 'react';
import { Grid, Typography, Paper, Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import './KnockoutStage.css'; // Le fichier CSS pour la mise en forme

// Exemple de données des matchs avec des photos et des scores pour toutes les phases
const knockoutData = {
    "1/8e de finale": [
        { player1: { name: "Joueur 1", photo: "/images/profiles/userTiktok.png", score: 3 }, player2: { name: "Joueur 2", photo: "/images/profiles/userTiktok.png", score: 1 } },
        { player1: { name: "Joueur 3", photo: "/images/profiles/userTiktok.png", score: 2 }, player2: { name: "Joueur 4", photo: "/images/profiles/userTiktok.png", score: 4 } },
        { player1: { name: "Joueur 5", photo: "/images/profiles/userTiktok.png", score: 1 }, player2: { name: "Joueur 6", photo: "/images/profiles/userTiktok.png", score: 2 } },
        { player1: { name: "Joueur 7", photo: "/images/profiles/userTiktok.png", score: 3 }, player2: { name: "Joueur 8", photo: "/images/profiles/userTiktok.png", score: 5 } },
        { player1: { name: "Joueur 9", photo: "/images/profiles/userTiktok.png", score: 0 }, player2: { name: "Joueur 10", photo: "/images/profiles/userTiktok.png", score: 3 } },
        { player1: { name: "Joueur 11", photo: "/images/profiles/userTiktok.png", score: 1 }, player2: { name: "Joueur 12", photo: "/images/profiles/userTiktok.png", score: 4 } },
        { player1: { name: "Joueur 13", photo: "/images/profiles/userTiktok.png", score: 3 }, player2: { name: "Joueur 14", photo: "/images/profiles/userTiktok.png", score: 2 } },
        { player1: { name: "Joueur 15", photo: "/images/profiles/userTiktok.png", score: 2 }, player2: { name: "Joueur 16", photo: "/images/profiles/userTiktok.png", score: 1 } },
    ],
    "1/4e de finale": [
        { player1: { name: "Joueur 1", photo: "/images/profiles/userTiktok.png", score: 2 }, player2: { name: "Joueur 4", photo: "/images/profiles/userTiktok.png", score: 3 } },
        { player1: { name: "Joueur 6", photo: "/images/profiles/userTiktok.png", score: 1 }, player2: { name: "Joueur 8", photo: "/images/profiles/userTiktok.png", score: 2 } },
        { player1: { name: "Joueur 10", photo: "/images/profiles/userTiktok.png", score: 3 }, player2: { name: "Joueur 12", photo: "/images/profiles/userTiktok.png", score: 4 } },
        { player1: { name: "Joueur 13", photo: "/images/profiles/userTiktok.png", score: 5 }, player2: { name: "Joueur 15", photo: "/images/profiles/userTiktok.png", score: 2 } },
    ],
    "1/2e de finale": [
        { player1: { name: "Joueur 4", photo: "/images/profiles/userTiktok.png", score: 1 }, player2: { name: "Joueur 8", photo: "/images/profiles/userTiktok.png", score: 3 } },
        { player1: { name: "Joueur 12", photo: "/images/profiles/userTiktok.png", score: 2 }, player2: { name: "Joueur 13", photo: "/images/profiles/userTiktok.png", score: 4 } },
    ],
    "Finale": [
        { player1: { name: "Joueur 8", photo: "/images/profiles/userTiktok.png", score: 1 }, player2: { name: "Joueur 13", photo: "/images/profiles/userTiktok.png", score: 3 } }
    ]
};

const KnockoutStage = () => {
    // Fonction pour calculer les pourcentages pour les barres
    const calculatePercentage = (score1, score2) => {
        const total = score1 + score2;
        return {
            player1: (score1 / total) * 100,
            player2: (score2 / total) * 100
        };
    };

    return (
        <div className="knockout-stage-container">
            {Object.keys(knockoutData).map((roundName, roundIndex) => (
                <div key={roundIndex} className="round-container">
                    <Typography variant="h5" className="round-title">{roundName}</Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {knockoutData[roundName].map((match, matchIndex) => {
                            const { player1, player2 } = match;
                            const percentages = calculatePercentage(player1.score, player2.score);

                            return (
                                <Grid item xs={12} md={6} key={matchIndex}>
                                    <Paper className="match-container">
                                        <div className="match-info">
                                            {/* Joueur 1 */}
                                            <div className="player">
                                                <img src={player1.photo} alt={player1.name} className="player-photo"/>
                                                <span className="player-name">{player1.name}</span>
                                            </div>

                                            <div className="versus-separator">VS</div>

                                            {/* Joueur 2 */}
                                            <div className="player">
                                                <img src={player2.photo} alt={player2.name} className="player-photo"/>
                                                <span className="player-name">{player2.name}</span>
                                            </div>
                                        </div>

                                        {/* Barre de score directement sous les noms des joueurs */}
                                        <div className="score-display">
                                            <div className="score-number blue">{player2.score}k</div>
                                            {/* Score bleu à gauche */}
                                            <div className="score-bar">
                                                <div className="score-bar-part blue"
                                                     style={{width: `${percentages.player2}%`}}/>
                                                <div className="score-bar-part red"
                                                     style={{width: `${percentages.player1}%`}}/>
                                            </div>
                                            <div className="score-number red">{player1.score}k</div>
                                            {/* Score rouge à droite */}
                                        </div>
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