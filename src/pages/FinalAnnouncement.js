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
        <div className="final-announcement-page">
            <div className="final-announcement-container">
                <h1 className="final-title">Grande Finale</h1>
                <h2 className="final-date">Vendredi 29 NOV</h2>
                <h3 className="match-time">20h30</h3>

                <div className="players">
                    <div className="player">
                        <img
                            src="/images/profiles/thalaftw.png"
                            alt="Player 1"
                            className="player-photo"
                        />
                    </div>

                    <div className="vs">

                    </div>

                    <div className="player">
                        <img
                            src="/images/profiles/souhaiel_junkremoval03.png"
                            alt="Player 2"
                            className="player-photo"
                        />
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
