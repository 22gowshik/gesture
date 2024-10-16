import React from 'react';
import './HistoryOptions.css';

const HistoryOptions = () => {
    return (
        <div className="history-options-container">
            <h1>Past History</h1>
            <button className="history-option-button">1 Day</button>
            <button className="history-option-button">1 Week</button>
            <button className="history-option-button">1 Month</button>
        </div>
    );
};

export default HistoryOptions;
