import React from 'react';
import './styles.css';
import recipefinder from './components/recipefinder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/drinks.png" alt="logo" className="logo" style={{ width: '100px' }} />
      </header>
      <main>
        <recipefinder />
      </main>
    </div>
  );
}

export default App;
