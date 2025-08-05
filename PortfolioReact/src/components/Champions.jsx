import React, { useState, useEffect } from 'react';
import './Champions.css';

const Champions = () => {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion.json');
        if (!response.ok) {
          throw new Error('Failed to fetch champions');
        }
        const data = await response.json();
        // Convert the champions object to an array
        const championsArray = Object.values(data.data);
        setChampions(championsArray);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchChampions();
  }, []);

  // Filter champions based on search term
  const filteredChampions = champions.filter(champion =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    champion.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="champions-container">
        <div className="loading">Loading champions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="champions-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="champions-container">
      <div className="champions-header">
        <h2>League of Legends Champions</h2>
        <p>Total Champions: {champions.length}</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search champions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      
      <div className="champions-grid">
        {filteredChampions.map((champion) => (
          <div key={champion.id} className="champion-card">
            <div className="champion-image">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                loading="lazy"
              />
            </div>
            <div className="champion-info">
              <h3 className="champion-name">{champion.name}</h3>
              <p className="champion-title">{champion.title}</p>
              <div className="champion-tags">
                {champion.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <p className="champion-blurb">{champion.blurb}</p>
              <div className="champion-stats">
                <div className="stat">
                  <span className="stat-label">Attack:</span>
                  <span className="stat-value">{champion.info.attack}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Defense:</span>
                  <span className="stat-value">{champion.info.defense}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Magic:</span>
                  <span className="stat-value">{champion.info.magic}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Difficulty:</span>
                  <span className="stat-value">{champion.info.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredChampions.length === 0 && searchTerm && (
        <div className="no-results">
          No champions found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default Champions;
