import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Box, Dialog, DialogContent, DialogTitle, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import data from '../data.json';
import './Calendrier.css';
import TikTokProfileBanner from '../components/TikTokProfileBanner';

const Calendar = () => {
    const [isResultsHidden] = useState(false);
    const [openMatch, setOpenMatch] = useState(null);

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
    let journeyCount = 0;

    return (
        <div className="calendar-container">
            <Typography variant="h4" className="calendar-header" gutterBottom>
                Calendrier des Matchs
            </Typography>
            <div className="calendar-content">
                {calendarData.map((journey, journeyIndex) => {
                    const isOpeningMatch = journey.matches.some(match => match.ouverture === "true");
                    

                    if (!isOpeningMatch) {
                        journeyCount += 1;
                    }

                    return (
                        <div key={journeyIndex} className="journey-container">
                            <Typography variant="h5" className="journey-title">
                                {isOpeningMatch ? "Match d'ouverture" : `${journey.roundName} - Journée ${journeyCount}`} <br />
                                <span className="journey-date">{journey.date}</span>
                            </Typography>
                            <Grid container spacing={3} justifyContent="space-around">
                                {journey.matches.map((match, matchIndex) => (
                                    <Match
                                        key={matchIndex}
                                        match={match}
                                        onClick={() =>{ if(!match.ouverture){setOpenMatch({ ...match, date: journey.date })}}}
                                    />
                                ))}
                            </Grid>
                        </div>
                    );
                })}
            </div>
            {openMatch && (
                <MatchModal
                    match={openMatch}
                    onClose={() => setOpenMatch(null)}
                />
            )}
        </div>
    );
};

const MatchModal = ({ match, onClose }) => (
    <Dialog open={!!match} onClose={onClose} fullScreen className="dialog-container">
        <DialogTitle className="modal-title">
            <IconButton 
                aria-label="close" 
                onClick={onClose} 
                className="modal-close-button"
                style={{ position: 'absolute', right: 16, top: 16, zIndex: 1000 }}
                >
            <CloseIcon fontSize="large" />
            </IconButton>

        </DialogTitle>
        <DialogContent className="modal-content" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/fd-1.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#ffffff'
        }}>
            <CountdownTimer targetDate={`${match.date} ${match.time}`} />
        <img src="./images/titre.png" alt="tiktokForAll_icone_affiche" className="affiche-title" style={{ maxWidth: '80%', height: 'auto', width: '300px' }} />
            <div className="modal-players">
                <Player player={match.player1} large />
                <img src={`${process.env.PUBLIC_URL}/images/versus.png`} alt="Versus" className="versus-image-modal" />
                <Player player={match.player2} large />
            </div>
            <Typography variant="h5" className="modal-match-date">{match.date}</Typography>
            <Typography>
                <img src={`${process.env.PUBLIC_URL}/images/euro.png`} alt="Europe" className="flag-icon" />
                <img src={`${process.env.PUBLIC_URL}/images/tunisia.png`} alt="Tunisie" className="flag-icon" />
            </Typography> 
            <Typography variant="h6" className="modal-match-time">
                {match.time.replace(':', 'h')} 
            </Typography>
            <div >
                <img src="./images/tiktokForAll_icone_affiche.png" className="affiche-image-modal" alt="Affiche Icon" />
            </div>
        </DialogContent>
    </Dialog>
);

