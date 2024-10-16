import React from 'react';
import './MessageTracker.css';

const MessageTracker = () => {
    return (
        <div className="message-tracker-container">
            <h1>Message Tracker</h1>
            <button className="message-button">Messages from Caretaker</button>
            <button className="message-button">Message History</button>
        </div>
    );
};

export default MessageTracker;
