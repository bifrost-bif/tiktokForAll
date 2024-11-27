import React from 'react';
import './FinalAnnouncement.css';

const FinalAnnouncement = () => {
    const targetDate = new Date('2024-11-29T20:30:00');
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft(targetDate));

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    function calculateTimeLeft(targetDate) {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <div className="final-announcement">
            <div className="announcement-content">
                <h1 className="final-title">🏆 Grande Finale 🏆</h1>
                <h2 className="final-date">Vendredi 29 Novembre 2024</h2>
                <div className="players">
                    <div className="player">
                        <img src="/images/profiles/thalaftw.png" alt="Thala" className="player-photo" />
                        <p className="player-name">Thala</p>
                    </div>
                    <div className="vs">
                        <img src="/images/versus.png" alt="Versus" />
                    </div>
                    <div className="player">
                        <img src="/images/profiles/souhaiel_junkremoval03.png" alt="Souhaiel" className="player-photo" />
                        <p className="player-name">Souhaiel</p>
                    </div>
                </div>
                {timeLeft ? (
                    <div className="countdown">
                        <div className="countdown-item">{timeLeft.days}j</div>
                        <div className="countdown-item">{timeLeft.hours}h</div>
                        <div className="countdown-item">{timeLeft.minutes}m</div>
                        <div className="countdown-item seconds">{timeLeft.seconds}s</div>
                    </div>
                ) : (
                    <div className="final-message">It's Match Time!</div>
                )}
            </div>
        </div>
    );
};

export default FinalAnnouncement;
