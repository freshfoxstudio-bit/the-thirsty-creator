import React, { useState, useEffect } from 'react';

const RecipeFinder = () => {
  const [query, setQuery] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);

  // This function fetches real data from a public API with no keys needed
  const searchDrinks = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    try {
      const searchTerm = query || 'margarita';
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setDrinks(data.drinks || []);
    } catch (err) {
      console.error("Search failed", err);
    }
    setLoading(false);
  };

  // Load some results immediately so the screen isn't empty
  useEffect(() => {
    searchDrinks();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <form onSubmit={searchDrinks} style={{ marginBottom: '30px', textAlign: 'center' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a drink (e.g. Rum, Vodka, Sunset)..."
          style={{ padding: '12px', width: '250px', borderRadius: '5px', border: 'none' }}
        />
        <button type="submit" style={{ padding: '12px 20px', marginLeft: '10px', borderRadius: '5px', cursor: 'pointer', background: '#000', color: '#fff', border: 'none' }}>
          Search
        </button>
      </form>

      {loading ? <p style={{ color: 'white' }}>Searching...</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {drinks.map((drink) => (
            <div key={drink.idDrink} style={{ background: 'rgba(255,255,255,0.2)', padding: '15px', borderRadius: '10px', color: 'white' }}>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{ width: '100%', borderRadius: '5px' }} />
              <h3 style={{ fontSize: '1.1rem', marginTop: '10px' }}>{drink.strDrink}</h3>
              <p style={{ fontSize: '0.8rem', opacity: '0.8' }}>{drink.strCategory}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeFinder;
