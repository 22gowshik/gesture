import React from 'react';
import './Modes.css'; // Import the CSS

const Modes = () => {
    return (
        <div className="modes-container">
            <h1>Select Mode of Operation</h1>
            <button className="mode-button">Voice Assistance Mode</button>
            <button className="mode-button">IoT Mode</button>
            <button className="mode-button">Both</button>
        </div>
    );
};

export default Modes;
