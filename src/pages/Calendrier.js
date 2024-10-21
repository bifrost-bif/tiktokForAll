import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import data from '../data.json'; // Importer les données JSON
import './Calendrier.css'; // Fichier CSS pour styliser la page

// Fonction pour calculer le pourcentage de la barre de score
const calculatePercentage = (score1, score2) => {
    const total = score1 + score2;
    if (total === 0) return { player1: 50, player2: 50 }; // Cas où il n'y a pas de score
    return {
        player1: (score1 / total) * 100,
        player2: (score2 / total) * 100,
    };
};

// Composant pour un seul match
const Match = ({ player1, player2, time }) => {
    const hasScore = player1.score !== -1 && player2.score !== -1;
    const percentages = hasScore
        ? calculatePercentage(player1.score, player2.score)
        : { player1: 50, player2: 50 };

    return (
        <Grid item xs={12} md={6}>
            <Paper className="match-container">
                <div className="match-info">
                    {/* Joueur 1 */}
                    <div className="player">
                        <img
                            src={`${process.env.PUBLIC_URL}${player1.photo}`}
                            alt={player1.name}
                            className="player-photo"
                        />
                        <span className="player-name">{player1.name}</span>
                    </div>

                    <div className="versus-separator">VS</div>

                    {/* Joueur 2 */}
                    <div className="player">
                        <img
                            src={`${process.env.PUBLIC_URL}${player2.photo}`}
                            alt={player2.name}
                            className="player-photo"
                        />
                        <span className="player-name">{player2.name}</span>
                    </div>
                </div>

                {/* Affichage de l'heure du match */}
                <div className="match-time">{time}</div>

                {/* Affichage de la barre de score si le match est terminé */}
                {hasScore && (
                    <div className="score-bar">
                        <div
                            className={`score-bar-part red ${
                                player1.score > player2.score ? 'winner' : ''
                            }`}
                            style={{ width: `${percentages.player1}%` }}
                        >
                            {player1.score}k
                        </div>
                        <div
                            className={`score-bar-part blue ${
                                player2.score > player1.score ? 'winner' : ''
                            }`}
                            style={{ width: `${percentages.player2}%` }}
                        >
                            {player2.score}k
                        </div>
                    </div>
                )}
            </Paper>
        </Grid>
    );
};

// Composant principal pour afficher le calendrier
const Calendar = () => {
    const calendarData = data.calendarMatches; // Accéder aux données des matchs du calendrier

    return (
        <div className="calendar-container">
            {calendarData.map((journey, journeyIndex) => (
                <div key={journeyIndex} className="journey-container">
                    <Typography variant="h5" className="journey-title">
                        {`Journée ${journeyIndex + 1}: ${journey.date}`}
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {journey.matches.map((match, matchIndex) => (
                            <Match
                                key={matchIndex}
                                player1={match.player1}
                                player2={match.player2}
                                time={match.time}
                            />
                        ))}
                    </Grid>
                </div>
            ))}
        </div>
    );
};

export default Calendar;
