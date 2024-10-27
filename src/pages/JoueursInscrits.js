import React from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Cancel';
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
    display: 'flex',  // Use flexbox for centering
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: '#fff',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.3s',
    cursor: 'default',
    margin: '0 auto', // Ensure the element centers itself in its container
    '&:hover': {
        backgroundColor: '#2980b9',
        transform: 'rotate(10deg) scale(1.05)', // Add rotation and slight scale effect on hover
    },
});


const JoueursInscrits = () => {
    // Split players into Group A (first 18) and Group B (remaining)
    const groupA = data.joueursInscritsData.slice(0, 18);
    const groupB = data.joueursInscritsData.slice(18);

    return (
        <div className="joueurs-inscrits-container">
            <Typography variant="h4" className="joueurs-inscrits-title">
                Liste des Joueurs
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {/* Group A */}
                <Grid item xs={12} md={6}>
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
                                                <PlayerNumber>A{index + 1}</PlayerNumber>
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
                </Grid>
                
                {/* Group B */}
                <Grid item xs={12} md={6}>
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
                                                <PlayerNumber>B{index + 1}</PlayerNumber>
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
                </Grid>
            </Grid>
        </div>
    );
};

export default JoueursInscrits;
