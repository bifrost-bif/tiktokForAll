import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import './Sanctions.css'; // Fichier CSS pour styliser la page

// Exemple de données des joueurs sanctionnés
const sanctionsData = [
    {
        id: 1,
        name: "Joueur 1",
        flag: "/images/profiles/joueur1.png",
        warnings: 2,
        reason: "Comportement antisportif",
        date: "2024-10-15",
        status: "Active"
    },
    {
        id: 2,
        name: "Joueur 2",
        flag: "/images/profiles/joueur2.png",
        warnings: 1,
        reason: "Retard",
        date: "2024-10-12",
        status: "Active"
    },
    {
        id: 3,
        name: "Joueur 3",
        flag: "/images/profiles/joueur3.png",
        warnings: 3,
        reason: "Abandon de match",
        date: "2024-10-10",
        status: "Sanctionné"
    },
];

// Style personnalisé pour les images des joueurs
const Flag = styled('img')({
    width: '60px',
    height: '60px',
    marginRight: '10px',
    borderRadius: '50%',
    objectFit: 'cover',
});

// Style conditionnel pour la colonne "Statut"
const getStatusStyle = (status) => {
    switch (status) {
        case "Active":
            return { color: 'green', fontWeight: 'bold' }; // Texte vert et en gras
        case "Sanctionné":
            return { color: 'red', fontWeight: 'bold' }; // Texte rouge et en gras
        default:
            return { color: 'black', fontWeight: 'bold' }; // Par défaut en noir et en gras
    }
};

const Sanctions = () => {
    return (
        <div className="sanctions-container">
            <Typography variant="h4" className="category-title">
                Liste des Sanctions
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={10}>
                    <Paper className="sanctions-paper">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" className="table-header">#</TableCell>
                                    <TableCell align="center" className="table-header">Photo</TableCell>
                                    <TableCell align="center" className="table-header">Nom du joueur</TableCell>
                                    <TableCell align="center" className="table-header">Nombre d'avertissements</TableCell>
                                    <TableCell align="center" className="table-header">Raison</TableCell>
                                    <TableCell align="center" className="table-header">Date</TableCell>
                                    <TableCell align="center" className="table-header">Statut</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sanctionsData.map((joueur) => (
                                    <TableRow key={joueur.id} className={joueur.status === 'Sanctionné' ? 'sanctions-table-row sanctioned' : 'sanctions-table-row'}>
                                        <TableCell align="center">{joueur.id}</TableCell>
                                        <TableCell align="center">
                                            <Flag src={joueur.flag} alt={joueur.name} />
                                        </TableCell>
                                        <TableCell align="center">{joueur.name}</TableCell>
                                        <TableCell align="center">{joueur.warnings}</TableCell>
                                        <TableCell align="center">{joueur.reason}</TableCell>
                                        <TableCell align="center">{joueur.date}</TableCell>
                                        <TableCell align="center" style={getStatusStyle(joueur.status)}>
                                            {joueur.status}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Sanctions;
