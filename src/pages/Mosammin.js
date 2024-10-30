// Mosammin.js
import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import data from '../data.json'; // Import data
import './Mosammin.css'; // CSS styling

const Mosammin = () => {
    const mosamminData = data.Mosammin; // Access Mosammin data

    return (
        <div className="mosammin-container">
            {/* Intro Section */}
            <div className="mosammin-intro">
                <Typography variant="h4" className="mosammin-title">
                    Monteurs Vidéo du Tournoi
                </Typography><br/>
                <Typography variant="body1" className="mosammin-intro-text">
                    Nos monteurs vidéo jouent un rôle essentiel en mettant en avant les meilleurs moments du tournoi, contribuant à la qualité globale de l'événement.
                    <br/><br/><strong>Récompenses</strong><br/>
                    Pour reconnaître leur travail exceptionnel, les monteurs vidéo auront l’opportunité de :
                    <ul className="mosammin-rewards-list">
                        <li>Gagner <strong>10% du montant cumulé des participations</strong></li>
                        <li>Recevoir des <strong>surprises exclusives</strong> en guise de reconnaissance</li>
                    </ul>
                </Typography>
                
                <Typography variant="body1" className="mosammin-intro-text">
                    <strong>Critères d’Évaluation</strong><br/>
                    Les monteurs seront jugés selon plusieurs aspects clés :
                    <ul className="mosammin-criteria-list">
                        <li><strong>Qualité du contenu</strong> – Création de vidéos captivantes et inspirantes</li>
                        <li><strong>Aspects techniques</strong> – Maîtrise des outils de montage et d'édition</li>
                        <li><strong>Neutralité</strong> – Représentation équilibrée de chaque participant</li>
                    </ul>
                    Par leur talent et leur objectivité, les monteurs contribuent à offrir une expérience inoubliable pour tous. Bonne chance à nos créateurs dans cette aventure créative !
                </Typography>
            </div>

            <Grid container spacing={4} justifyContent="center">
                {mosamminData.map((editor) => (
                    <Grid item xs={12} sm={6} md={4} key={editor.id}>
                        <a
                            href={`https://www.tiktok.com/@${editor.tiktokUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="editor-link"
                        >
                            <Paper className="editor-paper">
                                <Box display="flex" alignItems="center" flexDirection="column" padding={2}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}${editor.flag}`}
                                        alt={editor.name}
                                        className="editor-flag"
                                    />
                                    <Typography variant="h6" className="editor-name">{editor.name}</Typography>
                                    <Typography variant="body2" className="editor-username">@{editor.tiktokUsername}</Typography>
                                </Box>
                            </Paper>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Mosammin;
