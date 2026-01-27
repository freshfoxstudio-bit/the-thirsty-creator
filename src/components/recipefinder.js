import React, { useState } from 'react';

const RecipeFinder = () => {
  const [search, setSearch] = useState('');
  
  // This is your starter menu
  const recipes = [
    { name: "Sunset Mimic", ingredients: "Orange, Grenadine, Soda", type: "mocktail" },
    { name: "Electric Lemonade", ingredients: "Blueberry, Lemon, Sprite", type: "mocktail" },
    { name: "Classic Creator", ingredients: "Gin, Tonic, Lime", type: "alcoholic" },
    { name: "Midnight Mood", ingredients: "Blackberry, Mint, Ginger Ale", type: "mocktail" }
  ];

  const filteredRecipes = recipes.filter(r => 
    r.name.toLowerCase().includes(search.toLowerCase()) || 
    r.ingredients.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '10px' }}>
      <div className="glass-card">
        <input 
          placeholder="Search by ingredient or name..." 
          onChange={(e) => setSearch(e.target.value)} 
          style={{ marginBottom: '0' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((r, index) => (
            <div className="glass-card recipe-item" key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: '0.65rem', 
                  background: r.type === 'mocktail' ? 'var(--electric-blue)' : 'var(--sunny-yellow)', 
                  color: '#000', 
                  padding: '4px 10px', 
                  borderRadius: '20px', 
                  fontWeight: '800',
                  textTransform: 'uppercase'
                }}>
                  {r.type}
                </span>
              </div>
              <h3 style={{ margin: '10px 0 5px 0', fontSize: '1.4rem' }}>{r.name}</h3>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>{r.ingredients}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '20px', opacity: 0.7 }}>
            No experiments found with those ingredients...
          </p>
        )}
      </div>
    </div>
  );
};

export default RecipeFinder;
