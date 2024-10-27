import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import data from '../data.json'; // Importer les données JSON
import './Calendrier.css'; // Fichier CSS pour styliser la page

// Composant principal pour afficher le calendrier
const Calendar = () => {
    // État pour savoir si les résultats sont cachés (en attente de tirage)
    const [isResultsHidden] = useState(true);

    // Utiliser useEffect pour charger le script TikTok lorsque le composant est monté
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // Si les résultats sont cachés, afficher un message d'attente
    if (isResultsHidden) {
        return (
            <div className="calendar-container">
                <Typography variant="h4" className="calendar-header" gutterBottom>
                    Matchs à venir
                </Typography>
                <Box className="info-message suspense-message" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e3f2fd',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    margin: '20px 10px',
                    maxWidth: '100%',
                    width: '100%',
                }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.6rem' }}>
                        Tirage au sort le 1er NOV, 20h
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem', marginBottom: '20px' }}>
                        Live sur TikTok avec <strong>BACEM</strong>.
                    </Typography>
                    <div style={{ margin: '20px 0', width: '100%', maxWidth: '480px' }}>
                        <blockquote
                            className="tiktok-embed"
                            cite="https://www.tiktok.com/@bacem1tun"
                            data-unique-id="bacem1tun"
                            data-embed-type="creator"
                            style={{ width: '100%', margin: '0 auto' }}
                        >
                            <section>
                                <a target="_blank" href="https://www.tiktok.com/@bacem1tun?refer=creator_embed" style={{ color: '#0d47a1', textDecoration: 'underline', fontWeight: 'bold' }}>
                                    @bacem1tun
                                </a>
                            </section>
                        </blockquote>
                    </div>
                </Box>
            </div>
        );
    }

    // Afficher le calendrier si les résultats sont disponibles
    const calendarData = data.calendarMatches;

    return (
        <div className="calendar-container">
            <Typography variant="h4" className="calendar-header" gutterBottom>
                Calendrier des Matchs
            </Typography>
            <div className="calendar-content">
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
                                    player3={match.player3}
                                    player4={match.player4}
                                    time={match.time}
                                />
                            ))}
                        </Grid>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Composant pour un seul match
const Match = ({ player1, player2, player3, player4, time }) => {
    const isTeamMatch = player3 && player4;
    const hasScore = player1.score !== -1 && player2.score !== -1 && (!isTeamMatch || (player3.score !== -1 && player4.score !== -1));

    const percentages = hasScore
        ? calculatePercentage(player1.score, player2.score)
        : { player1: 50, player2: 50 };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper className="match-container">
                <div className="match-info">
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
                <div className="match-time">{time}</div>
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
};

// Fonction pour calculer le pourcentage de la barre de score
const calculatePercentage = (score1, score2) => {
    const total = score1 + score2;
    if (total === 0) return { player1: 50, player2: 50 };
    return {
        player1: (score1 / total) * 100,
        player2: (score2 / total) * 100,
    };
};

export default Calendar;