// Composant CountdownTimer pour afficher le compte à rebours
const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeLeft.days <= 0 && timeLeft.hours<= 0 && timeLeft.minutes<= 10 && timeLeft.minutes > 0) {
        return <div className="countdown-complete">Match en cours !</div>;
    }

    if (timeLeft.days <= 0 && timeLeft.hours<= 0 && timeLeft.minutes<= 0 && timeLeft.seconds<= 0) {
        return <div className="countdown-complete">Match terminé !</div>;
    }
    if(timeLeft.days == 0){
        return (
            <div className="countdown-timer-modal">
                <span>{timeLeft.hours}h </span>
                <span>{timeLeft.minutes}m </span>
                <span>{timeLeft.seconds}s </span>
            </div>
        );
    } 
    if(timeLeft.hours == 0){
        return (
            <div className="countdown-timer-modal">
                <span>{timeLeft.minutes}m </span>
                <span>{timeLeft.seconds}s </span>
            </div>
        );
    } 
    if(timeLeft.minutes == 0){
        return (
            <div className="countdown-timer-modal">
                <span>{timeLeft.seconds}s </span>
            </div>
        );
    } 
    return (
        <div className="countdown-timer-modal">
            <span>{timeLeft.days}j </span>
            <span>{timeLeft.hours}h </span>
            <span>{timeLeft.minutes}m </span>
            <span>{timeLeft.seconds}s </span>
        </div>
    );
};

const calculateTimeLeft = (targetDate) => {
    const difference = new Date(targetDate) - new Date();
    return {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

const Match = ({ match, onClick }) => {
    const isTeamMatch = match.player3 && match.player4;
    const hasScore = match.player1.score !== -1 && match.player2.score !== -1 &&
                     (!isTeamMatch || (match.player3.score !== -1 && match.player4.score !== -1));
    const percentages = hasScore ? calculatePercentage(match.player1.score, match.player2.score) : { player1: 50, player2: 50 };

    // Check for forfeit and determine overlay styles
    const isForfeit = match.forfait;
    const getPlayerOverlayStyle = (playerName) => {
        if (isForfeit) {
            return playerName === match.forfait ? 'forfeit-loser-overlay' : 'forfeit-winner-overlay';
        }
        return '';
    };

    // Generate forfeit message with motif
    const forfeitReason = match.motif_forfait ? `${match.motif_forfait}` : '';
    const forfeitMessage = `${match.forfait} ${forfeitReason}, victoire automatique`.trim();

    const isTirageAuSort = match.tirage_au_sort === "true";
    if (isTirageAuSort) {
        return (
            <Grid item xs={12} sm={6} md={5} onClick={onClick}>
                <Paper className="match-container">
                    <div className="tirage-container">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/tiktokforall_tirage.webp`}
                            alt="Tirage au Sort"
                            className="tirage-image"
                        />
                        <Typography variant="h6" className="match-time">
                            {match.time}
                        </Typography>
                    </div>
                </Paper>
            </Grid>
        );
    }

    return (
        <Grid item xs={12} sm={6} md={5} onClick={onClick}>
            <Paper className={`match-container ${match.report === "true" ? 'postponed-match' : ''}`}>
                <div className="match-info">
                    {match.report === "true" && <div className="postponed-overlay">Reporté</div>}
                    <div className={`player-group ${getPlayerOverlayStyle(match.player1.name)}`}>
                        <Player player={match.player1} />
                        {isTeamMatch && <Player player={match.player3} />}
                    </div>
                    <div className="versus-separator">VS</div>
                    <div className={`player-group ${getPlayerOverlayStyle(match.player2.name)}`}>
                        <Player player={match.player2} />
                        {isTeamMatch && <Player player={match.player4} />}
                    </div>
                </div>
                <div className="match-time">
                    {isForfeit ? forfeitMessage : match.time}
                </div>
                {!isForfeit && hasScore && (
                    <div className="score-bar">
                        <ScoreBarPart score={match.player1.score} percentage={percentages.player1} winner={match.player1.score > match.player2.score} color="red" />
                        <ScoreBarPart score={match.player2.score} percentage={percentages.player2} winner={match.player2.score > match.player1.score} color="blue" />
                    </div>
                )}
            </Paper>
        </Grid>
    );
};


// Composant Player pour chaque joueur
const Player = ({ player, large }) => (
    <div className="player">
        <img
            src={`${process.env.PUBLIC_URL}${player.photo}`}
            alt={player.name}
            className={large ? "player-photo-large" : "player-photo"}
        />
        <span className={large ? "player-name-large" : "player-name"}>{player.name}</span>
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
