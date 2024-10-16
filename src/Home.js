import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleModeClick = () => {
        navigate('/modes');
    };

    const handleLocationClick = () => {
        navigate('/location-tracker');
    };

    const handleMessageTrackerClick = () => {
        navigate('/message-tracker');
    };

    return (
        <div className="home-container">
            <h1>Welcome to Home Screen</h1>
            <button className="mode-button" onClick={handleModeClick}>
                Mode of Operation
            </button>
            <button className="mode-button" onClick={handleLocationClick}>
                Location Tracker
            </button>
            <button className="mode-button" onClick={handleMessageTrackerClick}>
                Message Tracker
            </button>
        </div>
    );
};

export default Home;
