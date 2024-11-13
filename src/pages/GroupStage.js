import React, { useState } from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';
import data from '../data.json';
import './GroupStage.css';
import TikTokProfileBanner from '../components/TikTokProfileBanner';

// Utility function to convert coins to a number for comparison
const parseCoins = (coins) => {
    return parseFloat(coins.replace('k', '')) * 1000;
};

// Custom style for flags
const Flag = styled('img')({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
});

// Conditional styling for ranking circle
const RankCircle = styled('div')(({ rank }) => ({
    display: 'inline-block',
    backgroundColor: rank >= 3 ? '#F44336' : '#4CAF50',
    color: 'white',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    textAlign: 'center',
    lineHeight: '35px',
    fontSize: '14px',
    fontWeight: 'bold',
}));

const GroupStage = () => {
    const [isResultsHidden] = useState(false);
    const groupsData = data.groups;

    const newPlayerGroups = groupsData.slice(0, 4);
    const oldPlayerGroups = groupsData.slice(4);

    // Sorting function that considers "rang" if available and falls back to points only
    const sortTeams = (teams) => {
        return teams.slice().sort((a, b) => {
            // Check if "rang" is defined for both, and sort by it if so
            if (a.rang !== undefined && b.rang !== undefined) {
                return a.rang - b.rang;
            }
            // If only one has "rang", prioritize it in the ranking
            if (a.rang !== undefined) return -1;
            if (b.rang !== undefined) return 1;
            // Fallback to sorting by points only
            return b.points - a.points;
        });
    };

    if (isResultsHidden) {
        return (
            <div className="group-stage-container">
                <Typography variant="h4" className="category-title">Groupes</Typography>
                <Box className="info-message suspense-message" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e3f2fd',
                    borderRadius: '8px',
                    padding: '15px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    maxWidth: '400px',
                    margin: '20px auto',
                }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '10px' }}>
                        Tirage au sort le 1er NOV, 20h
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1rem', color: '#1976D2', marginBottom: '10px' }}>
                        Live sur TikTok avec <strong>BACEM</strong>.
                    </Typography>
                    <TikTokProfileBanner profile="bacem1tun" />
                </Box>
            </div>
        );
    }

    return (
        <div className="group-stage-container">
            <Typography variant="h4" className="category-title">Groupe A</Typography>
            <Grid container spacing={4} className="group-container">
                {newPlayerGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Paper className="group-paper">
                            <Typography variant="h6" className="group-title">{group.groupName}</Typography>
                            <div className="table-container">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" className="table-header">Classement</TableCell>
                                            <TableCell align="center" className="table-header">Joueur</TableCell>
                                            <TableCell align="center" className="table-header">MJ</TableCell>
                                            <TableCell align="center" className="table-header">Coins</TableCell>
                                            <TableCell align="center" className="table-header">Points</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {sortTeams(group.teams).map((team, idx) => (
                                            <TableRow key={team.id} className={team.status === "Sanctionné" ? "sanctioned-player" : ""}>
                                                <TableCell align="center">
                                                    <RankCircle rank={idx + 1}>{idx + 1}</RankCircle>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <div className="player-cell">
                                                        <Flag src={`${process.env.PUBLIC_URL}${team.flag}`} alt={team.name} />
                                                        <Typography variant="body2" className="player-name">{team.name}</Typography>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center">{team.played}</TableCell>
                                                <TableCell align="center">{team.coins}</TableCell>
                                                <TableCell align="center">{team.points}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Divider variant="middle" className="group-divider" />

            <Typography variant="h4" className="category-title">Groupe B</Typography>
            <Grid container spacing={4} className="group-container">
                {oldPlayerGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Paper className="group-paper">
                            <Typography variant="h6" className="group-title">{group.groupName}</Typography>
                            <div className="table-container">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" className="table-header">Classement</TableCell>
                                            <TableCell align="center" className="table-header">Joueur</TableCell>
                                            <TableCell align="center" className="table-header">MJ</TableCell>
                                            <TableCell align="center" className="table-header">Coins</TableCell>
                                            <TableCell align="center" className="table-header">Points</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {sortTeams(group.teams).map((team, idx) => (
                                            <TableRow key={team.id} className={team.status === "Sanctionné" ? "sanctioned-player" : ""}>
                                                <TableCell align="center">
                                                    <RankCircle rank={idx + 1}>{idx + 1}</RankCircle>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <div className="player-cell">
                                                        <Flag src={`${process.env.PUBLIC_URL}${team.flag}`} alt={team.name} />
                                                        <Typography variant="body2" className="player-name">{team.name}</Typography>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="center">{team.played}</TableCell>
                                                <TableCell align="center">{team.coins}</TableCell>
                                                <TableCell align="center">{team.points}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default GroupStage;
