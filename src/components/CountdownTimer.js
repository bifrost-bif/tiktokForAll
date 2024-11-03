import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer); // Nettoie l'intervalle quand le composant est démonté
    }, [targetDate]);

    if (timeLeft.total <= 0) {
        return <div className="countdown-complete">C'est l'heure du match !</div>;
    }

    return (
        <div className="countdown-timer">
            <span>{timeLeft.days}j </span>
            <span>{timeLeft.hours}h </span>
            <span>{timeLeft.minutes}m </span>
            <span>{timeLeft.seconds}s</span>
        </div>
    );
};

const calculateTimeLeft = (targetDate) => {
    const difference = new Date(targetDate) - new Date();
    return {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export default CountdownTimer;
