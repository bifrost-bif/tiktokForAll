import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import "./WinnersPodium.css";

const winners = [
    {
        name: "SOUHAIEL",
        rank: 1,
        score: 1250,
        image: "/images/profiles/souhaiel_junkremoval03.png",
    },
    {
        name: "THALA",
        rank: 2,
        score: 1100,
        image: "/images/profiles/thalaftw.png",
    },
    {
        name: "CHARCHABIL",
        rank: 3,
        score: 950,
        image: "/images/profiles/garga044.png",
    },
];

// Définir les emojis pour chaque rang
const rankEmojis = {
    1: "🏆",
    2: "🥈",
    3: "🥉",
};

const WinnersPodium = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowMessage(true), 2000); // Affiche après 3 secondes
        return () => clearTimeout(timer); // Nettoie le timer
    }, []);

    return (
        <div className="winners-podium">
            <Particles
                id="particles"
                options={{
                    background: { color: { value: "#000" } },
                    fpsLimit: 60,
                    particles: {
                        color: { value: ["#ff4500", "#ff8c00", "#ffa500"] },
                        move: { enable: true, direction: "top", speed: 2 },
                        number: { value: 100 },
                        opacity: { value: 0.8 },
                        size: { value: { min: 1, max: 4 } },
                    },
                }}
            />
            <h1 className="winners-podium__title">🎉 Les Champions 🎉</h1>
            <div className="winners-podium__container">
                {winners.map((winner) => (
                    <div
                        key={winner.rank}
                        className={`winners-podium__place winners-podium__place--${winner.rank}`}
                    >
                        <div className="winners-podium__rank">
                            {rankEmojis[winner.rank]}
                        </div>
                        <img
                            src={winner.image}
                            alt={winner.name}
                            className="winners-podium__image"
                        />
                        <h2 className="winners-podium__name">{winner.name}</h2>
                    </div>
                ))}
            </div>

            {showMessage && (
                <div className="winners-podium__message">
                    <p>
                        Chers participants, spectateurs et partenaires,
                        <br />
                        Nos félicitations au grand champion, <strong>Souhaiel</strong>, suivi
                        de <strong>Thala</strong>, deuxième, et <strong>Charchabil</strong>, troisième.
                        Vous avez tous offert des performances mémorables !
                    </p>
                    <p>
                        Merci aux participants pour leur respect, aux donateurs et sponsors pour leur soutien, et aux spectateurs pour leur enthousiasme.
                    </p>
                    <p>
                        Nous espérons que cet événement a atteint son objectif :
                        offrir une scène aux nouveaux talents et promouvoir des
                        valeurs de respect et d'intégrité sportive.
                    </p>
                    <p>Une future édition
                        pourrait bien être l’occasion pour d’autres compétiteurs de se
                        révéler et de briller...
                    </p>
                </div>
            )}
        </div>
    );
};

export default WinnersPodium;
