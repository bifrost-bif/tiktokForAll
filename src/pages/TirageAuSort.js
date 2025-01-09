import React, { useState } from 'react';
import './TirageAuSort.css';

const initialPlayersA = [
  { id: 1, name: 'Ala Ltaief', photo: '/images/profiles/ala_ltaief.png' },
  { id: 2, name: 'Khal', photo: '/images/profiles/5al.png' },
  { id: 3, name: 'Diablo', photo: '/images/profiles/diablo.png' },
  { id: 4, name: 'Nims', photo: '/images/profiles/nims.png' },
];

const initialPlayersB = [
  { id: 5, name: 'Khal', photo: '/images/profiles/5al.png' },
  { id: 6, name: 'Ala Ltaief', photo: '/images/profiles/ala_ltaief.png' },
  { id: 7, name: 'Nims', photo: '/images/profiles/nims.png' },
  { id: 8, name: 'Diablo', photo: '/images/profiles/diablo.png' },
];

const TirageAuSort = () => {
  const [playersA, setPlayersA] = useState(initialPlayersA);
  const [playersB, setPlayersB] = useState(initialPlayersB);

  const [selectedPlayerA, setSelectedPlayerA] = useState(null);
  const [isSpinningA, setIsSpinningA] = useState(false);
  const [rotationA, setRotationA] = useState(0);

  const [selectedPlayerB, setSelectedPlayerB] = useState(null);
  const [isSpinningB, setIsSpinningB] = useState(false);
  const [rotationB, setRotationB] = useState(0);

  // IDs 
  //const playerA = 2; // groupe A
  //const playerB = 7; // groupe B

  const playerA = 0; // groupe A
  const playerB = 0; // groupe B

  //const playerA = 0; // groupe A
  //const playerB = 0; // groupe B

  //const playerA = 0; // groupe A
  //const playerB = 0; // groupe B

  // mode aléatoire
  const [useFixedResult, setUseFixedResult] = useState(false);

  const handleDraw = (group) => {
    if (group === 'A' && isSpinningA) return;
    if (group === 'B' && isSpinningB) return;

    if (group === 'A' && playersA.length > 0) {
      setIsSpinningA(true);
      setSelectedPlayerA(null);

      // Utilisation d'un ID fixe ou aléatoire
      const selectedId = useFixedResult
        ? playerA
        : playersA[Math.floor(Math.random() * playersA.length)].id;

      const totalPlayers = playersA.length;
      const playerIndex = playersA.findIndex(player => player.id === selectedId);
      const anglePerPlayer = 360 / totalPlayers;
      const targetRotation = rotationA + 360 * 5 - (playerIndex * anglePerPlayer) + anglePerPlayer / 2;

      setRotationA(targetRotation);

      setTimeout(() => {
        setSelectedPlayerA(playersA[playerIndex]);
        setPlayersA(playersA.filter(player => player.id !== selectedId)); // Supprime le joueur sélectionné
        setIsSpinningA(false);
      }, 5000);
    }

    if (group === 'B' && playersB.length > 0) {
      setIsSpinningB(true);
      setSelectedPlayerB(null);

      // Utilisation d'un ID fixe ou aléatoire
      const selectedId = useFixedResult
        ? playerB
        : playersB[Math.floor(Math.random() * playersB.length)].id;

      const totalPlayers = playersB.length;
      const playerIndex = playersB.findIndex(player => player.id === selectedId);
      const anglePerPlayer = 360 / totalPlayers;
      const targetRotation = rotationB + 360 * 5 - (playerIndex * anglePerPlayer) + anglePerPlayer / 2;

      setRotationB(targetRotation);

      setTimeout(() => {
        setSelectedPlayerB(playersB[playerIndex]);
        setPlayersB(playersB.filter(player => player.id !== selectedId)); // Supprime le joueur sélectionné
        setIsSpinningB(false);
      }, 5000);
    }
  };

  const calculatePosition = (index, total) => {
    const angle = (360 / total) * index;
    return {
      transform: `rotate(${angle}deg) translate(0, -150px) rotate(-${angle}deg)`,
    };
  };

  return (
    <div className="draw-container">
      <div className="wheels-container">
        {/* Groupe A */}
        <div className="circle-container">
          <h2>Tirage au Sort - Groupe A</h2><br/>
          <div
            className="wheel"
            style={{
              transform: `rotate(${rotationA}deg)`,
              transition: isSpinningA ? 'transform 5s cubic-bezier(0.17, 0.67, 0.83, 0.67)' : 'none',
            }}
          >
            {playersA.map((player, index) => (
              <div
                key={player.id}
                className="wheel-item"
                style={calculatePosition(index, playersA.length)}
              >
                <img src={player.photo} alt={player.name} />
                <span>{player.name}</span>
                {!isSpinningA && selectedPlayerA && player.id === selectedPlayerA.id && (
                  <div className="arrow-indicator"></div>
                )}
              </div>
            ))}
          </div><br/>
          <button onClick={() => handleDraw('A')} disabled={isSpinningA || playersA.length === 0}>
            {playersA.length === 0
              ? 'Aucun joueur restant'
              : isSpinningA
              ? 'Tirage en cours...'
              : 'Lancer le tirage - Groupe A'}
          </button>
          {selectedPlayerA && (
            <div className="result">
              <h3>Résultat Groupe A:</h3>
              <img src={selectedPlayerA.photo} alt={selectedPlayerA.name} />
              <p>{selectedPlayerA.name}</p>
            </div>
          )}
        </div>

        {/* Groupe B */}
        <br/><div className="circle-container">
          <h2>Tirage au Sort - Groupe B</h2><br/>
          <div
            className="wheel"
            style={{
              transform: `rotate(${rotationB}deg)`,
              transition: isSpinningB ? 'transform 5s cubic-bezier(0.17, 0.67, 0.83, 0.67)' : 'none',
            }}
          >
            {playersB.map((player, index) => (
              <div
                key={player.id}
                className="wheel-item"
                style={calculatePosition(index, playersB.length)}
              >
                <img src={player.photo} alt={player.name} />
                <span>{player.name}</span>
                {!isSpinningB && selectedPlayerB && player.id === selectedPlayerB.id && (
                  <div className="arrow-indicator"></div>
                )}
              </div>
            ))}
          </div><br/><br/>
          <button onClick={() => handleDraw('B')} disabled={isSpinningB || playersB.length === 0}>
            {playersB.length === 0
              ? 'Aucun joueur restant'
              : isSpinningB
              ? 'Tirage en cours...'
              : 'Lancer le tirage - Groupe B'}
          </button>
          {selectedPlayerB && (
            <div className="result">
              <h3>Résultat Groupe B:</h3>
              <img src={selectedPlayerB.photo} alt={selectedPlayerB.name} />
              <p>{selectedPlayerB.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TirageAuSort;
