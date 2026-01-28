import React, { useState } from 'react';
import './styles.css'; 
import TitlePage from './components/titlepage';
import SignUp from './components/signup';
import RecipeFinder from './components/recipefinder';
import AdminPage from './components/adminpage';

const App = () => {
  const [screen, setScreen] = useState('title');
  const [userEmail, setUserEmail] = useState('');

  // Your Master Admin Email
  const ADMIN_EMAIL = 'hcandlish2014@gmail.com';

  const handleLogin = (email) => {
    setUserEmail(email.toLowerCase());
    setScreen('finder');
  };

  return (
    <div className="App">
      {/* 1. Splash Screen: Triggers Jingle (jinglemix.mp3) and Logo (drinks.png) */}
      {screen === 'title' && (
        <TitlePage onComplete={() => setScreen('signup')} />
      )}

      {/* 2. Authentication Screen */}
      {screen === 'signup' && (
        <SignUp onLogin={handleLogin} />
      )}

      {/* 3. Main Application Hub */}
      {screen === 'finder' && (
        <div className="fade-in">
          <RecipeFinder />
          
          {/* Admin Button: Only appears if you log in with your email */}
          {userEmail === ADMIN_EMAIL && (
            <button 
              className="btn-small" 
              onClick={() => setScreen('admin')}
              style={{ 
                position: 'fixed', 
                bottom: '20px', 
                right: '20px', 
                zIndex: 999,
                background: 'var(--electric-blue)',
                color: 'black'
              }}
            >
              ADMIN LAB
            </button>
          )}
        </div>
      )}

      {/* 4. The Secret Creative Lab */}
      {screen === 'admin' && (
        <AdminPage onBack={() => setScreen('finder')} />
      )}
    </div>
  );
};

export default App;
