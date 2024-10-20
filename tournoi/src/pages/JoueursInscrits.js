import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/CheckCircle'; // Icône de validation
import CloseIcon from '@mui/icons-material/Cancel'; // Icône de non-validation
import './JoueursInscrits.css';

// Liste complète des 32 joueurs inscrits
const joueursInscritsData = [
    { id: 1, name: "Joueur 1", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:"bif.bif" },
    { id: 2, name: "Marven", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:"marwen.07" },
    { id: 3, name: "Joueur 3", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:"" },
    { id: 4, name: "Joueur 4", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:"" },
    { id: 5, name: "Joueur 5", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:"" },
    { id: 6, name: "Joueur 6", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:"" },
    { id: 7, name: "Joueur 7", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:"" },
    { id: 8, name: "Joueur 8", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:"" },
    { id: 9, name: "Joueur 9", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:"" },
    { id: 10, name: "Joueur 10", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:""},
    { id: 11, name: "Joueur 11", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 12, name: "Joueur 12", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 13, name: "Joueur 13", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 14, name: "Joueur 14", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:""},
    { id: 15, name: "Joueur 15", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 16, name: "Joueur 16", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 17, name: "Joueur 17", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 18, name: "Joueur 18", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 19, name: "Joueur 19", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:""},
    { id: 20, name: "Joueur 20", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 21, name: "Joueur 21", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 22, name: "Joueur 22", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:""},
    { id: 23, name: "Joueur 23", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 24, name: "Joueur 24", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 25, name: "Joueur 25", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 26, name: "Joueur 26", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:""},
    { id: 27, name: "Joueur 27", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 28, name: "Joueur 28", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 29, name: "Joueur 29", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 30, name: "Joueur 30", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:""},
    { id: 31, name: "Joueur 31", flag: "/images/profiles/userTiktok.png", validated: true, tiktokUsername:""},
    { id: 32, name: "Joueur 32", flag: "/images/profiles/userTiktok.png", validated: false, tiktokUsername:""}
];


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
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" className="joueurs-table-header">#</TableCell>
                                    <TableCell align="center" className="joueurs-table-header">Photo</TableCell>
                                    <TableCell align="center" className="joueurs-table-header">Nom du joueur</TableCell>
                                    <TableCell align="center" className="joueurs-table-header">Inscription validée</TableCell>
                                    <TableCell align="center" className="joueurs-table-header">Lien TikTok</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {joueursInscritsData.map((joueur, index) => (
                                    <TableRow key={joueur.id} className="joueurs-table-row">
                                        <TableCell align="center" className="joueurs-table-cell">{index + 1}</TableCell>
                                        <TableCell align="center" className="joueurs-table-cell">
                                            <Flag src={joueur.flag} alt={joueur.name} />
                                        </TableCell>
                                        <TableCell align="center" className="joueurs-table-cell">{joueur.name}</TableCell>
                                        <TableCell align="center" className="joueurs-table-cell">
                                            {joueur.validated ? (
                                                <CheckIcon className="validation-icon valid" />
                                            ) : (
                                                <CloseIcon className="validation-icon invalid" />
                                            )}
                                        </TableCell>
                                        <TableCell align="center" className="joueurs-table-cell">
                                            {joueur.tiktokUsername ? (
                                                <a href={`https://www.tiktok.com/@${joueur.tiktokUsername}`} target="_blank" rel="noopener noreferrer" className="tiktok-link">
                                                    {joueur.tiktokUsername}
                                                </a>
                                            ) : (
                                                "N/A"
                                            )}
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

export default JoueursInscrits;