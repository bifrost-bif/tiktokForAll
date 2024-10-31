import React from 'react';
import './TikTokProfileBanner.css';

const TikTokProfileBanner = ({ profile }) => {
    return (
        <div className="tiktok-banner">
            <div className="profile-image-container">
                <img src="./images/profiles/bacem.png" alt={`${profile}'s profile`} className="profile-image" />
            </div>
            <div className="profile-info">
                
                <a
                    href={`https://www.tiktok.com/@${profile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="follow-button"
                >
                    Regarder le live
                </a>
            </div>
        </div>
    );
};

export default TikTokProfileBanner;
