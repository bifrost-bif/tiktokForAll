// Home.js
import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
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
            </section><br/>

            {/* Section sur les règles et conditions */}
            <section className="rules-section">
                <Typography variant="h4" className="section-title">
                    Règles et Conditions de Participation
                </Typography>
                <ul className="rules-list">
                    <li>
                        <strong>Participation ouverte à tous :</strong> Ce tournoi est destiné à tous les créateurs, quelle que soit leur expérience ou leur notoriété sur la plateforme.
                    </li>
                    <li>
                        <strong>Conditions d’éligibilité :</strong> Les créateurs doivent être actifs sur TikTok et avoir une interaction régulière avec leur audience.
                    </li>
                    <li>
                        <strong>Respect et conduite appropriée :</strong> Le respect entre participants est essentiel. Tout comportement irrespectueux entraînera une exclusion immédiate.
                    </li>
                    <li>
                        <strong>Transparence des dons :</strong> Les dons entre participants sont interdits pendant le tournoi, et tout don de spectateur doit provenir de comptes identifiables.
                    </li>
                    <li>
                        <strong>Pas de diffusions personnelles :</strong> Pour se concentrer sur les matchs, les diffusions en solo pendant le tournoi sont interdites.
                    </li>
                </ul>
            </section>

            {/* Section sur la structure du tournoi */}
            <section className="tournament-structure-section">
                <Typography variant="h4" className="section-title">
                    Structure du Tournoi
                </Typography>
                <Typography variant="body1" className="home-text">
                    Le tournoi est conçu pour offrir une progression équitable, et pour encourager les créateurs à partager leur savoir-faire dans un cadre compétitif et bienveillant.
                </Typography>
                <Grid container spacing={4} className="structure-grid">
                    <Grid item xs={12} md={6}>
                        <Paper className="tournament-step">
                            <Typography variant="h6" className="step-title">
                                Phase de groupes
                            </Typography>
                            <Typography variant="body1" className="step-description">
                                Les créateurs sont répartis en groupes pour des débuts de compétition équilibrés.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className="tournament-step">
                            <Typography variant="h6" className="step-title">
                                Phases finales
                            </Typography>
                            <Typography variant="body1" className="step-description">
                                Les meilleures équipes avancent aux quarts de finale, demi-finales, et finales.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
            <br/>
            {/* Section des récompenses */}
            <section className="prize-section">
                <Typography variant="h4" className="section-title">
                    Récompenses
                </Typography>
                <Typography variant="body1" className="home-text">
                    Les créateurs se démarquant par leur performance et créativité recevront des prix. Une mention spéciale sera attribuée pour la capture des meilleurs moments du tournoi en vidéo.
                </Typography>
            </section>

            {/* Section finale : Esprit du Tournoi */}
            <section className="spirit-section">
                <Typography variant="h4" className="section-title">
                    Esprit et Engagement du Tournoi
                </Typography>
                <Typography variant="body1" className="home-text">
                    Le tournoi valorise la créativité et le respect, en favorisant un environnement sain et positif pour tous. Les créateurs sont encouragés à participer activement tout en respectant les lois en vigueur et en contribuant à une communauté TikTok engagée en Tunisie.
                </Typography>
            </section>
        </div>
    );
};

export default Home;
