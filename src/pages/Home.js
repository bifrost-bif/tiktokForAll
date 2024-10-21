import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import './home.css';

const Home = () => {
    // Load the TikTok embed script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="group-stage-container">
            {/* Section for tournament information */}
            <Typography variant="h5">
                Sélectionnez une phase pour voir les groupes ou les éliminations directes.
            </Typography>

            {/* TikTok Embed */}
            <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@bif.bif"
                data-unique-id="bif.bif"
                data-embed-type="creator"
                style={{ maxWidth: '780px', minWidth: '288px' }} // Corrected style prop
            >
                <section>
                    <a target="_blank" href="https://www.tiktok.com/@bif.bif?refer=creator_embed">
                        @bif.bif
                    </a>
                </section>
            </blockquote>
        </div>
    );
};

export default Home;
