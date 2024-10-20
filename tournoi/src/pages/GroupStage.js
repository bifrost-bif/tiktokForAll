import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper, Divider } from '@mui/material';
import { styled } from '@mui/system';
import './GroupStage.css'; // Fichier CSS pour styliser la page

// Structure des données des groupes avec des images de drapeaux
const groupsData = [
    {
        groupName: "Groupe A",
        teams: [
            { id: 1, name: "joueur 1", flag: "/images/profiles/userTiktok.png", played: 3, coins: "190k", points: 0 },
            { id: 2, name: "joueur 2", flag: "/images/profiles/userTiktok.png", played: 3, coins: "142k", points: 5 },
            { id: 3, name: "joueur 3", flag: "/images/profiles/userTiktok.png", played: 3, coins: "120k", points: 2 },
            { id: 4, name: "joueur 4", flag: "/images/profiles/userTiktok.png", played: 3, coins: "26k", points: 1 }
        ]
    },
    {
        groupName: "Groupe E",
        teams: [
            { id: 1, name: "joueur 17", flag: "/images/profiles/joueur1.png", played: 3, coins: "7:4", points: 7 },
            { id: 2, name: "joueur 18", flag: "/images/profiles/joueur1.png", played: 3, coins: "4:2", points: 5 },
            { id: 3, name: "joueur 19", flag: "/images/profiles/joueur1.png", played: 3, coins: "4:5", points: 2 },
            { id: 4, name: "joueur 20", flag: "/images/profiles/joueur1.png", played: 3, coins: "2:6", points: 1 }
        ]
    },
    {
        groupName: "Groupe B",
        teams: [
            { id: 1, name: "joueur 5", flag: "/images/profiles/joueur3.png", played: 3, coins: "7:4", points: 7 },
            { id: 2, name: "joueur 6", flag: "/images/profiles/joueur3.png", played: 3, coins: "4:2", points: 5 },
            { id: 3, name: "joueur 7", flag: "/images/profiles/joueur3.png", played: 3, coins: "4:5", points: 2 },
            { id: 4, name: "joueur 8", flag: "/images/profiles/joueur3.png", played: 3, coins: "2:6", points: 1 }
        ]
    },
    {
        groupName: "Groupe F",
        teams: [
            { id: 1, name: "joueur 21", flag: "/images/profiles/joueur5.png", played: 3, coins: "7:4", points: 7 },
            { id: 2, name: "joueur 22", flag: "/images/profiles/joueur6.png", played: 3, coins: "4:2", points: 5 },
            { id: 3, name: "joueur 23", flag: "/images/profiles/joueur7.png", played: 3, coins: "4:5", points: 2 },
            { id: 4, name: "joueur 24", flag: "/images/profiles/joueur8.png", played: 3, coins: "2:6", points: 1 }
        ]
    },
    {
        groupName: "Groupe C",
        teams: [
            { id: 1, name: "joueur 9", flag: "/images/profiles/joueur5.png", played: 3, coins: "7:4", points: 7 },
            { id: 2, name: "joueur 10", flag: "/images/profiles/joueur6.png", played: 3, coins: "4:2", points: 5 },
            { id: 3, name: "joueur 11", flag: "/images/profiles/joueur7.png", played: 3, coins: "4:5", points: 2 },
            { id: 4, name: "joueur 12", flag: "/images/profiles/joueur8.png", played: 3, coins: "2:6", points: 1 }
        ]
    },
    {
        groupName: "Groupe G",
        teams: [
            { id: 1, name: "joueur 25", flag: "/images/profiles/joueur5.png", played: 3, coins: "7:4", points: 7 },
            { id: 2, name: "joueur 26", flag: "/images/profiles/joueur6.png", played: 3, coins: "4:2", points: 5 },
            { id: 3, name: "joueur 27", flag: "/images/profiles/joueur7.png", played: 3, coins: "4:5", points: 2 },
            { id: 4, name: "joueur 28", flag: "/images/profiles/joueur8.png", played: 3, coins: "2:6", points: 1 }
        ]
    },
    {
        groupName: "Groupe D",
        teams: [
            { id: 1, name: "joueur 13", flag: "/images/profiles/joueur5.png", played: 3, coins: "7:4", points: 7 },
            { id: 2, name: "joueur 14", flag: "/images/profiles/joueur6.png", played: 3, coins: "4:2", points: 5 },
            { id: 3, name: "joueur 15", flag: "/images/profiles/joueur7.png", played: 3, coins: "4:5", points: 2 },
            { id: 4, name: "joueur 16", flag: "/images/profiles/joueur8.png", played: 3, coins: "2:6", points: 1 }
        ]
    },
    {
        groupName: "Groupe H",
        teams: [
            { id: 1, name: "joueur 29", flag: "/images/profiles/joueur29.png", played: 3, coins: "7:4", points: 7 },
            { id: 2, name: "joueur 30", flag: "/images/profiles/joueur30.png", played: 3, coins: "4:2", points: 5 },
            { id: 3, name: "joueur 31", flag: "/images/profiles/joueur31.png", played: 3, coins: "4:5", points: 2 },
            { id: 4, name: "joueur 32", flag: "/images/profiles/joueur32.png", played: 3, coins: "2:6", points: 1 }
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
    return (
        <div className="group-stage-container">
            {/* Section des Nouveaux Joueurs */}
            <Typography variant="h4" className="category-title">Nouveaux Joueurs</Typography>
            <Grid container spacing={4} className="group-container">
                {newPlayerGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} key={index}>
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

            {/* Séparateur élégant */}
            <Divider variant="middle" className="group-divider" />

            {/* Section des Anciens Joueurs */}
            <Typography variant="h4" className="category-title">Anciens Joueurs</Typography>
            <Grid container spacing={4} className="group-container">
                {oldPlayerGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} key={index}>
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