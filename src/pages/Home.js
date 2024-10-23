import React, { useEffect } from 'react'; // Import useEffect
import { Typography, Box, Grid, Paper } from '@mui/material';
import './Home.css'; // Fichier CSS pour styliser la page

const Home = () => {
            // Load the TikTok embed script
            useEffect(() => {
                const script = document.createElement('script');
                script.src = 'https://www.tiktok.com/embed.js';
                script.async = true;
                document.body.appendChild(script);
        
                // Clean up the script when the component is unmounted
                return () => {
                    document.body.removeChild(script);
                };
            }, []); // Empty dependency array ensures this effect runs once on mount
        
    return (
        <div className="home-container">
            {/* Section d'introduction */}
            <section className="intro-section">
                <Typography variant="h3" className="home-title" gutterBottom>
                    Bienvenue au Tournoi TIKTOK FOR ALL
                </Typography>
                <Typography variant="body1" className="home-text">
                    Nous organisons une compétition unique en Tunisie, où les anciens et nouveaux Tiktokeurs peuvent se rencontrer et s'affronter dans un environnement compétitif et propre. Le but est de donner une chance à tous les streamers de se faire connaître, tout en créant un espace respectueux et créatif sur TikTok.
                </Typography>
            </section>

            {/* Section sur les règles et conditions */}
            <section className="rules-section">
                <Typography variant="h4" className="section-title">
                    Règles et Conditions de Participation
                </Typography>
                <Typography variant="body1" className="home-text">
                    <ul>
                        <li>
                            <strong>Participation ouverte à tous</strong> : Que vous soyez un streamer célèbre ou nouveau sur la plateforme, vous avez la possibilité de participer. Les frais de participation sont fixés à <strong>150€</strong>.
                        </li>
                        <li>
                            <strong>Conditions pour les streamers en Tunisie</strong> : Les candidats tunisiens doivent avoir déjà réalisé des lives sur TikTok avec un minimum de gains pour se qualifier.
                        </li>
                        <li>
                            <strong>Respect des règles</strong> : Le respect des autres participants est primordial. Les comportements insultants, grossiers ou irrespectueux entraîneront une disqualification immédiate, même en dehors des matchs.
                        </li>
                        <li>
                            <strong>Pas de cadeaux entre participants</strong> : Les participants ne doivent pas s'offrir de cadeaux entre eux pour garantir une compétition équitable.
                        </li>
                        <li>
                            <strong>Interdiction de live solo pendant les matchs</strong> : Pendant les matchs du tournoi, il est interdit de diffuser des lives personnels.
                        </li>
                    </ul>
                </Typography>
            </section>

            {/* Section sur la structure du tournoi */}
            <section className="tournament-structure-section">
                <Typography variant="h4" className="section-title">
                    Structure du Tournoi
                </Typography>
                <Typography variant="body1" className="home-text">
                    Le tournoi comprendra un nombre de joueurs à déterminer, divisés en anciens (célèbres et bien soutenus) et nouveaux (ceux qui ont moins d'expérience et moins de visibilité). Voici comment se déroulera la compétition :
                </Typography>
                <Grid container spacing={2} className="structure-grid">
                    <Grid item xs={12} md={6}>
                        <Paper className="tournament-step">
                            <Typography variant="h6" className="step-title">
                                Premier Tour
                            </Typography>
                            <Typography variant="body1" className="step-description">
                                Les anciens affrontent les anciens, et les nouveaux affrontent les nouveaux. Cela permet aux deux groupes de progresser de manière équitable.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className="tournament-step">
                            <Typography variant="h6" className="step-title">
                                Quarts de Finale
                            </Typography>
                            <Typography variant="body1" className="step-description">
                                À partir des quarts de finale, les équipes sont mélangées. Chaque match regroupera un ancien et un nouveau contre une autre équipe mixte.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </section>

            {/* Section des prix */}
            <section className="prize-section">
                <Typography variant="h4" className="section-title">
                    Récompenses
                </Typography>
                <Typography variant="body1" className="home-text">
                    Le montant total des frais de participation s'élève à <strong>150€ x nombre de joueurs inscrits</strong>, qui sera réparti comme suit :
                    <ul>
                        <li><strong>Les trois premiers gagnants</strong> se partageront la majeure partie de la somme.</li>
                        <li><strong>10%</strong> des gains seront attribués au meilleur monteur vidéo pour la création des meilleurs moments du tournoi.</li>
                    </ul>
                </Typography>
            </section>

            {/* Section finale : Esprit du Tournoi */}
            <section className="spirit-section">
                <Typography variant="h4" className="section-title">
                    Esprit du Tournoi
                </Typography>
                <Typography variant="body1" className="home-text">
                    Le but ultime de ce tournoi est de nettoyer l'image de TikTok en Tunisie et de créer une ambiance compétitive mais respectueuse. Nous encourageons la solidarité entre les anciens et les nouveaux participants, et nous souhaitons promouvoir une utilisation créative et responsable de la plateforme.
                </Typography>
                <Typography variant="body1" className="home-text">
                    <strong>Souvenez-vous</strong> : TikTok est une plateforme de divertissement. Ne l'oubliez pas et ne négligez pas votre vie personnelle et vos objectifs à long terme. Ensemble, nous pouvons créer un environnement plus sain, respectueux et créatif pour tous.
                </Typography>
            </section>
        </div>
    );
};

export default Home;
