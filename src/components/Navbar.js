import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)'); // Détecte si l’écran est de petite taille

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
            <List sx={{ width: '100%' }}>
                {['Accueil', 'Calendrier', 'Phase de groupe', 'Phase Eliminatoire', 'Sanctions', 'Mosammin'].map((text, index) => (
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
            {/* HEADER FIXE */}
            <AppBar
                position="fixed"  // Position fixe pour maintenir le header en haut
                sx={{
                    backgroundColor: mobileOpen ? 'rgba(40, 40, 40, 0.9)' : '#282828',
                    width: '100%',
                    zIndex: 1301,
                    boxShadow: mobileOpen ? 'none' : '0px 4px 12px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.5s ease',
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                            className={`navbar-logo ${mobileOpen ? 'animate-logo' : ''}`}
                            style={{
                                width: mobileOpen ? '50px' : '40px',
                                height: mobileOpen ? '50px' : '40px',
                                transition: 'width 0.5s ease, height 0.5s ease, transform 0.5s ease',
                                transform: mobileOpen && isMobile ? 'translate(40vw, 15vh) scale(1.5)' : 'translate(0, 0) scale(1)', 
                            }}
                        />
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                fontWeight: 'bold', 
                                color: mobileOpen ? '#E63946' : '#ecf0f1',
                                fontSize: mobileOpen ? '1.8rem' : '1.3rem',
                                transition: 'color 0.5s ease, font-size 0.5s ease, transform 0.5s ease',
                                transform: mobileOpen && isMobile ? 'translateY(8vh)' : 'translateY(0)',
                                textAlign: mobileOpen ? 'center' : 'left', 
                                width: mobileOpen ? '100%' : 'auto',
                                display: { xs: 'block', sm: 'none' },
                            }}
                        >
                            TIKTOK FOR ALL
                        </Typography>
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '30px', justifyContent: 'center', flexGrow: 1 }}>
                        <Button component={Link} to="/" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                            Accueil
                        </Button>
 
                        <Button component={Link} to="/calendrier" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                            Calendrier
                        </Button>
                        <Button component={Link} to="/phase-de-groupe" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
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

            {/* Espace en haut pour compenser la hauteur du header fixe */}
            <Box sx={{ marginTop: '64px' }} /> {/* Ajustez la valeur pour la hauteur du header */}
        </>
    );
};

export default Navbar;
