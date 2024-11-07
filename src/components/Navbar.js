import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importer le CSS pour l'animation

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            sx={{ 
                textAlign: 'center', 
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
            }}
        >
            {/* Liste des éléments du menu avec séparation améliorée */}
            <List sx={{ width: '100%' }}>
                {['Accueil', 'Joueurs Inscrits', 'Calendrier', 'Phase de groupe', 'Phase Éliminatoire', 'Sanctions', 'Mosammin'].map((text, index) => (
                    <ListItem 
                        button 
                        component={Link} 
                        to={`/${text.replace(/\s/g, '-').toLowerCase()}`} 
                        key={index}
                        sx={{
                            borderBottom: index !== 6 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                            py: 1.5,
                        }}
                    >
                        <ListItemText primary={text} sx={{ textAlign: 'center', fontSize: '1.5rem', color: '#f5f5f5' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {/* HEADER */}
            <AppBar
                position="static"
                sx={{
                    backgroundColor: mobileOpen ? 'rgba(40, 40, 40, 0.9)' : '#282828',
                    width: '100%',
                    zIndex: 1301,
                    boxShadow: mobileOpen ? 'none' : '0px 4px 12px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.5s ease',
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo et Titre avec des animations indépendantes en mobile uniquement */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            justifyContent: mobileOpen ? 'center' : 'flex-start',
                            width: mobileOpen ? '100%' : 'auto',
                        }}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/tiktoklogo.png`}
                            alt="Logo"
                            className={`navbar-logo ${mobileOpen ? 'animate-logo' : ''}`} // Ajout de la classe d'animation en mode mobile
                            style={{
                                width: mobileOpen ? '50px' : '40px',
                                height: mobileOpen ? '50px' : '40px',
                                transition: 'width 0.5s ease, height 0.5s ease, transform 0.5s ease',
                                transform: mobileOpen ? 'translate(19vh, 19vh) scale(1.8)' : 'translate(0, 0) scale(1)', // Déplacement et agrandissement en mobile
                            }}
                        />
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: mobileOpen ? '#E63946' : '#ecf0f1', // Couleur du titre modifiée
                                fontSize: mobileOpen ? '1.8rem' : '1.3rem',
                                transition: 'color 0.5s ease, font-size 0.5s ease, transform 0.5s ease',
                                transform: mobileOpen ? 'translate(0, 10vh)' : 'translate(0, 0)', // Déplacement indépendant du titre en mobile
                                textAlign: mobileOpen ? 'center' : 'left', 
                                width: mobileOpen ? '100%' : 'auto',
                                display: { xs: 'block', sm: 'none' } // Affiché uniquement en mobile
                            }}
                        >
                            TIKTOK FOR ALL
                        </Typography>
                    </Box>

                    {/* Icône du menu pour mobile */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Menu Horizontal pour les grands écrans */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '30px', justifyContent: 'center', flexGrow: 1 }}>
                        <Button component={Link} to="/" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                            Accueil
                        </Button>
                        <Button component={Link} to="/joueurs-inscrit" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                            Joueurs Inscrits
                        </Button>
                        <Button component={Link} to="/calendrier" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
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
                        <Button component={Link} to="/mosammin" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                            Monteurs Vidéo
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer pour le menu mobile */}
            <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '.MuiDrawer-paper': {
                        backgroundColor: '#282828',
                        color: '#f5f5f5',
                        paddingTop: '20px',
                        height: '100vh',
                        boxShadow: 'none',
                        overflow: 'hidden',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
