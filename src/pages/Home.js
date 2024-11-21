import React, { useState } from 'react';
import { Typography } from '@mui/material';
import TikTokEmbed from '../components/TikTokEmbed';
import './Home.css';

const Home = () => {
    const [isContentMinimized, setIsContentMinimized] = useState(true);

    // Toggle function to show/hide full content
    const toggleContent = () => setIsContentMinimized(!isContentMinimized);

    const today = new Date().toLocaleDateString();

    return (
        <div className="home-container">
            {/* Ajout de l'iframe directement dans le JSX */}
            <section className="vote-section">
                <iframe 
                    src="https://tally.so/embed/nr0VrN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    min-height="50vh"
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0" 
                    title="Vote"
                    style={{
                        height: '50vh', 
                        overflow: 'hidden', 
                        scrollBehavior: 'none',
                        scrollbarWidth: 'none',
                        display: 'flex'
                    }}
                ></iframe>
            </section>

            {/* IMAGE TIRAGE AU SORT 
            <section className="tirage-image-section">
                <h2 className="tirage-title">
                    <span className="highlight">Tirage au sort<br /></span>
                    <span className="highlightDes">En live avec Bacem</span>
                </h2>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/tiktokforall_tirage.webp`} 
                    alt="Tirage au Sort" 
                    className="tirage-image"
                />
            </section>*/}


            {/* Section de la vidéo gagnante - À la une */}
            <section className="featured-video-section">
                <Typography variant="h4" className="featured-title">
                    <span className="highlight">A LA UNE <br /></span> 
                    <span className="highlightDes">Vidéo gagnante - Journée 9</span>
                </Typography>
                <TikTokEmbed videoId="7434713514431761695" />
            </section>
            <br />
        </div>
    );
};

export default Home;
