import React from 'react';
import './styles.css';
import RecipeFinder from './components/recipefinder';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ff0080, #7928ca)', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px', textAlign: 'center' }}>
        <img src="/drinks.png" alt="logo" style={{ width: '120px', filter: 'drop-shadow(0 0 10px white)' }} />
        <h1 style={{ color: 'white', fontSize: '3rem', margin: '10px 0' }}>The Thirsty Creator</h1>
        <audio autoPlay loop src="/jinglemix.mp3" />
      </header>
      <main>
        <RecipeFinder />
      </main>
    </div>
  );
}

export default App;
