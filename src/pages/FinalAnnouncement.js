import React, { useState, useEffect } from 'react';
import { X, Flame, Award } from 'lucide-react';

const FinalAnnouncement = () => {
    const targetDate = new Date('2024-11-29T20:30:00');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger loading animation
        const loadTimer = setTimeout(() => setIsLoaded(true), 500);

        // Countdown timer
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => {
            clearTimeout(loadTimer);
            clearInterval(timer);
        };
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
        <div className={`final-announcement-page ${isLoaded ? 'loaded' : ''}`}>
            <div className="final-announcement-container">
                {/* Flame Background Effects */}
                <div className="flame-overlay flame-left"></div>
                <div className="flame-overlay flame-right"></div>

                {/* Suspense Particles */}
                <div className="suspense-particles">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Dramatic Title */}
                <div className="dramatic-header">
                    <Flame className="header-flame left-flame" />
                    <h1 className="final-title">GRANDE FINALE</h1>
                    <Flame className="header-flame right-flame" />
                </div>

                <h2 className="final-date">Vendredi 29 NOV</h2>
                <h3 className="match-time">20h30</h3>

                {/* Players Section with Enhanced Animations */}
                <div className="players">
                    <div className="player player-left">
                        <div className="player-photo-wrapper">
                            <img
                                src="/images/profiles/thalaftw.png"
                                alt="Player 1"
                                className="player-photo"
                            />
                            <div className="player-hover-overlay">
                                <Award className="player-icon" />
                            </div>
                        </div>
                        <div className="player-name">THALA FTW</div>
                    </div>

                    <div className="vs">
                        <X className="vs-icon" />
                    </div>

                    <div className="player player-right">
                        <div className="player-photo-wrapper">
                            <img
                                src="/images/profiles/souhaiel_junkremoval03.png"
                                alt="Player 2"
                                className="player-photo"
                            />
                            <div className="player-hover-overlay">
                                <Award className="player-icon" />
                            </div>
                        </div>
                        <div className="player-name">SOUHAIEL</div>
                    </div>
                </div>

                {/* Countdown with Dramatic Effects */}
                {timeLeft ? (
                    <div className="countdown">
                        <div className="countdown-item days">{timeLeft.days}j</div>
                        <div className="countdown-item hours">{timeLeft.hours}h</div>
                        <div className="countdown-item minutes">{timeLeft.minutes}m</div>
                        <div className="countdown-item seconds">{timeLeft.seconds}s</div>
                    </div>
                ) : (
                    <div className="final-message">MATCH TIME!</div>
                )}
            </div>
        </div>
    );
};

export default FinalAnnouncement;