import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import './GroupStage.css'; // Fichier CSS pour styliser la page

// Structure des données des groupes avec des images de drapeaux
const groupsData = [
    {
        groupName: "Groupe A",
        teams: [
            { id: 1, name: "Portugal", flag: "/images/flags/portugal.png", played: 3, goals: "7:2", points: 7 },
            { id: 2, name: "Mexique", flag: "/images/flags/mexico.png", played: 3, goals: "6:4", points: 7 },
            { id: 3, name: "Russie", flag: "/images/flags/russia.png", played: 3, goals: "3:3", points: 3 },
            { id: 4, name: "Nouvelle-Zélande", flag: "/images/flags/nz.png", played: 3, goals: "1:8", points: 0 }
        ]
    },
    {
        groupName: "Groupe B",
        teams: [
            { id: 1, name: "Allemagne", flag: "/images/flags/germany.png", played: 3, goals: "7:4", points: 7 },
            { id: 2, name: "Chili", flag: "/images/flags/chile.png", played: 3, goals: "4:2", points: 5 },
            { id: 3, name: "Australie", flag: "/images/flags/australia.png", played: 3, goals: "4:5", points: 2 },
            { id: 4, name: "Cameroun", flag: "/images/flags/cameroon.png", played: 3, goals: "2:6", points: 1 }
        ]
    }
];

// Catégoriser les groupes
const newPlayerGroups = groupsData.slice(0, 4); // Groupes A à D
const oldPlayerGroups = groupsData.slice(4);    // Groupes E à H

// Style personnalisé pour les drapeaux et le classement
const Flag = styled('img')({
    width: '80px',
    height: '60px',
    marginRight: '10px',
    borderRadius: '4px',
});

const RankCircle = styled('div')(({ rank }) => ({
    display: 'inline-block',
    backgroundColor: rank >= 3 ? '#FF6F61' : '#4CAF50',  // Rouge pour les 3e et 4e, Vert pour les 1ers et 2èmes
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
    return (
        <div className="group-stage-container">
            {/* Section des Nouveaux Joueurs */}
            <Typography variant="h4" className="category-title">Nouveaux Joueurs</Typography>
            <Grid container spacing={2} className="group-container">
                {newPlayerGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper className="group-paper">
                            <Typography variant="h6" className="group-title">{group.groupName}</Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" className="table-header">#</TableCell>
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
                                                    <Flag src={team.flag} alt={team.name} />
                                                </TableCell>
                                                <TableCell align="center">{team.name}</TableCell>
                                                <TableCell align="center">{team.played}</TableCell>
                                                <TableCell align="center">{team.coins}</TableCell>
                                                <TableCell align="center">{team.points}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Section des Anciens Joueurs */}
            <Typography variant="h4" className="category-title">Anciens Joueurs</Typography>
            <Grid container spacing={2} className="group-container">
                {oldPlayerGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper className="group-paper">
                            <Typography variant="h6" className="group-title">{group.groupName}</Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" className="table-header">#</TableCell>
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
                                                    <Flag src={team.flag} alt={team.name} />
                                                </TableCell>
                                                <TableCell align="center">{team.name}</TableCell>
                                                <TableCell align="center">{team.played}</TableCell>
                                                <TableCell align="center">{team.coins}</TableCell>
                                                <TableCell align="center">{team.points}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default GroupStage;