// Home.js
import React, { useState } from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import TikTokProfileBanner from '../components/TikTokProfileBanner'; // Import TikTok embed component
import './Home.css';

const Home = () => {
    // Define the state for whether the drawing results are hidden
    const [isResultsHidden] = useState(true);

    return (
        <div className="home-container">
            {/* Introduction Section */}
            <section className="intro-section">
                <Typography variant="h3" className="home-title" gutterBottom>
                    Bienvenue au Tournoi TIKTOK FOR ALL
                </Typography>
            </section>
            <br />

            {/* "Tirage au Sort" Banner Section */}
            {isResultsHidden && (
                <section className="draw-banner">
                    <Box className="info-message suspense-message" sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#e3f2fd',
                        borderRadius: '8px',
                        padding: '15px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        maxWidth: '400px',
                        margin: '20px auto',
                    }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                            Tirage au sort le 1er NOV, 20h
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1rem', marginBottom: '10px', color: '#1976D2' }}>
                            Live sur TikTok avec <strong>BACEM</strong>.
                        </Typography>
                        {/* Embed TikTok Live using TikTokProfileBanner component */}
                        <TikTokProfileBanner profile="bacem1tun" />
                    </Box>
                </section>
            )}
            <br />
            <Typography variant="body1" className="home-text">
                Le tournoi TIKTOK FOR ALL propose une compétition conviviale et inclusive en Tunisie pour les créateurs de TikTok, qu'ils soient débutants ou expérimentés. Cette initiative vise à rassembler la communauté TikTok autour de la créativité et du respect, en favorisant des interactions positives et un partage ouvert de talents.
            </Typography>
            
            {/* Rules Section */}
            <section className="rules-section">
                <Typography variant="h4" className="section-title">
                    Règles et Conditions de Participation
                </Typography>
                <ul className="rules-list">
                    <li><strong>Participation ouverte à tous :</strong> Ce tournoi est destiné à tous les créateurs, quelle que soit leur expérience ou leur notoriété sur la plateforme.</li>
                    <li><strong>Conditions d’éligibilité :</strong> Les créateurs doivent être actifs sur TikTok et avoir une interaction régulière avec leur audience.</li>
                    <li><strong>Respect et conduite appropriée :</strong> Le respect entre participants est essentiel. Tout comportement irrespectueux entraînera une exclusion immédiate.</li>
                    <li><strong>Transparence des dons :</strong> Les dons entre participants sont interdits pendant le tournoi, et tout don de spectateur doit provenir de comptes identifiables.</li>
                    <li><strong>Pas de diffusions personnelles :</strong> Pour se concentrer sur les matchs, les diffusions en solo pendant le tournoi sont interdites.</li>
                </ul>
            </section>

            {/* Tournament Structure Section */}
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
                            <Typography variant="h6" className="step-title">Phase de groupes</Typography>
                            <Typography variant="body1" className="step-description">
                                Les créateurs sont répartis en groupes pour des débuts de compétition équilibrés.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className="tournament-step">
                            <Typography variant="h6" className="step-title">Phases finales</Typography>
                            <Typography variant="body1" className="step-description">
                                Les meilleures équipes avancent aux quarts de finale, demi-finales, et finales.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
            <br />

            {/* Prize Section */}
            <section className="prize-section">
                <Typography variant="h4" className="section-title">Récompenses</Typography>
                <Typography variant="body1" className="home-text">
                    Les créateurs se démarquant par leur performance et créativité recevront des prix. Une mention spéciale sera attribuée pour la capture des meilleurs moments du tournoi en vidéo.
                </Typography>
            </section>

            {/* Spirit Section */}
            <section className="spirit-section">
                <Typography variant="h4" className="section-title">Esprit et Engagement du Tournoi</Typography>
                <Typography variant="body1" className="home-text">
                    Le tournoi valorise la créativité et le respect, en favorisant un environnement sain et positif pour tous. Les créateurs sont encouragés à participer activement tout en respectant les lois en vigueur et en contribuant à une communauté TikTok engagée en Tunisie.
                </Typography>
            </section>
        </div>
    );
};

export default Home;
