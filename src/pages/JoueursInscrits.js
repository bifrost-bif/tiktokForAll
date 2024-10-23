import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/CheckCircle'; // Icône de validation
import CloseIcon from '@mui/icons-material/Cancel'; // Icône de non-validation
import './JoueursInscrits.css';
import data from '../data.json'; // Importer les données depuis le fichier JSON

// Style pour les images (photos des joueurs)
const Flag = styled('img')({
    width: '60px',
    height: '60px',
    marginRight: '10px',
    borderRadius: '50%',
    objectFit: 'cover',
});

const JoueursInscrits = () => {
    return (
        <div className="joueurs-inscrits-container">
            <Typography variant="h4" className="joueurs-inscrits-title">
                Liste des Joueurs Inscrits
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={10}>
                    <Paper className="joueurs-inscrits-paper">
                        {/* Ajout du conteneur de défilement pour les petits écrans */}
                        <div className="table-container">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" className="joueurs-table-header">Photo</TableCell>
                                        <TableCell align="center" className="joueurs-table-header">Nom du joueur</TableCell>
                                        <TableCell align="center" className="joueurs-table-header">Lien TikTok</TableCell>
                                        <TableCell align="center" className="joueurs-table-header">Payé</TableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.joueursInscritsData.map((joueur, index) => (
                                        <TableRow key={joueur.id} className="joueurs-table-row">
                                            <TableCell align="center" className="joueurs-table-cell">
                                                <Flag src={`${process.env.PUBLIC_URL}${joueur.flag}`} alt={joueur.name} />
                                            </TableCell>
                                            <TableCell align="center" className="joueurs-table-cell">{joueur.name}</TableCell>
                                            <TableCell align="center" className="joueurs-table-cell">
                                                {joueur.tiktokUsername ? (
                                                    <a href={`https://www.tiktok.com/@${joueur.tiktokUsername}`} target="_blank" rel="noopener noreferrer" className="tiktok-link">
                                                        {joueur.tiktokUsername}
                                                    </a>
                                                ) : (
                                                    "N/A"
                                                )}
                                            </TableCell>
                                            <TableCell align="center" className="joueurs-table-cell">
                                                {joueur.validated ? (
                                                    <CheckIcon className="validation-icon valid" />
                                                ) : (
                                                    <CloseIcon className="validation-icon invalid" />
                                                )}
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

export default JoueursInscrits;