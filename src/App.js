import React from 'react';
import './styles.css';
import RecipeFinder from './components/recipefinder';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', padding: '40px 20px' }}>
        <img src="/drinks.png" alt="logo" style={{ width: '80px', marginBottom: '10px' }} />
        <h1 style={{ color: 'white', fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>The Thirsty Creator</h1>
        <audio autoPlay loop src="/jinglemix.mp3" />
      </header>
      <main>
        <RecipeFinder />
      </main>
    </div>
  );
}

export default App;
