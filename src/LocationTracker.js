import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationTracker.css';

const LocationTracker = () => {
    const navigate = useNavigate();

    const handleHistoryClick = () => {
        navigate('/history-options');
    };

    return (
        <div className="location-tracker-container">
            <h1>Location Tracker</h1>
            <button className="history-button" onClick={handleHistoryClick}>
                Past History
            </button>
        </div>
    );
};

export default LocationTracker;
