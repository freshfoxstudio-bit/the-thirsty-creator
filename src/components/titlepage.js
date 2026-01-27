import React, { useRef } from 'react';

const TitlePage = ({ onComplete }) => {
  const audioRef = useRef(null);

  const handleStart = () => {
    // 1. Play the jingle immediately
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio needs user tap first"));
    }
    
    // 2. Short delay so the music starts before the screen flips
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <div className="splash-screen" style={{ animation: 'fadeIn 0.8s' }}>
      {/* This pulls from public/jinglemix.mp3 */}
      <audio ref={audioRef} src="/jinglemix.mp3" preload="auto" />

      {/* This pulls from public/drinks.png */}
      <div className="logo-container">
        <img 
          src="/drinks.png" 
          alt="The Thirsty Creator Logo" 
          className="main-logo" 
        />
      </div>

      <h1 className="title-text">the thirsty creator</h1>
      <p style={{ opacity: 0.7, letterSpacing: '2px', marginBottom: '30px' }}>EST. 2024</p>

      <button className="btn-primary" onClick={handleStart}>
        OPEN THE LAB
      </button>
    </div>
  );
};

export default TitlePage;
