import React from 'react';
import './Home.css';
import Slideshow from './Slideshow';
import Notice from './Notices';
import FounderMessage from './FounderMessage';

const Home = () => {
  return (
    <div className="home-page">
    
      
      <div className="slideshow-section">
        <Slideshow />
      </div>

      
      <div className="founder-notice-container">
  <div className="founder-message-section">
    <FounderMessage />
  </div>
  <div className="notice-section">
    <Notice />
  </div>
</div>
    </div>
  );
};

export default Home;
