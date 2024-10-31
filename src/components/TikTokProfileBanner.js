import React, { useEffect, useState } from 'react';
import './TikTokProfileBanner.css';

const TikTokProfileBanner = ({ profile }) => {
    // Date cible pour le compte à rebours (1er novembre à 20h)
    const targetDate = new Date('2024-11-01T20:00:00');

    // État pour stocker le temps restant
    const [timeRemaining, setTimeRemaining] = useState('');
    const [isCountdownFinished, setIsCountdownFinished] = useState(false);

    // Fonction de calcul du temps restant
    const calculateTimeRemaining = () => {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            setTimeRemaining(`${days} jour ${hours}h ${minutes}m ${seconds}s`);
        } else {
            setTimeRemaining("Regardez le live !");
            setIsCountdownFinished(true); // Indiquer que le temps est écoulé
        }
    };

    // Utilisation de useEffect pour démarrer le compte à rebours
    useEffect(() => {
        calculateTimeRemaining(); // Calcul initial
        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    return (
        <div className="tiktok-banner">
            <div className="profile-image-container">
                <img src="./images/profiles/bacem.png" alt={`${profile}'s profile`} className="profile-image" />
            </div>
            <div className="profile-info">
                {/* Affiche le message uniquement si le compte à rebours n'est pas terminé */}
                {!isCountdownFinished && (
                    <div className="countdown-timer">
                        Le live commence dans
                    </div>
                )}
                <a
                    href={`https://www.tiktok.com/@${profile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="follow-button"
                >
                    {timeRemaining}
                </a>
            </div>
        </div>
    );
};

export default TikTokProfileBanner;
