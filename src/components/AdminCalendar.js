import React, { useState } from 'react';
import { TextField, MenuItem, Button, Typography, Grid, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import FileSaver from 'file-saver';
import data from '../data.json';

const AdminCalendar = () => {
    const [matches, setMatches] = useState(data.calendarMatches || []);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [player1Id, setPlayer1Id] = useState('');
    const [player2Id, setPlayer2Id] = useState('');

    // Trier les joueurs par ordre alphabétique du nom
    const sortedPlayers = [...data.joueursInscritsData].sort((a, b) => a.name.localeCompare(b.name));

    // Fonction pour formater la date en français avec le jour commençant par une majuscule
    const formatDate = (date) => {
        const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = new Date(date).toLocaleDateString('fr-FR', options);
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    };

    const getPlayerInfo = (id) => {
        const player = data.joueursInscritsData.find(j => j.id === parseInt(id));
        return player ? { name: player.name, photo: player.flag, score: -1 } : { name: 'Non Inscrit', photo: '/images/profiles/sortie.png', score: -1 };
    };

    const addMatch = () => {
        const player1 = getPlayerInfo(player1Id);
        const player2 = getPlayerInfo(player2Id);
        const match = { player1, player2, time };
        const formattedDate = formatDate(date);

        setMatches(prevMatches => {
            const updatedMatches = [...prevMatches];
            const existingDateEntry = updatedMatches.find(entry => entry.date === formattedDate);

            if (existingDateEntry) {
                existingDateEntry.matches.push(match);
            } else {
                updatedMatches.push({ date: formattedDate, matches: [match] });
            }
            return updatedMatches;
        });

        setPlayer1Id('');
        setPlayer2Id('');
        setTime('');
    };

    const deleteMatch = (date, matchIndex) => {
        setMatches(prevMatches => 
            prevMatches.map(entry => 
                entry.date === date
                ? { ...entry, matches: entry.matches.filter((_, index) => index !== matchIndex) }
                : entry
            ).filter(entry => entry.matches.length > 0)
        );
    };

    // Sauvegarder les données sous forme de fichier JSON téléchargeable
    const saveToJson = () => {
        const jsonData = JSON.stringify({ ...data, calendarMatches: matches }, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        FileSaver.saveAs(blob, "data.json");
        alert("Les matchs ont été sauvegardés en tant que fichier JSON.");
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Administration - Création de Matchs</Typography>
            
            <Paper style={{ padding: '15px', marginBottom: '20px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Heure"
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            label="Joueur 1"
                            value={player1Id}
                            onChange={(e) => setPlayer1Id(e.target.value)}
                            fullWidth
                        >
                            {sortedPlayers.map(player => (
                                <MenuItem key={player.id} value={player.id}>
                                    {player.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            label="Joueur 2"
                            value={player2Id}
                            onChange={(e) => setPlayer2Id(e.target.value)}
                            fullWidth
                        >
                            {sortedPlayers.map(player => (
                                <MenuItem key={player.id} value={player.id}>
                                    {player.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={addMatch}>
                            Ajouter le match
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<SaveIcon />} 
                onClick={saveToJson} 
                style={{ marginBottom: '20px' }}
            >
                Sauvegarder les matchs
            </Button>

            <Typography variant="h6" gutterBottom>Matchs en attente :</Typography>
            <List>
                {matches.map((entry, entryIndex) => (
                    <React.Fragment key={entryIndex}>
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{entry.date}</Typography>
                        {entry.matches.map((match, matchIndex) => (
                            <ListItem 
                                key={matchIndex} 
                                style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '8px', padding: '10px' }}
                            >
                                <ListItemText 
                                    primary={`${match.player1.name} vs ${match.player2.name}`}
                                    secondary={`Heure: ${match.time}`}
                                />
                                <IconButton edge="end" onClick={() => deleteMatch(entry.date, matchIndex)}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            </ListItem>
                        ))}
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
};

export default AdminCalendar;
