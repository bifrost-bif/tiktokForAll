import React, { useEffect } from 'react';

const TikTokEmbed = ({ profile }) => {
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
            cite={`https://www.tiktok.com/@${profile}`}
            data-unique-id={profile}
            data-embed-type="creator"
            style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
        >
            <section>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.tiktok.com/@${profile}?refer=creator_embed`}
                    style={{ color: '#0d47a1', textDecoration: 'underline', fontWeight: 'bold' }}
                >
                    @{profile}
                </a>
            </section>
        </blockquote>
    );
};

export default TikTokEmbed;
