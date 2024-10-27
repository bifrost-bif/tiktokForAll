import React, { useState, useEffect } from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';
import data from '../data.json'; // Importer les données depuis le fichier JSON
import './GroupStage.css'; // Fichier CSS pour styliser la page

// Style personnalisé pour les drapeaux
const Flag = styled('img')({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
});

// Style conditionnel pour le cercle de classement
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
    const [isResultsHidden] = useState(true);
    const groupsData = data.groups; // Accéder aux données des groupes depuis le fichier JSON

    // Utiliser useEffect pour charger le script TikTok lorsque le composant est monté
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // Catégoriser les groupes en nouveaux et anciens joueurs
    const newPlayerGroups = groupsData.slice(0, 4); // Groupes A à D
    const oldPlayerGroups = groupsData.slice(4);    // Groupes E à H

    // Si les résultats sont cachés, afficher un message d'attente
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
                    color: '#0d47a1',
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
                        Live sur TikTok avec <strong>@bacem1tun</strong>.
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

    return (
        <div className="group-stage-container">
            {/* Section des Nouveaux Joueurs */}
            <Typography variant="h4" className="category-title">Nouveaux Joueurs</Typography>
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
                                        {group.teams
                                            .slice()
                                            .sort((a, b) => b.points - a.points)
                                            .map((team, idx) => (
                                                <TableRow key={team.id}>
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

            {/* Section des Anciens Joueurs */}
            <Typography variant="h4" className="category-title">Anciens Joueurs</Typography>
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
                                        {group.teams
                                            .slice()
                                            .sort((a, b) => b.points - a.points)
                                            .map((team, idx) => (
                                                <TableRow key={team.id}>
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
