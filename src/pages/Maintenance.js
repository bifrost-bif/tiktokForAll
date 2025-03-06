import React, { useEffect } from 'react';

import './Maintenance.css';

const Maintenance = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "https://www.tiktok.com";
        }, 5000); // Redirection après 1 seconde
    }, []);

    return (
        <div className="maintenance-container">
            <h1>🚧 Site en maintenance 🚧</h1>
            <p>Vous serez redirigé vers <a href="https://www.tiktok.com">TikTok</a> dans quelques secondes...</p>
        </div>
    );
};

export default Maintenance;
