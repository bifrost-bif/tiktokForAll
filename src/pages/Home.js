import React, { useEffect } from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import './Home.css';

const Home = () => {

    return (
        <div className="home-container">
            {/* Section d'introduction */}
            <section className="intro-section">
                <Typography variant="h3" className="home-title" gutterBottom>
                    Bienvenue au Tournoi TIKTOK FOR ALL
                </Typography>
                <Typography variant="body1" className="home-text">
                    Le tournoi TIKTOK FOR ALL propose une compétition conviviale et inclusive en Tunisie pour les créateurs de TikTok, qu'ils soient débutants ou expérimentés. Cette initiative vise à rassembler la communauté TikTok autour de la créativité et du respect, en favorisant des interactions positives et un partage ouvert de talents.
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
                            <strong>Participation ouverte à tous</strong> : Ce tournoi est destiné à tous les créateurs, quelle que soit leur expérience ou leur notoriété sur la plateforme.
                        </li>
                        <li>
                            <strong>Conditions d’éligibilité pour les créateurs en Tunisie</strong> : Pour participer, les créateurs doivent être actifs sur TikTok et avoir une interaction avec leur audience.
                        </li>
                        <li>
                            <strong>Respect et conduite appropriée</strong> : Le respect entre participants est essentiel. Tout comportement irrespectueux, même en dehors des sessions officielles, pourra entraîner une exclusion immédiate.
                        </li>
                        <li>
                            <strong>Transparence des dons et interdiction des dons directs</strong> : Afin de garantir une compétition juste, les dons entre participants sont interdits pendant le tournoi, et tout don de spectateur doit provenir de comptes identifiables.
                        </li>
                        <li>
                            <strong>Pas de diffusions personnelles pendant le tournoi</strong> : Pour se concentrer sur les matchs, les diffusions en solo pendant le tournoi sont interdites.
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
                    Le tournoi est conçu pour offrir une progression équitable, et pour encourager les créateurs à partager leur savoir-faire dans un cadre de compétition bienveillant et transparent.
                </Typography>
                <Grid container spacing={2} className="structure-grid">
                    <Grid item xs={12} md={6}>
                        <Paper className="tournament-step">
                            <Typography variant="h6" className="step-title">
                                Phase de groupes
                            </Typography>
                            <Typography variant="body1" className="step-description">
                                Les créateurs sont d’abord répartis en groupes, entre anciens et nouveaux, pour des débuts de compétition équilibrés.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className="tournament-step">
                            <Typography variant="h6" className="step-title">
                                Quarts de finale et phases avancées
                            </Typography>
                            <Typography variant="body1" className="step-description">
                                Les équipes sont ensuite mélangées pour favoriser l’esprit de solidarité et le partage d’expériences entre les participants.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </section>

            {/* Section des récompenses */}
            <section className="prize-section">
                <Typography variant="h4" className="section-title">
                    Récompenses
                </Typography>
                <Typography variant="body1" className="home-text">
                    Les créateurs qui se démarqueront par leurs performances et leur créativité recevront des récompenses, et une mention spéciale sera attribuée au créateur ayant capturé les meilleurs moments du tournoi en vidéo.
                </Typography>
            </section>

            {/* Section finale : Esprit du Tournoi */}
            <section className="spirit-section">
                <Typography variant="h4" className="section-title">
                    Esprit et Engagement du Tournoi
                </Typography>
                <Typography variant="body1" className="home-text">
                    Le tournoi valorise la créativité et le respect, en favorisant un environnement sain pour tous. Les créateurs sont encouragés à participer activement tout en respectant les lois en vigueur et en contribuant à une communauté TikTok positive en Tunisie.
                </Typography>
                <Typography variant="body1" className="home-text">
                    <strong>Note</strong> : Les informations personnelles des participants et des donateurs seront traitées dans le strict respect de la confidentialité, conformément aux normes légales en vigueur, notamment en matière de protection des données.
                </Typography>
            </section>
        </div>
    );
};

export default Home;
