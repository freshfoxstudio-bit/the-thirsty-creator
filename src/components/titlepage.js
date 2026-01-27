import React, { useRef } from 'react';

const TitlePage = ({ onComplete }) => {
  const audioRef = useRef(null);

  const handleStart = () => {
    // 1. Play the jingle
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio waiting for tap"));
    }
    
    // 2. Wait 1.5 seconds so they hear the jingle, then move to the next screen
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  return (
    <div className="splash-screen">
      {/* This looks for jinglemix.mp3 in your public folder */}
      <audio ref={audioRef} src="/jinglemix.mp3" preload="auto" />

      {/* This looks for drinks.png in your public folder */}
      <img 
        src="/drinks.png" 
        alt="The Thirsty Creator" 
        className="main-logo" 
      />

      <h1 className="title-text">the thirsty creator</h1>
      <p style={{ opacity: 0.7, marginBottom: '30px' }}>EST. 2024</p>

      <button className="btn-primary" onClick={handleStart}>
        Open the Lab
      </button>
    </div>
  );
};

export default TitlePage;
