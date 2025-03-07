// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li><Link to="/politique-confidentialite">Politique de Confidentialité</Link></li>
                    <li><Link to="/mentions-legales">Mentions Légales</Link></li>
                    <li><Link to="/politique-cookies">Politique de Cookies</Link></li>
                    <li><Link to="/conditions-utilisation">Conditions Générales d'Utilisation</Link></li>
                    <li><Link to="/contact-donnees">Contact pour Droits des Données</Link></li>
                </ul>
                <p className="footer-copyright">
                    © 2025 TIKTOK FOR ALL. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
