import React, { useState } from 'react';
import { Typography } from '@mui/material';
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
                {/* Ajout de l'iframe directement dans le JSX */}
                <section className="vote-section">

                <iframe 
                    src="https://tally.so/embed/nr0VrN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="200" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0" 
                    title="Vote"
                ></iframe>
            </section>
            {/* Section de la vidéo gagnante - À la une */}
            <section className="featured-video-section">
                <Typography variant="h4" className="featured-title">
                    <span className="highlight">A LA UNE <br /></span> 
                    <span className="highlightDes">Vidéo gagnante - Journée 2</span>
                </Typography>
                <TikTokEmbed videoId="7438325709644549431" />
            </section>
            <br />
            

        </div>
    );
};

export default Home;
