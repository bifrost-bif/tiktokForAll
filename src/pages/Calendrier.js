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
const Match = ({ player1, player2, player3, player4, time }) => {
    const isTeamMatch = player3 && player4; // Vérifier s'il s'agit d'un match en équipe
    const hasScore = player1.score !== -1 && player2.score !== -1 && (!isTeamMatch || (player3.score !== -1 && player4.score !== -1));
    
    const percentages = hasScore
        ? calculatePercentage(player1.score, player2.score)
        : { player1: 50, player2: 50 };

    return (
        <Grid item xs={12} md={6}>
            <Paper className="match-container">
                <div className="match-info">
                    {/* Joueur 1 et Joueur 3 (si équipe) */}
                    <div className="player-group">
                        <div className="player">
                            <img
                                src={`${process.env.PUBLIC_URL}${player1.photo}`}
                                alt={player1.name}
                                className="player-photo"
                            />
                            <span className="player-name">{player1.name}</span>
                        </div>
                        {isTeamMatch && (
                            <div className="player teammate">
                                <img
                                    src={`${process.env.PUBLIC_URL}${player3.photo}`}
                                    alt={player3.name}
                                    className="player-photo"
                                />
                                <span className="player-name">{player3.name}</span>
                            </div>
                        )}
                    </div>

                    <div className="versus-separator">VS</div>

                    {/* Joueur 2 et Joueur 4 (si équipe) */}
                    <div className="player-group">
                        <div className="player">
                            <img
                                src={`${process.env.PUBLIC_URL}${player2.photo}`}
                                alt={player2.name}
                                className="player-photo"
                            />
                            <span className="player-name">{player2.name}</span>
                        </div>
                        {isTeamMatch && (
                            <div className="player teammate">
                                <img
                                    src={`${process.env.PUBLIC_URL}${player4.photo}`}
                                    alt={player4.name}
                                    className="player-photo"
                                />
                                <span className="player-name">{player4.name}</span>
                            </div>
                        )}
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
            <Typography variant="h4" className="calendar-header" gutterBottom>
                Calendrier des Matchs
            </Typography>
            {calendarData.map((journey, journeyIndex) => (
                <div key={journeyIndex} className="journey-container">
                    <Typography variant="h5" className="journey-title">
                        <span className="journey-text">{`Journée ${journeyIndex + 1}`}</span>
                        <br />
                        <span className="journey-date">{journey.date}</span>
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {journey.matches.map((match, matchIndex) => (
                            <Match
                                key={matchIndex}
                                player1={match.player1}
                                player2={match.player2}
                                player3={match.player3} // Ajout de player3 pour les équipes
                                player4={match.player4} // Ajout de player4 pour les équipes
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
