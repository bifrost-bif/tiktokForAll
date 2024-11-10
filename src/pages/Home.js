import React, { useState } from 'react';
import { Typography, Grid, Paper, Box, Button } from '@mui/material';
import TikTokEmbed from '../components/TikTokEmbed';
import './Home.css';

const Home = () => {
    const [isContentMinimized, setIsContentMinimized] = useState(true);

    // Toggle function to show/hide full content
    const toggleContent = () => setIsContentMinimized(!isContentMinimized);

    // Date du jour pour afficher la date de la vidéo gagnante
    const today = new Date().toLocaleDateString();

    return (
        <div className="home-container">
            {/* Section de la vidéo gagnante - À la une */}
            <section className="featured-video-section">
                <Typography variant="h4" className="featured-title">
                    <span className="highlight">A LA UNE <br/></span> <span className="highlightDes">Vidéo gagnante - Journée 2</span>
                </Typography>
                <TikTokEmbed videoId="7433744840464043295" />
            </section>
            <br />
        </div>
    );
};

export default Home;
