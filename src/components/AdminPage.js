import React, { useState, useEffect } from 'react';
import AdminCalendar from './AdminCalendar';
import { TextField, Button, Typography, Paper } from '@mui/material';
import CryptoJS from 'crypto-js';

const AdminPage = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Hachage SHA-256 du mot de passe
    const hashedPassword = '9ec2c4597ec0a816f6984c6037a630b19ae3be760d632023ce96941a8989e02e'; // pour le mot "motDePasseAdmin"

    // Vérification de l'authentification via le localStorage au chargement
    useEffect(() => {
        const auth = localStorage.getItem('isAuthenticated');
        if (auth === 'true') setIsAuthenticated(true);
    }, []);

    const handleLogin = () => {
        // Hachage du mot de passe saisi
        const inputHash = CryptoJS.SHA256(password).toString();
        console.log(inputHash);
        if (inputHash === hashedPassword) {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true'); // Sauvegarde l'état d'authentification
        } else {
            alert('Mot de passe incorrect. Veuillez réessayer.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); // Suppression de l'état d'authentification
    };

    // Interface d'authentification
    if (!isAuthenticated) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Paper style={{ padding: '20px', width: '300px', textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>Accès Administrateur</Typography>
                    <TextField
                        label="Mot de passe"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                        Se connecter
                    </Button>
                </Paper>
            </div>
        );
    }

    // Interface de déconnexion et affichage de AdminCalendar après authentification
    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleLogout} style={{ margin: '20px' }}>
                Se déconnecter
            </Button>
            <AdminCalendar />
        </div>
    );
};

export default AdminPage;
