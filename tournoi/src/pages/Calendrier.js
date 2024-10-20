import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import './Calendrier.css';

// Exemple de données de calendrier (journées, matchs avec dates, heures et scores)
const calendarData = [
    {
        date: "Vendredi 1 NOV 2024",
        matches: [
            { player1: { name: "Joueur 1", photo: "/images/profiles/userTiktok.png", score: 20 }, player2: { name: "Joueur 2", photo: "/images/profiles/userTiktok.png", score: 15 }, time: "18:00" },
            { player1: { name: "Joueur 3", photo: "/images/profiles/userTiktok.png", score: -1 }, player2: { name: "Joueur 4", photo: "/images/profiles/userTiktok.png", score: -1 }, time: "20:00" }
        ]
    },
    {
        date: "Samedi 2 NOV 2024",
        matches: [
            { player1: { name: "Joueur 5", photo: "/images/profiles/userTiktok.png", score: 10 }, player2: { name: "Joueur 6", photo: "/images/profiles/userTiktok.png", score: 20 }, time: "16:00" },
            { player1: { name: "Joueur 7", photo: "/images/profiles/userTiktok.png", score: 25 }, player2: { name: "Joueur 8", photo: "/images/profiles/userTiktok.png", score: 20 }, time: "18:00" },
            { player1: { name: "Joueur 9", photo: "/images/profiles/userTiktok.png", score: -1 }, player2: { name: "Joueur 10", photo: "/images/profiles/userTiktok.png", score: -1 }, time: "20:00" }
        ]
    }
];

const Calendar = () => {
    // Fonction pour calculer le pourcentage de la barre de score
    const calculatePercentage = (score1, score2) => {
        const total = score1 + score2;
        if (total === 0) return { player1: 50, player2: 50 };
        return {
            player1: (score1 / total) * 100,
            player2: (score2 / total) * 100
        };
    };

    return (
        <div className="calendar-container">
            {calendarData.map((journey, journeyIndex) => (
                <div key={journeyIndex} className="journey-container">
                    <Typography variant="h5" className="journey-title">{`Journée ${journeyIndex + 1}: ${journey.date}`}</Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {journey.matches.map((match, matchIndex) => {
                            const { player1, player2, time } = match;
                            const hasScore = player1.score !== -1 && player2.score !== -1;
                            const percentages = hasScore ? calculatePercentage(player1.score, player2.score) : { player1: 50, player2: 50 };

                            return (
                                <Grid item xs={12} md={6} key={matchIndex}>
                                    <Paper className="match-container">
                                        <div className="match-info">
                                            {/* Joueur 1 */}
                                            <div className="player">
                                                <img src={player1.photo} alt={player1.name} className="player-photo" />
                                                <span className="player-name">{player1.name}</span>
                                            </div>

                                            <div className="versus-separator">VS</div>

                                            {/* Joueur 2 */}
                                            <div className="player">
                                                <img src={player2.photo} alt={player2.name} className="player-photo" />
                                                <span className="player-name">{player2.name}</span>
                                            </div>
                                        </div>

                                        {/* Affichage de l'heure du match */}
                                        <div className="match-time">{time}</div>

                                        {/* Affichage de la barre de score si le match est terminé */}
                                        {hasScore && (
                                            <div className="score-bar">
                                                <div
                                                    className={`score-bar-part red ${player1.score > player2.score ? 'winner' : ''}`}
                                                    style={{ width: `${percentages.player1}%` }}
                                                >
                                                    {player1.score}k
                                                </div>
                                                <div
                                                    className={`score-bar-part blue ${player2.score > player1.score ? 'winner' : ''}`}
                                                    style={{ width: `${percentages.player2}%` }}
                                                >
                                                    {player2.score}k
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

export default Calendar;
