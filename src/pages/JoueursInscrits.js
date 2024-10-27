import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import './JoueursInscrits.css';
import data from '../data.json';

// Style for the player images (flags/photos)
const Flag = styled('img')({
    width: '60px',
    height: '60px',
    marginRight: '10px',
    borderRadius: '50%'
});

// Styled component for the player number
const PlayerNumber = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: '#fff',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.3s',
    cursor: 'default',
    margin: '0 auto',
    '&:hover': {
        backgroundColor: '#2980b9',
        transform: 'rotate(10deg) scale(1.05)',
    },
});

const JoueursInscrits = () => {
    // Split players into Group A (first 18) and Group B (remaining)
    const groupA = data.joueursInscritsData.slice(0, 19);
    const groupB = data.joueursInscritsData.slice(19,39);

    return (
        <div className="joueurs-inscrits-container">
            <Typography variant="h4" className="joueurs-inscrits-title">
                Liste des Joueurs
            </Typography>
            <div className="joueurs-inscrits-grid">
                {/* Group A */}
                <div className="joueurs-inscrits-grid-item">
                    <Paper className="joueurs-inscrits-paper">
                        <Typography variant="h5" className="group-title">
                            Groupe A
                        </Typography>
                        <div className="table-container">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" className="joueurs-table-header">Numéro</TableCell>
                                        <TableCell align="center" className="joueurs-table-header">Joueur</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {groupA.map((joueur, index) => (
                                        <TableRow key={joueur.id} className="joueurs-table-row">
                                            <TableCell align="center" className="joueurs-table-cell">
                                                <PlayerNumber>{index + 1}</PlayerNumber> {/* Numéro de jouer dans le groupe A */}
                                            </TableCell>
                                            <TableCell align="center" className="joueurs-table-cell">
                                                <div className="joueur-details">
                                                    <a href={`https://www.tiktok.com/@${joueur.tiktokUsername}`} target="_blank" rel="noopener noreferrer">
                                                        <Flag src={`${process.env.PUBLIC_URL}${joueur.flag}`} alt={joueur.name} />
                                                    </a>
                                                    <Typography variant="body1" className="joueur-nom">{joueur.name}</Typography>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </div>

                {/* Group B */}
                <div className="joueurs-inscrits-grid-item">
                    <Paper className="joueurs-inscrits-paper">
                        <Typography variant="h5" className="group-title">
                            Groupe B
                        </Typography>
                        <div className="table-container">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" className="joueurs-table-header">Numéro</TableCell>
                                        <TableCell align="center" className="joueurs-table-header">Joueur</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {groupB.map((joueur, index) => (
                                        <TableRow key={joueur.id} className="joueurs-table-row">
                                            <TableCell align="center" className="joueurs-table-cell">
                                                <PlayerNumber>{index + 1}</PlayerNumber>{/* Numéro de jouer dans le groupe A */}
                                            </TableCell>
                                            <TableCell align="center" className="joueurs-table-cell">
                                                <div className="joueur-details">
                                                    <a href={`https://www.tiktok.com/@${joueur.tiktokUsername}`} target="_blank" rel="noopener noreferrer">
                                                        <Flag src={`${process.env.PUBLIC_URL}${joueur.flag}`} alt={joueur.name} />
                                                    </a>
                                                    <Typography variant="body1" className="joueur-nom">{joueur.name}</Typography>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default JoueursInscrits;
