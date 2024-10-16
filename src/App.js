import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Modes from './Modes';
import LocationTracker from './LocationTracker';
import HistoryOptions from './HistoryOptions';
import MessageTracker from './MessageTracker'; // Import the new component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/modes" element={<Modes />} />
                <Route path="/location-tracker" element={<LocationTracker />} />
                <Route path="/history-options" element={<HistoryOptions />} />
                <Route path="/message-tracker" element={<MessageTracker />} /> {/* New Route */}
            </Routes>
        </Router>
    );
};

export default App;
