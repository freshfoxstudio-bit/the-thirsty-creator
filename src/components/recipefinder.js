import React, { useState, useEffect } from 'react';

const RecipeFinder = () => {
  const [query, setQuery] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [view, setView] = useState('search'); // 'search', 'signup', or 'admin'
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [users, setUsers] = useState([]);

  // Load users from storage on start
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    setUsers(savedUsers);
    handleSearch();
  }, []);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    const term = query || 'margarita';
    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`);
      const data = await res.json();
      setDrinks(data.drinks || []);
      setView('search');
    } catch (err) { console.error(err); }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const newUsers = [...users, { ...formData, id: Date.now() }];
    setUsers(newUsers);
    localStorage.setItem('subscribers', JSON.stringify(newUsers));
    setFormData({ name: '', email: '' });
    alert("Signed up successfully!");
    setView('search');
  };

  return (
    <div style={{ color: 'white', padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Navigation Bar */}
      <nav style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <button onClick={() => setView('search')} style={navBtn}>Search</button>
        <button onClick={() => setView('signup')} style={navBtn}>Join Newsletter</button>
        <button onClick={() => setView('admin')} style={{ ...navBtn, background: '#ff4b2b' }}>Admin Panel</button>
      </nav>

      {/* View 1: Search Page */}
      {view === 'search' && (
        <>
          <form onSubmit={handleSearch} style={{ textAlign: 'center', marginBottom: '30px' }}>
            <input 
              style={inputStyle} 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
              placeholder="Find a drink..." 
            />
            <button type="submit" style={btnStyle}>Search</button>
          </form>
          <div style={gridStyle}>
            {drinks.map(d => (
              <div key={d.idDrink} style={cardStyle}>
                <img src={d.strDrinkThumb} alt={d.strDrink} style={{ width: '100%', borderRadius: '10px' }} />
                <h3>{d.strDrink}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* View 2: Sign-Up Page */}
      {view === 'signup' && (
        <div style={formCard}>
          <h2>Sign Up for Updates</h2>
          <form onSubmit={handleSignup}>
            <input 
              style={inputStyle} 
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              style={inputStyle} 
              type="email" 
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <button type="submit" style={btnStyle}>Submit</button>
          </form>
        </div>
      )}

      {/* View 3: Admin Page */}
      {view === 'admin' && (
        <div style={formCard}>
          <h2>Admin Dashboard</h2>
          <p>Total Subscribers: {users.length}</p>
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid white' }}>
                <th style={{ textAlign: 'left' }}>Name</th>
                <th style={{ textAlign: 'left' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => {localStorage.clear(); setUsers([]);}} style={{marginTop: '20px', background: 'gray', color: 'white'}}>Clear All Data</button>
        </div>
      )}
    </div>
  );
};

// Styles
const navBtn = { padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', border: 'none', fontWeight: 'bold' };
const inputStyle = { padding: '12px', width: '80%', marginBottom: '10px', borderRadius: '5px', border: 'none' };
const btnStyle = { padding: '12px 25px', background: '#000', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' };
const cardStyle = { background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px', textAlign: 'center' };
const formCard = { background: 'rgba(0,0,0,0.3)', padding: '40px', borderRadius: '20px', textAlign: 'center' };

export default RecipeFinder;
