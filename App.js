import React, { useState } from 'react';
import './styles.css'; // This connects your CSS
import TitlePage from './components/titlepage';
import SignUp from './components/signup';
import RecipeFinder from './components/recipefinder';
import AdminPage from './components/adminpage';

const App = () => {
  const [screen, setScreen] = useState('title');
  const [userEmail, setUserEmail] = useState('');

  // Change this to your actual email for Admin access
  const ADMIN_EMAIL = 'hcandlish2014@gmail.com';

  const handleLogin = (email) => {
    setUserEmail(email.toLowerCase());
    setScreen('finder');
  };

  return (
    <div className="App">
      {/* Title/Splash Screen */}
      {screen === 'title' && (
        <TitlePage onComplete={() => setScreen('signup')} />
      )}

      {/* Email Sign Up */}
      {screen === 'signup' && (
        <SignUp onLogin={handleLogin} />
      )}

      {/* Main Recipe Finder Screen */}
      {screen === 'finder' && (
        <>
          <RecipeFinder />
          
          {/* Only shows if YOU are logged in */}
          {userEmail === ADMIN_EMAIL && (
            <button 
              className="btn-small" 
              onClick={() => setScreen('admin')}
              style={{ position: 'fixed', bottom: '20px', right: '20px' }}
            >
              Admin Lab
            </button>
          )}
        </>
      )}

      {/* Secret Admin Page */}
      {screen === 'admin' && (
        <AdminPage onBack={() => setScreen('finder')} />
      )}
    </div>
  );
};

export default App;
