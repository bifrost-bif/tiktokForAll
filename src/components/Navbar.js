import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material'; // Import du menu icône pour mobile
import { Link } from 'react-router-dom';
import './Navbar.css'; // Fichier CSS pour styliser la barre de navigation

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false); // État pour le menu mobile

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen); // Ouvre/ferme le menu mobile
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                TIKTOK FOR ALL
            </Typography>
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Accueil" />
                </ListItem>
                <ListItem button component={Link} to="/joueurs-inscrit">
                    <ListItemText primary="Joueurs Inscrits" />
                </ListItem>
                <ListItem button component={Link} to="/calendrier">
                    <ListItemText primary="Calendrier" />
                </ListItem>
                <ListItem button component={Link} to="/group-stage">
                    <ListItemText primary="Phase de groupe" />
                </ListItem>
                <ListItem button component={Link} to="/eliminatoire">
                    <ListItemText primary="Phase Éliminatoire" />
                </ListItem>
                <ListItem button component={Link} to="/sanctions">
                    <ListItemText primary="Sanctions" />
                </ListItem>
                <ListItem button component={Link} to="/AdminPanel">
                    <ListItemText primary="Admin" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#2C3E50', width: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    {/* Logo + Titre */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={`${process.env.PUBLIC_URL}/images/tiktoklogo.png`} alt="Logo" className="navbar-logo" />
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ecf0f1' }}>
                            TIKTOK FOR ALL
                        </Typography>
                    </Box>

                    {/* Icône du menu pour mobile */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' } }} // Affiché uniquement sur mobile
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Menu Horizontal pour les grands écrans */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '30px', justifyContent: 'center', flexGrow: 1 }}> {/* Ajout de `justifyContent: 'center'` */}
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
                        <Button component={Link} to="/AdminPanel" sx={{ color: '#ecf0f1', fontWeight: 'bold' }}>
                            Admin
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer pour le menu mobile */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', sm: 'none' } }} // Affiché uniquement sur mobile
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;