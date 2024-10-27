// PolitiqueConfidentialite.js
import React from 'react';

const PolitiqueConfidentialite = () => {
    return (
        <div className="legal-page">
            <h2>Politique de Confidentialité</h2>
            <p>
                Bienvenue sur le site de TIKTOK FOR ALL. La confidentialité de vos données personnelles est importante pour nous.
                Ce site est géré par un groupe de créateurs passionnés de TikTok et de jeux. Nous collectons uniquement les informations 
                nécessaires pour afficher les profils des joueurs inscrits dans notre tournoi.
            </p>
            
            <h3>1. Informations Collectées</h3>
            <p>Nous collectons les types d’informations suivants :</p>
            <ul>
                <li>Photos de profil des utilisateurs de TikTok inscrits dans notre tournoi.</li>
                <li>Le nom des utilisateurs (noms TikTok) et leurs profils TikTok publics.</li>
            </ul>
            
            <h3>2. Utilisation des Informations</h3>
            <p>Les informations que nous collectons sont utilisées pour :</p>
            <ul>
                <li>Afficher les profils des joueurs inscrits sur notre site de manière publique.</li>
            </ul>
            
            <h3>3. Conservation des Données</h3>
            <p>Les données des utilisateurs (photos de profil, noms, et profils TikTok) sont conservées aussi longtemps que l’utilisateur reste inscrit dans notre tournoi.</p>
            
            <h3>4. Droits des Utilisateurs</h3>
            <p>En vertu du RGPD, vous avez le droit de :</p>
            <ul>
                <li>Accéder aux données personnelles que nous détenons à votre sujet.</li>
                <li>Demander la rectification ou la suppression de vos données.</li>
                <li>Vous opposer au traitement de vos données personnelles.</li>
            </ul>
            <p>Pour exercer ces droits, veuillez nous contacter à <a href="mailto:contact@tiktokforall.com">contact@tiktokforall.com</a>.</p>
        </div>
    );
};

export default PolitiqueConfidentialite;
