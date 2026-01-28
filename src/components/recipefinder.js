import React, { useState } from 'react';

const RecipeFinder = () => {
  const [recipes] = useState([
    { label: "Classic Margarita", image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg", url: "#" },
    { label: "Old Fashioned", image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg", url: "#" },
    { label: "Mojito", image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg", url: "#" }
  ]);

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'white' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Drink & Recipe Results</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {recipes.map((recipe, index) => (
          <div key={index} style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px' }}>
            <img src={recipe.image} alt={recipe.label} style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ marginTop: '10px' }}>{recipe.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFinder;
