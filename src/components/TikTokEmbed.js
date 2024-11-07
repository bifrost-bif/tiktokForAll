import React, { useEffect } from 'react';

const TikTokEmbed = ({ videoId }) => {
    useEffect(() => {
        // Créer un script pour charger le widget TikTok
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Nettoyage du script si le composant est démonté
        return () => {
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <blockquote
            className="tiktok-embed"
            cite={`https://www.tiktok.com/@schba31w/video/${videoId}`}
            data-video-id={videoId}
            style={{ maxWidth: '605px', minWidth: '325px', margin: '0 auto' }}
        >
            <section></section>
        </blockquote>
    );
};

export default TikTokEmbed;
