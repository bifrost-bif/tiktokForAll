import React, { useState } from 'react';
import './TirageAuSort.css';

const playersA = [
  { id: 1, name: 'Khayri', photo: '/images/profiles/khayri_89.png' },
  { id: 2, name: 'Khal', photo: '/images/profiles/5al.png' },
  { id: 3, name: 'Souhaiel', photo: '/images/profiles/souhaiel_junkremoval03.png' },
  { id: 4, name: 'Thala', photo: '/images/profiles/thalaftw.png' },
];

const playersB = [
  { id: 5, name: 'Hend', photo: '/images/profiles/hendab7.png' },
  { id: 6, name: 'Chrchbil', photo: '/images/profiles/garga044.png' },
  { id: 7, name: 'Dali', photo: '/images/profiles/dali_elghoul.png' },
  { id: 8, name: 'Amira', photo: '/images/profiles/amiraomriii.png' },
];

const TirageAuSort = () => {
  const [selectedPlayerA, setSelectedPlayerA] = useState(null);
  const [isSpinningA, setIsSpinningA] = useState(false);
  const [rotationA, setRotationA] = useState(0);

  const [selectedPlayerB, setSelectedPlayerB] = useState(null);
  const [isSpinningB, setIsSpinningB] = useState(false);
  const [rotationB, setRotationB] = useState(0);

  const fixedResultA = Math.floor(Math.random() * 4) + 1;; // ID du joueur sélectionné pour playersA
  const fixedResultB = Math.floor(Math.random() * 4) + 5;; // ID du joueur sélectionné pour playersB

  const handleDraw = (group) => {
    if (group === 'A' && isSpinningA) return;
    if (group === 'B' && isSpinningB) return;

    if (group === 'A') {
      setIsSpinningA(true);
      setSelectedPlayerA(null);
      const totalPlayers = playersA.length;
      const anglePerPlayer = 360 / totalPlayers;
      const playerIndex = playersA.findIndex(player => player.id === fixedResultA);
      const targetRotation = rotationA + 360 * 5 - (playerIndex * anglePerPlayer) + anglePerPlayer / 2;

      setRotationA(targetRotation);

      setTimeout(() => {
        setSelectedPlayerA(playersA[playerIndex]);
        setIsSpinningA(false);
      }, 5000);
    }

    if (group === 'B') {
      setIsSpinningB(true);
      setSelectedPlayerB(null);
      const totalPlayers = playersB.length;
      const anglePerPlayer = 360 / totalPlayers;
      const playerIndex = playersB.findIndex(player => player.id === fixedResultB);
      const targetRotation = rotationB + 360 * 5 - (playerIndex * anglePerPlayer) + anglePerPlayer / 2;

      setRotationB(targetRotation);

      setTimeout(() => {
        setSelectedPlayerB(playersB[playerIndex]);
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
          </div><br/><br/>
          <button onClick={() => handleDraw('A')} disabled={isSpinningA}>
            {isSpinningA ? 'Tirage en cours...' : 'Lancer le tirage - Groupe A'}
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
        <div className="circle-container">
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
          <button onClick={() => handleDraw('B')} disabled={isSpinningB}>
            {isSpinningB ? 'Tirage en cours...' : 'Lancer le tirage - Groupe B'}
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
