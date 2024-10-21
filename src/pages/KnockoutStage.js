import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import data from '../data.json';
import './KnockoutStage.css'; // Fichier CSS

const KnockoutStage = () => {
    const knockoutData = data.knockoutMatches; // Accéder aux données des phases éliminatoires

    // Fonction pour calculer les pourcentages pour les barres
    const calculatePercentage = (score1, score2) => {
        const total = score1 + score2;
        return {
            player1: (score1 / total) * 100,
            player2: (score2 / total) * 100,
        };
    };

    return (
        <div className="knockout-stage-container">
            {Object.keys(knockoutData).map((roundName, roundIndex) => (
                <div key={roundIndex} className="round-container">
                    {/* Utilisation de sx pour override les styles de MUI */}
                    <Typography
                        variant="h2"
                        className="round-title"
                        sx={{
                            fontSize: '2rem', // Forcer la taille de la police
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
                            const hasValidScores =
                                player1.score !== -1 && player2.score !== -1;
                            const percentages = hasValidScores
                                ? calculatePercentage(player1.score, player2.score)
                                : { player1: 50, player2: 50 };

                            return (
                                <Grid item xs={12} md={6} key={matchIndex}>
                                    <Paper className="match-container">
                                        <div className="match-info">
                                            {/* Joueur 1 */}
                                            <div className="player">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}${player1.photo}`}
                                                    alt={player1.name}
                                                    className="player-photo"
                                                />
                                                <span className="player-name">
                                                    {player1.name}
                                                </span>
                                            </div>

                                            <div className="versus-separator">VS</div>

                                            {/* Joueur 2 */}
                                            <div className="player">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}${player2.photo}`}
                                                    alt={player2.name}
                                                    className="player-photo"
                                                />
                                                <span className="player-name">
                                                    {player2.name}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Affichage de la barre de score si les scores sont valides */}
                                        {hasValidScores && (
                                            <div className="score-display">
                                                <div className="score-bar">
                                                    <div
                                                        className={`score-bar-part red ${
                                                            player1.score > player2.score
                                                                ? 'winner'
                                                                : ''
                                                        }`}
                                                        style={{
                                                            width: `${percentages.player1}%`,
                                                        }}
                                                    >
                                                        {player1.score}k
                                                    </div>
                                                    <div
                                                        className={`score-bar-part blue ${
                                                            player2.score > player1.score
                                                                ? 'winner'
                                                                : ''
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