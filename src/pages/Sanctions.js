import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import data from '../data.json'; // Importer les données JSON
import './Sanctions.css'; // Fichier CSS pour styliser la page

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
    const sanctionsData = data.sanctions; // Accéder aux données "sanctions" depuis le JSON

    return (
        <div className="sanctions-container">
            <Typography variant="h4" className="category-title">Liste des Sanctions</Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={10}>
                    <Paper className="sanctions-paper">
                        {/* Conteneur avec défilement horizontal */}
                        <div className="table-container">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" className="table-header"></TableCell>
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
                                            <TableCell align="center"><Flag src={joueur.flag} alt={joueur.name} /></TableCell>
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
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Sanctions;