import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing features and services</p>
      </section>
      
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Fast Performance</h3>
            <p>Built with Vite for lightning-fast development</p>
          </div>
          <div className="card">
            <h3>Modern UI</h3>
            <p>Beautiful React components</p>
          </div>
          <div className="card">
            <h3>Easy to Use</h3>
            <p>Intuitive navigation and layout</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;