import React, { useState } from 'react';  // Assure-toi d'importer useState
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import GroupStage from './pages/GroupStage';
import KnockoutStage from './pages/KnockoutStage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Créer un thème sombre pour tout le site
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
            paper: '#1C1C1C'
        },
        text: {
            primary: '#FFFFFF'
        }
    },
});

function App() {
    // Définir l'état pour le Drawer avec useState
    const [drawerOpen, setDrawerOpen] = useState(false);  // Utilisation de useState

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline /> {/* Applique le thème sombre partout */}
            <Router>
                {/* Icone pour ouvrir le Drawer */}
                <IconButton onClick={() => setDrawerOpen(true)} style={{ margin: '10px' }}>
                    <MenuIcon />
                </IconButton>

                {/* Menu latéral Drawer */}
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <List>
                        <ListItem button component={Link} to="/" onClick={() => setDrawerOpen(false)}>
                            <ListItemText primary="Accueil" />
                        </ListItem>
                        <ListItem button component={Link} to="/group-stage" onClick={() => setDrawerOpen(false)}>
                            <ListItemText primary="Phases de groupes" />
                        </ListItem>
                        <ListItem button component={Link} to="/knockout-stage" onClick={() => setDrawerOpen(false)}>
                            <ListItemText primary="Élimination directe" />
                        </ListItem>
                    </List>
                </Drawer>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/group-stage" element={<GroupStage />} />
                    <Route path="/knockout-stage" element={<KnockoutStage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
