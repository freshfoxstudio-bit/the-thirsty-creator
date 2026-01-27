import React, { useState } from 'react';
import './styles.css'; 
import TitlePage from './components/titlepage';
import SignUp from './components/signup';
import RecipeFinder from './components/recipefinder';
import AdminPage from './components/adminpage';

const App = () => {
  const [screen, setScreen] = useState('title');
  const [userEmail, setUserEmail] = useState('');

  // The Master Admin Email
  const ADMIN_EMAIL = 'hcandlish2014@gmail.com';

  const handleLogin = (email) => {
    // Standardizes email to lowercase to prevent login errors
    setUserEmail(email.toLowerCase());
    setScreen('finder');
  };

  const navigateToAdmin = () => setScreen('admin');
  const navigateToFinder = () => setScreen('finder');

  return (
    <div className="App">
      {/* 1. Splash Screen: Triggers the Jingle and Logo */}
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
          
          {/* Admin Button: Only appears if userEmail matches your email */}
          {userEmail === ADMIN_EMAIL && (
            <button 
              className="btn-small" 
              onClick={navigateToAdmin}
              style={{ 
                position: 'fixed', 
                bottom: '20px', 
                right: '20px', 
                zIndex: 999 
              }}
            >
              ADMIN LAB
            </button>
          )}
        </div>
      )}

      {/* 4. The Secret Creative Lab */}
      {screen === 'admin' && (
        <AdminPage onBack={navigateToFinder} />
      )}
    </div>
  );
};

export default App;
