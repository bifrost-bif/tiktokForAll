import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper, Divider } from '@mui/material';
import { styled } from '@mui/system';
import data from '../data.json'; // Importer les données depuis le fichier JSON
import './GroupStage.css'; // Fichier CSS pour styliser la page

// Style personnalisé pour les drapeaux et le classement
const Flag = styled('img')({
    width: '80px',
    height: '60px',
    marginRight: '10px',
    borderRadius: '4px',
});

const RankCircle = styled('div')(({ rank }) => ({
    display: 'inline-block',
    backgroundColor: rank >= 3 ? '#F44336' : '#4CAF50',  // Rouge pour les 3e et 4e, Vert pour les 1ers et 2èmes
    color: 'white',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    textAlign: 'center',
    lineHeight: '35px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px',
}));

const GroupStage = () => {
    const groupsData = data.groups; // Accéder aux données des groupes depuis le fichier JSON

    // Catégoriser les groupes
    const newPlayerGroups = groupsData.slice(0, 4); // Groupes A à D
    const oldPlayerGroups = groupsData.slice(4);    // Groupes E à H

    return (
        <div className="group-stage-container">
            {/* Section des Nouveaux Joueurs */}
            <Typography variant="h4" className="category-title">Nouveaux Joueurs</Typography>
            <Grid container spacing={4} className="group-container">
                {newPlayerGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Paper className="group-paper">
                            <Typography variant="h6" className="group-title">{group.groupName}</Typography>

                            {/* Conteneur avec défilement horizontal */}
                            <div className="table-container">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" className="table-header">Classement</TableCell>
                                            <TableCell align="center" className="table-header"></TableCell>
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
                                                        <Flag src={`${process.env.PUBLIC_URL}${team.flag}`} alt={team.name} />
                                                    </TableCell>
                                                    <TableCell align="center">{team.name}</TableCell>
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

            {/* Séparateur élégant */}
            <Divider variant="middle" className="group-divider" />

            {/* Section des Anciens Joueurs */}
            <br/>
            <Typography variant="h4" className="category-title">Anciens Joueurs</Typography>
            <Grid container spacing={4} className="group-container">
                {oldPlayerGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Paper className="group-paper">
                            <Typography variant="h6" className="group-title">{group.groupName}</Typography>
                            {/* Conteneur avec défilement horizontal */}
                            <div className="table-container">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" className="table-header">Classement</TableCell>
                                            <TableCell align="center" className="table-header"></TableCell>
                                            <TableCell align="center" className="table-header">Joueur</TableCell>
                                            <TableCell align="center" className="table-header">Matchs</TableCell>
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
                                                        <Flag src={`${process.env.PUBLIC_URL}${team.flag}`} alt={team.name} />
                                                    </TableCell>
                                                    <TableCell align="center">{team.name}</TableCell>
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