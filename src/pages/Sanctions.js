import React, { useState } from 'react';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper, Select, MenuItem, TableContainer } from '@mui/material';
import { styled } from '@mui/system';
import data from '../data.json'; // Importer les données JSON
import './Sanctions.css'; // Fichier CSS pour styliser la page

const Flag = styled('img')({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
});

const getStatusStyle = (status) => {
    switch (status) {
        case "Active":
            return { color: 'green', fontWeight: 'bold' };
        case "Sanctionné":
            return { color: 'red', fontWeight: 'bold' };
        default:
            return { color: 'black', fontWeight: 'bold' };
    }
};

// Descriptions des niveaux pour l'affichage dans la liste déroulante
const levelDescriptions = {
    'niv3': "Live simultané (max 3)",
    'niv4': "Propos vulgaires indirects (max 4)",
    'niv2': "Langage inapproprié direct (max 2)",
    'niv1': "Discours discriminatoire et harcèlement (max 1)",
};

const Sanctions = () => {
    const [sanctionsData, setSanctionsData] = useState(
        // Trie les données par date en format ISO pour garantir l'ordre chronologique
        data.sanctions
            .map(joueur => ({ ...joueur, selectedLevel: 'niv2' })) // Initialise chaque joueur avec le niveau par défaut 'niv3'
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie les joueurs par date décroissante
    );

    // Fonction pour accéder aux avertissements pour un niveau donné
    const getWarningsForLevel = (joueur, level) => {
        return joueur[level] !== undefined ? joueur[level] : '0';
    };

    // Gestion de la modification du niveau pour afficher le bon nombre d'avertissements
    const handleLevelChange = (event, joueurId) => {
        const newLevel = event.target.value;
        setSanctionsData((prevData) =>
            prevData.map((joueur) =>
                joueur.id === joueurId ? { ...joueur, selectedLevel: newLevel } : joueur
            )
        );
    };

    return (
        <div className="sanctions-container">
            <Typography variant="h4" className="category-title">Système de Sanctions du Tournoi</Typography>
            <Typography variant="body1" className="intro-text">
                Ce système de sanctions assure un environnement compétitif respectueux et sécuritaire. Chaque infraction est classée par niveau, avec des sanctions qui augmentent en gravité selon la nature de la violation.
            </Typography>

            <Typography variant="h5" className="table-title">Détails des Sanctions en Cours</Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={10}>
                    <Paper className="sanctions-paper">
                        <TableContainer style={{ maxHeight: '60vh' }}> {/* Active le défilement sur mobile */}
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" className="table-header">Joueur</TableCell>
                                        <TableCell align="center" className="table-header" style={{ width: '120px' }}>Niveau</TableCell>
                                        <TableCell align="center" className="table-header">Statut</TableCell>
                                        <TableCell align="center" className="table-header">Avertissements</TableCell>
                                        <TableCell align="center" className="table-header">Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sanctionsData.map((joueur) => (
                                        <TableRow key={joueur.id} className={joueur.status === 'Sanctionné' ? 'sanctions-table-row sanctioned' : 'sanctions-table-row'}>
                                            <TableCell align="center">
                                                <Flag src={`${process.env.PUBLIC_URL}${joueur.flag}`} alt={joueur.name} />
                                                <div>{joueur.name}</div>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Select
                                                    value={joueur.selectedLevel} // Utilise le niveau sélectionné actuel
                                                    onChange={(event) => handleLevelChange(event, joueur.id)}
                                                    size="small"
                                                    style={{ minWidth: 80 }} // Réduit la largeur du Select
                                                >
                                                    <MenuItem value="niv4">Niv 4</MenuItem>
                                                    <MenuItem value="niv3">Niv 3</MenuItem>
                                                    <MenuItem value="niv2">Niv 2</MenuItem>
                                                    <MenuItem value="niv1">Niv 1</MenuItem>
                                                </Select>
                                                <Typography variant="caption" style={{ display: 'block', marginTop: '5px' }}>
                                                    {levelDescriptions[joueur.selectedLevel]}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center" style={getStatusStyle(joueur.status)}>
                                                {joueur.status}
                                            </TableCell>
                                            <TableCell align="left">
                                                {getWarningsForLevel(joueur, joueur.selectedLevel)} {/* Affiche le nombre d'avertissements pour le niveau sélectionné */}
                                            </TableCell>
                                            <TableCell align="center">{joueur.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Sanctions;
