import React from 'react';
import Champions from './Champions';
import './Apps.css';

const Apps = () => {
  return (
    <div className="apps-page">
      <h1>Our Applications</h1>
      <div className="apps-grid">
        {/* You can map through your apps here */}
        <div className="app-card">
          <h3>League of Legends Champions</h3>
          <p>Explore all League of Legends champions with their stats and information</p>
        </div>
        <div className="app-card">
          <h3>App 2</h3>
          <p>Description of app 2</p>
        </div>
      </div>
      
      {/* Champions Section */}
      <Champions />
    </div>
  );
};

export default Apps;