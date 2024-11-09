import React, { useState } from 'react';
import { TextField, Typography, Paper, Grid, Button, Divider } from '@mui/material';
import data from '../data.json';
import './AdminPage.css';

const AdminPage = () => {
    const [groupsData, setGroupsData] = useState(
        data.groups.map(group => ({
            ...group,
            teams: group.teams.map(team => ({
                ...team,
                coins: parseInt(team.coins.replace('k', '')) * 1000 // Stockage en entier
            }))
        }))
    );

    const [calendarMatches, setCalendarMatches] = useState(data.calendarMatches);

    // Fonction pour modifier les champs des groupes
    const handleGroupChange = (groupIndex, teamIndex, field, value) => {
        const updatedGroups = [...groupsData];
        updatedGroups[groupIndex].teams[teamIndex][field] = field === 'coins' ? parseInt(value) * 1000 : value;
        setGroupsData(updatedGroups);
    };

    // Fonction pour cumuler une valeur dans les coins des groupes
    const handleCoinsCumulativeChange = (groupIndex, teamIndex, value) => {
        const updatedGroups = [...groupsData];
        const currentCoins = updatedGroups[groupIndex].teams[teamIndex].coins || 0;
        updatedGroups[groupIndex].teams[teamIndex].coins = currentCoins + parseInt(value || 0);
        setGroupsData(updatedGroups);
    };

    // Fonction pour cumuler une valeur dans le score des matchs
    const handleScoreCumulativeChange = (journeyIndex, matchIndex, player, value) => {
        const updatedMatches = [...calendarMatches];
        const currentScore = updatedMatches[journeyIndex].matches[matchIndex][player].score || 0;
        updatedMatches[journeyIndex].matches[matchIndex][player].score = currentScore + parseInt(value || 0);
        setCalendarMatches(updatedMatches);
    };

    // Fonction pour sauvegarder les données
    const saveData = () => {
        const formattedData = {
            groups: groupsData.map(group => ({
                ...group,
                teams: group.teams.map(team => ({
                    ...team,
                    coins: `${Math.round(team.coins / 1000)}k` // Formatage pour sauvegarde
                }))
            })),
            calendarMatches: calendarMatches
        };
        const jsonData = JSON.stringify(formattedData, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.json';
        link.click();
    };

    return (
        <div className="group-stage-container">
            <Typography variant="h4" className="category-title">Administration</Typography>
            <Button variant="contained" color="primary" onClick={saveData} style={{ marginBottom: '20px' }}>
                Sauvegarder les données
            </Button>

            {/* Gestion des Groupes */}
            <Grid container spacing={4} className="group-container">
                {groupsData.map((group, groupIndex) => (
                    <Grid item xs={12} sm={6} key={groupIndex}>
                        <Paper className="group-paper">
                            <Typography variant="h6" className="group-title">{group.groupName}</Typography>
                            <Divider style={{ margin: '10px 0' }} />
                            {group.teams.map((team, teamIndex) => (
                                <div key={team.id} className="table-row">
                                    <Typography variant="body1" className="player-name">{team.name}</Typography>
                                    <TextField
                                        label="Joués"
                                        type="number"
                                        value={team.played}
                                        onChange={(e) => handleGroupChange(groupIndex, teamIndex, 'played', e.target.value)}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Coins"
                                        value={Math.round(team.coins / 1000)} // Affichage avec "k"
                                        onChange={(e) => handleGroupChange(groupIndex, teamIndex, 'coins', e.target.value)}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Points"
                                        type="number"
                                        value={team.points}
                                        onChange={(e) => handleGroupChange(groupIndex, teamIndex, 'points', e.target.value)}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Ajouter aux Coins"
                                        type="number"
                                        onBlur={(e) => handleCoinsCumulativeChange(groupIndex, teamIndex, e.target.value)}
                                        placeholder="Entrez la valeur à ajouter"
                                        fullWidth
                                        margin="normal"
                                    />
                                </div>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Gestion des Matchs */}
            <Typography variant="h5" style={{ marginTop: '20px' }}>Calendrier des Matchs</Typography>
            <Grid container spacing={4} className="group-container">
                {calendarMatches.map((journey, journeyIndex) => (
                    <Grid item xs={12} key={journeyIndex}>
                        <Paper className="group-paper">
                            <Typography variant="h6" className="group-title">{journey.date}</Typography>
                            <Divider style={{ margin: '10px 0' }} />
                            {journey.matches.map((match, matchIndex) => (
                                <div key={matchIndex} className="table-row">
                                    <Typography>{match.player1.name} vs {match.player2.name}</Typography>
                                    <TextField
                                        label="Score Joueur 1"
                                        type="number"
                                        value={match.player1.score}
                                        onChange={(e) => handleGroupChange(journeyIndex, matchIndex, 'player1', 'score', e.target.value)}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Ajouter au Score Joueur 1"
                                        type="number"
                                        onBlur={(e) => handleScoreCumulativeChange(journeyIndex, matchIndex, 'player1', e.target.value)}
                                        placeholder="Ajouter au score"
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Score Joueur 2"
                                        type="number"
                                        value={match.player2.score}
                                        onChange={(e) => handleGroupChange(journeyIndex, matchIndex, 'player2', 'score', e.target.value)}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Ajouter au Score Joueur 2"
                                        type="number"
                                        onBlur={(e) => handleScoreCumulativeChange(journeyIndex, matchIndex, 'player2', e.target.value)}
                                        placeholder="Ajouter au score"
                                        fullWidth
                                        margin="normal"
                                    />
                                </div>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AdminPage;
