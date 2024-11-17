import { useState, useEffect } from 'react';

const QualifiedPlayers = ({ groupsData }) => {
  const [visiblePlayers, setVisiblePlayers] = useState([]);
  const [showTitle, setShowTitle] = useState(false);

  // Get qualified players (top 2 from each group)
  const qualifiedPlayers = groupsData.flatMap(group => {
    const sortedTeams = [...group.teams].sort((a, b) => b.points - a.points);
    return sortedTeams.slice(0, 2).map(team => ({
      ...team,
      groupName: group.groupName
    }));
  });

  useEffect(() => {
    // Show title first
    setTimeout(() => setShowTitle(true), 500);

    // Animate players one by one
    qualifiedPlayers.forEach((player, index) => {
      setTimeout(() => {
        setVisiblePlayers(prev => [...prev, player]);
      }, 1500 + (index * 800)); // Start after title, then 800ms delay between each player
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 p-8">
      {/* Title Animation */}
      <div className={`text-center mb-12 transition-all duration-1000 transform 
        ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 
          text-transparent bg-clip-text">
          Joueurs Qualifiés
        </h1>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {qualifiedPlayers.map((player, index) => (
          <div
            key={player.id}
            className={`transform transition-all duration-700 
              ${visiblePlayers.includes(player) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'}`}
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg 
              hover:shadow-2xl transition-shadow duration-300 
              hover:scale-105 transform transition-transform">
              <div className="p-6">
                {/* Player Image/Flag */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}${player.flag}`}
                    alt={player.name}
                    className="w-20 h-20 rounded-full border-4 border-blue-500 
                      shadow-lg object-cover"
                  />
                </div>

                {/* Player Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {player.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">
                    {player.groupName}
                  </p>
                  <div className="flex justify-center space-x-4 text-gray-300">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.87 12.1l-.8-.8 2.83-2.83L5.87 6.2l.8-.8L10 8.73l3.33-3.32.8.8-2.83 2.83 2.83 2.83-.8.8L10 9.27l-3.33 3.32z"/>
                      </svg>
                      {player.points} pts
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1z"/>
                      </svg>
                      {player.played} MJ
                    </span>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="mt-4 flex justify-center">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white 
                    font-semibold shadow-lg">
                    Qualifié
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualifiedPlayers;