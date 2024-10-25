// src/components/AdminPanel.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
    const [data, setData] = useState(null);
    const [newSanction, setNewSanction] = useState({ name: '', warnings: 0, reason: '', date: '', status: 'Active' });
    const [newGroup, setNewGroup] = useState({ groupName: '', category: '', teams: [] });
    const [newPlayer, setNewPlayer] = useState({ name: '', flag: '', validated: false, tiktokUsername: '' });
    const [newKnockoutMatch, setNewKnockoutMatch] = useState({ round: '', player1: { name: '', score: -1 }, player2: { name: '', score: -1 } });
    const [newCalendarMatch, setNewCalendarMatch] = useState({ date: '', time: '', player1: { name: '', score: -1 }, player2: { name: '', score: -1 } });

    const maxPlayers = 5;
    const minPlayers = 4;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/data');
            setData(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement des données", error);
        }
    };

    const handleTeamChange = (groupCategory, groupIndex, teamIndex, field, value) => {
        const updatedData = { ...data };
        updatedData.groups[groupCategory][groupIndex].teams[teamIndex][field] = value;
        setData(updatedData);
    };

    const handleChange = (section, index, field, value) => {
        const updatedData = { ...data };
        updatedData[section][index][field] = value;
        setData(updatedData);
    };

    const handleNestedChange = (section, round, matchIndex, player, field, value) => {
        const updatedData = { ...data };
        updatedData[section][round][matchIndex][player][field] = value;
        setData(updatedData);
    };

    const handleSave = async () => {
        try {
            await axios.post('http://localhost:5000/api/data', data);
            alert("Données sauvegardées avec succès !");
        } catch (error) {
            console.error("Erreur lors de la sauvegarde des données", error);
        }
    };

    const addSanction = () => {
        const updatedSanctions = [...data.sanctions, newSanction];
        setData({ ...data, sanctions: updatedSanctions });
        setNewSanction({ name: '', warnings: 0, reason: '', date: '', status: 'Active' });
    };

    const addGroup = () => {
        const groupValid = newGroup.groupName && newGroup.category &&
            newGroup.teams.length >= minPlayers &&
            newGroup.teams.length <= maxPlayers &&
            newGroup.teams.every(team => team.name);

        if (!groupValid) {
            alert(`Le groupe doit avoir un nom, une catégorie, et contenir entre ${minPlayers} et ${maxPlayers} joueurs.`);
            return;
        }

        const updatedData = { ...data };
        if (!updatedData.groups[newGroup.category]) updatedData.groups[newGroup.category] = [];
        updatedData.groups[newGroup.category].push(newGroup);

        setData(updatedData);
        setNewGroup({ groupName: '', category: '', teams: [] });
    };

    const addPlayerToNewGroup = () => {
        if (newGroup.teams.length < maxPlayers) {
            setNewGroup({
                ...newGroup,
                teams: [...newGroup.teams, { name: '', played: 0, coins: '0k', points: 0 }]
            });
        }
    };

    const handleNewTeamChange = (teamIndex, field, value) => {
        const updatedTeams = [...newGroup.teams];
        updatedTeams[teamIndex][field] = value;
        setNewGroup({ ...newGroup, teams: updatedTeams });
    };

    const deleteGroup = async (category, groupIndex) => {
        const updatedGroups = data.groups[category].filter((_, index) => index !== groupIndex);
        setData({ ...data, groups: { ...data.groups, [category]: updatedGroups } });
        try {
            await axios.delete(`http://localhost:5000/api/groups/${groupIndex}`);
        } catch (error) {
            console.error("Erreur lors de la suppression du groupe", error);
        }
    };

    const deletePlayerFromNewGroup = (teamIndex) => {
        const updatedTeams = newGroup.teams.filter((_, index) => index !== teamIndex);
        setNewGroup({ ...newGroup, teams: updatedTeams });
    };

    const addPlayer = () => {
        const updatedPlayers = [...data.joueursInscritsData, newPlayer];
        setData({ ...data, joueursInscritsData: updatedPlayers });
        setNewPlayer({ name: '', flag: '', validated: false, tiktokUsername: '' });
    };

    const addKnockoutMatch = () => {
        const updatedKnockoutMatches = {
            ...data.knockoutMatches,
            [newKnockoutMatch.round]: [
                ...(data.knockoutMatches[newKnockoutMatch.round] || []),
                { player1: newKnockoutMatch.player1, player2: newKnockoutMatch.player2 },
            ],
        };
        setData({ ...data, knockoutMatches: updatedKnockoutMatches });
        setNewKnockoutMatch({ round: '', player1: { name: '', score: -1 }, player2: { name: '', score: -1 } });
    };

    const addCalendarMatch = () => {
        const updatedCalendarMatches = [...data.calendarMatches, { date: newCalendarMatch.date, matches: [{ player1: newCalendarMatch.player1, player2: newCalendarMatch.player2, time: newCalendarMatch.time }] }];
        setData({ ...data, calendarMatches: updatedCalendarMatches });
        setNewCalendarMatch({ date: '', time: '', player1: { name: '', score: -1 }, player2: { name: '', score: -1 } });
    };

    // Add a new function to find a player by name and retrieve their flag
    const findPlayerFlag = (playerName) => {
        const player = data.joueursInscritsData.find((p) => p.name === playerName);
    return player ? player.flag : '';
    };

    if (!data) return <p>Chargement des données...</p>;

    return (
        <div className="admin-panel">
            <h1>Panneau d'Administration</h1>

            {/* Sanctions */}
            <div className="table-section">
                <h2>Sanctions</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Warnings</th>
                            <th>Raison</th>
                            <th>Date</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.sanctions.map((sanction, index) => (
                            <tr key={index}>
                                <td><input className="input-field" type="text" value={sanction.name} onChange={(e) => handleChange('sanctions', index, 'name', e.target.value)} /></td>
                                <td><input className="input-field" type="number" value={sanction.warnings} onChange={(e) => handleChange('sanctions', index, 'warnings', e.target.value)} /></td>
                                <td><input className="input-field" type="text" value={sanction.reason} onChange={(e) => handleChange('sanctions', index, 'reason', e.target.value)} /></td>
                                <td><input className="input-field" type="text" value={sanction.date} onChange={(e) => handleChange('sanctions', index, 'date', e.target.value)} /></td>
                                <td>
                                    <select className="input-field" value={sanction.status} onChange={(e) => handleChange('sanctions', index, 'status', e.target.value)}>
                                        <option value="Active">Active</option>
                                        <option value="Sanctionné">Sanctionné</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="button add-button" onClick={addSanction}>Ajouter la sanction</button>
            </div>

            {/* Groupes */}
            <div className="table-section">
                <h2>Groupes</h2>
                {Object.keys(data.groups).map(category => (
                    <div key={category}>
                        <h3>{category}</h3>
                        {data.groups[category].map((group, groupIndex) => (
                            <div key={groupIndex}>
                                <h4>{group.groupName}</h4>
                                <button className="button delete-button" onClick={() => deleteGroup(category, groupIndex)}>Supprimer le Groupe</button>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Joueur</th>
                                            <th>MJ</th>
                                            <th>Coins</th>
                                            <th>Points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {group.teams.map((team, teamIndex) => (
                                            <tr key={teamIndex}>
                                                <td><input className="input-field" type="text" value={team.name} onChange={(e) => handleTeamChange(category, groupIndex, teamIndex, 'name', e.target.value)} /></td>
                                                <td><input className="input-field" type="number" value={team.played} onChange={(e) => handleTeamChange(category, groupIndex, teamIndex, 'played', e.target.value)} /></td>
                                                <td><input className="input-field" type="text" value={team.coins} onChange={(e) => handleTeamChange(category, groupIndex, teamIndex, 'coins', e.target.value)} /></td>
                                                <td><input className="input-field" type="number" value={team.points} onChange={(e) => handleTeamChange(category, groupIndex, teamIndex, 'points', e.target.value)} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

    {/* Formulaire pour ajouter un nouveau groupe */}
    <div className="table-section">
    <h2>Ajouter un Nouveau Groupe</h2>

    {/* Category Selection */}
    <label>Catégorie:</label>
    <select
        className="input-field"
        value={newGroup.category}
        onChange={(e) => setNewGroup({ ...newGroup, category: e.target.value })}
    >
        <option value="">Sélectionnez une catégorie</option>
        <option value="Nouveaux Joueurs">Nouveaux Joueurs</option>
        <option value="Anciens Joueurs">Anciens Joueurs</option>
    </select>

    <label>Nom du Groupe:</label>
    <select
        className="input-field"
        value={newGroup.groupName}
        onChange={(e) => setNewGroup({ ...newGroup, groupName: e.target.value })}
    >
        <option value="">Sélectionnez un groupe</option>
        <option value="Groupe A1">Groupe A1</option>
        <option value="Groupe A2">Groupe A2</option>
        <option value="Groupe A3">Groupe A3</option>
        <option value="Groupe A4">Groupe A4</option>
        <option value="Groupe A4">Groupe A5</option>
        <option value="Groupe B1">Groupe B1</option>
        <option value="Groupe B2">Groupe B2</option>
        <option value="Groupe B3">Groupe B3</option>
        <option value="Groupe B4">Groupe B4</option>
        <option value="Groupe B5">Groupe B4</option>
    </select>

    <h3>Ajouter un Nouveau Joueur</h3>
    {newGroup.teams.map((team, teamIndex) => (
        <div key={teamIndex} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            {/* Player Name Dropdown */}
            <select
                className="input-field"
                value={team.name}
                onChange={(e) => {
                    const selectedName = e.target.value;
                    const selectedFlag = findPlayerFlag(selectedName);

                    handleNewTeamChange(teamIndex, 'name', selectedName);
                    handleNewTeamChange(teamIndex, 'flag', selectedFlag); // Automatically set flag
                }}
                required
            >
                <option value="">Sélectionnez un joueur</option>
                {data.joueursInscritsData.map((player) => (
                    <option key={player.name} value={player.name}>
                        {player.name}
                    </option>
                ))}
            </select>

            {/* Flag is displayed but not manually editable */}
            <input className="input-field" type="text" value={team.flag} placeholder="Drapeau" readOnly style={{ display: 'none' }}/>

            <input className="input-field" type="number" placeholder="MJ" value={team.played} onChange={(e) => handleNewTeamChange(teamIndex, 'played', e.target.value)} />
            <input className="input-field" type="text" placeholder="Coins" value={team.coins} onChange={(e) => handleNewTeamChange(teamIndex, 'coins', e.target.value)} />
            <input className="input-field" type="number" placeholder="Points" value={team.points} onChange={(e) => handleNewTeamChange(teamIndex, 'points', e.target.value)} />
            <button className="button delete-button" onClick={() => deletePlayerFromNewGroup(teamIndex)}>Supprimer</button>
        </div>
    ))}

    <button
        className="button add-button"
        onClick={addPlayerToNewGroup}
        disabled={newGroup.teams.length >= maxPlayers}
    >
        Ajouter un Joueur au Nouveau Groupe
    </button>
    <button className="button save-button" onClick={addGroup}>Enregistrer le Nouveau Groupe</button>
</div>

            {/* Joueurs Inscrits */}
            <div className="table-section">
                <h2>Joueurs Inscrits</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Flag</th>
                            <th>Validé</th>
                            <th>Nom TikTok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.joueursInscritsData.map((player, index) => (
                            <tr key={index}>
                                <td><input className="input-field" type="text" value={player.name} onChange={(e) => handleChange('joueursInscritsData', index, 'name', e.target.value)} /></td>
                                <td><input className="input-field" type="text" value={player.flag} onChange={(e) => handleChange('joueursInscritsData', index, 'flag', e.target.value)} /></td>
                                <td><input type="checkbox" checked={player.validated} onChange={(e) => handleChange('joueursInscritsData', index, 'validated', e.target.checked)} /></td>
                                <td><input className="input-field" type="text" value={player.tiktokUsername} onChange={(e) => handleChange('joueursInscritsData', index, 'tiktokUsername', e.target.value)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="button add-button" onClick={addPlayer}>Ajouter le Joueur</button>
            </div>

            {/* Phase Éliminatoire */}
            <div className="table-section">
                <h2>Phase Éliminatoire</h2>
                {Object.keys(data.knockoutMatches).map((round) => (
                    <div key={round}>
                        <h3>{round}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Joueur 1</th>
                                    <th>Score 1</th>
                                    <th>Joueur 2</th>
                                    <th>Score 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.knockoutMatches[round].map((match, index) => (
                                    <tr key={index}>
                                        <td><input className="input-field" type="text" value={match.player1.name} onChange={(e) => handleNestedChange('knockoutMatches', round, index, 'player1', 'name', e.target.value)} /></td>
                                        <td><input className="input-field" type="number" value={match.player1.score} onChange={(e) => handleNestedChange('knockoutMatches', round, index, 'player1', 'score', e.target.value)} /></td>
                                        <td><input className="input-field" type="text" value={match.player2.name} onChange={(e) => handleNestedChange('knockoutMatches', round, index, 'player2', 'name', e.target.value)} /></td>
                                        <td><input className="input-field" type="number" value={match.player2.score} onChange={(e) => handleNestedChange('knockoutMatches', round, index, 'player2', 'score', e.target.value)} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
                <button className="button add-button" onClick={addKnockoutMatch}>Ajouter le match éliminatoire</button>
            </div>

            {/* Calendrier des Matchs */}
            <div className="table-section">
                <h2>Calendrier des Matchs</h2>
                {data.calendarMatches.map((calendar, index) => (
                    <div key={index}>
                        <h3>Date: {calendar.date}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Joueur 1</th>
                                    <th>Score 1</th>
                                    <th>Joueur 2</th>
                                    <th>Score 2</th>
                                    <th>Heure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {calendar.matches.map((match, matchIndex) => (
                                    <tr key={matchIndex}>
                                        <td><input className="input-field" type="text" value={match.player1.name} onChange={(e) => handleNestedChange('calendarMatches', index, matchIndex, 'player1', 'name', e.target.value)} /></td>
                                        <td><input className="input-field" type="number" value={match.player1.score} onChange={(e) => handleNestedChange('calendarMatches', index, matchIndex, 'player1', 'score', e.target.value)} /></td>
                                        <td><input className="input-field" type="text" value={match.player2.name} onChange={(e) => handleNestedChange('calendarMatches', index, matchIndex, 'player2', 'name', e.target.value)} /></td>
                                        <td><input className="input-field" type="number" value={match.player2.score} onChange={(e) => handleNestedChange('calendarMatches', index, matchIndex, 'player2', 'score', e.target.value)} /></td>
                                        <td><input className="input-field" type="text" value={match.time} onChange={(e) => handleNestedChange('calendarMatches', index, matchIndex, 'time', e.target.value)} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
                <button className="button add-button" onClick={addCalendarMatch}>Ajouter un match au calendrier</button>
            </div>
                {/* Fixed Save Button */}
            <div className="fixed-save-button-container">
                <button className="fixed-save-button" onClick={handleSave}>
                    Sauvegarder toutes les modifications
                </button>
            </div>
            
                    
        </div>
    );
};

export default AdminPanel;
