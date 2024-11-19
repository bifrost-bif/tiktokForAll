import React, { useState } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import data from '../data.json';
import './KnockoutStage.css';

const KnockoutStage = () => {
    const [isPhaseNotReady] = useState(false);
    const knockoutData = data.knockoutMatches;

    const calculatePercentage = (score1, score2) => {
        const total = score1 + score2;
        if (total === 0) return { team1: 50, team2: 50 };
        return {
            team1: (score1 / total) * 100,
            team2: (score2 / total) * 100,
        };
    };

    const MatchCard = ({ player1, player2, player3, player4, roundIndex, matchId }) => {
        const isTeamMatch = player3 && player4;
        const hasValidScores = isTeamMatch
            ? player1.score !== -1 && player2.score !== -1 && player3.score !== -1 && player4.score !== -1
            : player1.score !== -1 && player2.score !== -1;

        const team1Score = player1.score + player2.score;
        const team2Score = player3?.score + player4?.score || 0;
        
        const percentages = hasValidScores
            ? calculatePercentage(team1Score, team2Score)
            : { team1: 50, team2: 50 };

        return (
            <div className={`match-wrapper-${matchId}`}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        width: '160px',
                        height: isTeamMatch ? '250px' : '70px',
                        backgroundColor: 'white',
                        borderRadius: '15px',
                    }}
                ><div className={`connectorF-${matchId}`}></div>
                    <div className={`match-content-${matchId}`}>
                        <Typography
                            sx={{
                                my: 1,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#666',
                                marginTop: "-18px"
                            }}
                        >
                            {isTeamMatch ? 'Équipe 1' : ""}
                        </Typography>
                        <div className="team-section">
                            {[player1, player2].map((player, idx) => (
                                <Typography
                                    key={idx}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '18px',
                                        fontWeight: 'bold',
                                        marginTop: "-8px",
                                    }}
                                    className={player.realName}
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}${player.photo}`}
                                        alt={player.name}

                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            marginTop: "10px"
                                        }}
                                    />
                                    <span className={`player-name-${player.realName}`}>{player.name}</span>
                                </Typography>
                            ))}
                        </div>

                        {isTeamMatch && (
                            <>
                                <Typography
                                    sx={{
                                        my: 1,
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        color: '#666',
                                    }}
                                >
                                    <br/>Équipe 2
                                </Typography>
                                <div className="team-section">
                                    {[player3, player4].map((player, idx) => (
                                        <Typography
                                            key={idx}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                fontWeight: 'bold',
                                                marginTop: "-8px",
                                            }}
                                            className={player.realName}
                                        >
                                            <img
                                                src={`${process.env.PUBLIC_URL}${player.photo}`}
                                                alt={player.name}
                                                
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '50%',
                                                    marginTop: "10px"
                                                }}
                                            />
                                            {player.name}
                                        </Typography>
                                    ))}
                                </div>
                            </>
                        )}

                        {hasValidScores && (
                            <Box sx={{ mt: 2 }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        height: '24px',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: `${percentages.team1}%`,
                                            backgroundColor: '#ff4444',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                        className={team1Score > team2Score ? 'winner' : ''}
                                    >
                                        {team1Score}k
                                    </div>
                                    {isTeamMatch && (
                                        <div
                                            style={{
                                                width: `${percentages.team2}%`,
                                                backgroundColor: '#4444ff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 'bold',
                                            }}
                                            className={team2Score > team1Score ? 'winner' : ''}
                                        >
                                            {team2Score}k
                                        </div>
                                    )}
                                </div>
                            </Box>
                        )}
                    </div>
                </Paper>
                {roundIndex < 3 && <div className={`connector-${matchId}`} />}
            </div>
        );
    };

    if (isPhaseNotReady) {
        return (
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
                    Phase Éliminatoire
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#e3f2fd',
                        color: '#0d47a1',
                        borderRadius: '8px',
                        p: 3,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        mx: 'auto',
                        maxWidth: '600px',
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        En attente des qualifications des groupes
                    </Typography>
                    <Typography>
                        Les matchs de la phase éliminatoire seront disponibles une fois les
                        qualifications terminées.
                    </Typography>
                </Box>
            </Box>
        );
    }

    const getPhaseClass = (roundIndex) => {
        if (roundIndex === 0) return 'huitefinals';
        if (roundIndex === 1) return 'quarterfinals';
        if (roundIndex === 2) return 'semifinals';
        if (roundIndex === 3) return 'final';
        return '';
    };

    return (
        <Box
            sx={{
                p: 4,
                overflowX: 'auto',
                minWidth: 'fit-content',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                }}
            >
                Phase Éliminatoire
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    gap: '4rem',
                    justifyContent: 'center',
                }}
            >
                {Object.entries(knockoutData).map(([roundName, matches], roundIndex) => (
                    
                    <div
                        key={roundName}
                        className={getPhaseClass(roundIndex)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: 'center',
                                mb: 3,
                                color: '#666',
                            }}
                        >
                            {roundName}
                        </Typography>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '3rem',
                            }}
                        >
                            {matches.map((match, idx) => (
                                <MatchCard
                                    key={idx}
                                    player1={match.player1}
                                    player2={match.player2}
                                    player3={match.player3}
                                    player4={match.player4}
                                    roundIndex={roundIndex}
                                    matchId={match.id}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Box>
        </Box>
    );
};

export default KnockoutStage;
