import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Fichier CSS pour styliser la barre de navigation

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#2C3E50' }}> {/* Fond sombre élégant */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}> {/* Alignement des éléments */}



                {/* Menu Horizontal */}
                <Box sx={{ display: 'flex', gap: '30px' }}> {/* Espacement entre les boutons */}
                    <Button component={Link} to="/" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                        Accueil
                    </Button>
                    <Button component={Link} to="/joueurs-inscrit" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                        Joueurs Inscrits
                    </Button>
                    <Button component={Link} to="calendrier" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                        Calendrier
                    </Button>
                    <Button component={Link} to="/group-stage" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                        Phase de groupe
                    </Button>
                    <Button component={Link} to="/eliminatoire" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                        Phase Éliminatoire
                    </Button>
                    <Button component={Link} to="/sanctions" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                        Sanctions
                    </Button>
                </Box>
                {/* Logo ou Titre */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ecf0f1' }}>
                    TIKTOK FOR ALL
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;