import React, { useState } from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import data from '../data.json';
import './Calendrier.css';
import TikTokProfileBanner from '../components/TikTokProfileBanner';

const Calendar = () => {
    const [isResultsHidden] = useState(false);

    if (isResultsHidden) {
        return (
            <div className="calendar-container">
                <Typography variant="h4" className="calendar-header" gutterBottom>
                    Matchs à venir
                </Typography>
                <Box className="info-message suspense-message">
                    <Typography variant="h5" className="suspense-title">
                        Tirage au sort le 1er NOV, 20h
                    </Typography>
                    <Typography variant="body1" className="suspense-text">
                        Live sur TikTok avec <strong>BACEM</strong>.
                    </Typography>
                    <TikTokProfileBanner profile="bacem1tun" />
                </Box>
            </div>
        );
    }

    const calendarData = data.calendarMatches;
    let journeyCount = 0; // Compteur de journée qui ignore les matchs d'ouverture

    return (
        <div className="calendar-container">
            <Typography variant="h4" className="calendar-header" gutterBottom>
                Calendrier des Matchs
            </Typography>
            <div className="calendar-content">
                {calendarData.map((journey, journeyIndex) => {
                    // Vérifie si l'un des matchs de la journée a "ouverture: true"
                    const isOpeningMatch = journey.matches.some(match => match.ouverture === "true");

                    // Si ce n'est pas un match d'ouverture, on incrémente le compteur de journée
                    if (!isOpeningMatch) {
                        journeyCount += 1;
                    }

                    return (
                        <div key={journeyIndex} className="journey-container">
                            <Typography variant="h5" className="journey-title">
                                {isOpeningMatch ? "Match d'ouverture" : `Journée ${journeyCount}`} <br />
                                <span className="journey-date">{journey.date}</span>
                            </Typography>
                            <Grid container spacing={3} justifyContent="space-around">
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
                    );
                })}
            </div>
        </div>
    );
};

// Reste du code inchangé
const Match = ({ player1, player2, player3, player4, time }) => {
    const isTeamMatch = player3 && player4;
    const hasScore = player1.score !== -1 && player2.score !== -1 && (!isTeamMatch || (player3.score !== -1 && player4.score !== -1));
    const percentages = hasScore ? calculatePercentage(player1.score, player2.score) : { player1: 50, player2: 50 };

    return (
        <Grid item xs={12} sm={6} md={5}>
            <Paper className="match-container">
                <div className="match-info">
                    <div className="player-group">
                        <Player player={player1} />
                        {isTeamMatch && <Player player={player3} />}
                    </div>
                    <div className="versus-separator">VS</div>
                    <div className="player-group">
                        <Player player={player2} />
                        {isTeamMatch && <Player player={player4} />}
                    </div>
                </div>
                <div className="match-time">{time}</div>
                {hasScore && (
                    <div className="score-bar">
                        <ScoreBarPart score={player1.score} percentage={percentages.player1} winner={player1.score > player2.score} color="red" />
                        <ScoreBarPart score={player2.score} percentage={percentages.player2} winner={player2.score > player1.score} color="blue" />
                    </div>
                )}
            </Paper>
        </Grid>
    );
};

const Player = ({ player }) => (
    <div className="player">
        <img src={`${process.env.PUBLIC_URL}${player.photo}`} alt={player.name} className="player-photo" />
        <span className="player-name">{player.name}</span>
    </div>
);

const ScoreBarPart = ({ score, percentage, winner, color }) => (
    <div className={`score-bar-part ${color} ${winner ? 'winner' : ''}`} style={{ width: `${percentage}%` }}>
        {score}k
    </div>
);

const calculatePercentage = (score1, score2) => {
    const total = score1 + score2;
    return total === 0 ? { player1: 50, player2: 50 } : { player1: (score1 / total) * 100, player2: (score2 / total) * 100 };
};

export default Calendar;
