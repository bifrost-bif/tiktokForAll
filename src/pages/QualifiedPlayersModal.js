import React from 'react';
import { Modal, Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import './QualifiedPlayers.css';
import data from '../data.json';

// Styled flag component
const Flag = styled('img')({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
    boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.6)',
});

const QualifiedPlayersModal = ({ open, onClose }) => {
    const qualifiedPlayers = data.groups.flatMap(group => 
        group.teams.slice().sort((a, b) => b.points - a.points).slice(0, 2)
    );

    return (
        <Modal open={open} onClose={onClose} className="qualified-modal">
            <Box className="qualified-modal-content">
                <Typography variant="h4" className="qualified-title">
                    Joueurs Qualifiés
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {qualifiedPlayers.map((player, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box className="player-card">
                                <Flag src={`${process.env.PUBLIC_URL}${player.flag}`} alt={player.name} />
                                <Typography variant="h6" className="player-name">{player.name}</Typography>
                                <Typography variant="body2" className="player-stats">
                                    {player.points} Points
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Modal>
    );
};

export default QualifiedPlayersModal;
