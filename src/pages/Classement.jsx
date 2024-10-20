import './styles.css';

const players = [
    { id: 1, name: "joueur 1", points: 10 },
    { id: 2, name: "joueur 2", points: 8 },
    { id: 3, name: "joueur 3", points: 6 },
    { id: 4, name: "joueur 4", points: 4 },  // Dernier joueur
    { id: 5, name: "joueur 5", points: 2 },  // Avant-dernier joueur
];

return (
    <div className="classement">
        {players.map((player, index) => (
            <div
                key={player.id}
                className={`circle ${index >= players.length - 2 ? 'last-place' : ''}`}
            >
                {player.id}
            </div>
        ))}
    </div>
);
