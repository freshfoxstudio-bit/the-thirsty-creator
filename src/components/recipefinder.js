import React, { useState, useEffect } from 'react';

const RecipeFinder = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken'); // Default search

    // Replace these with your actual API keys from Edamam
    const APP_ID = "YOUR_APP_ID";
    const APP_KEY = "YOUR_APP_KEY";

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetch(
                    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
                );
                const data = await response.json();
                setRecipes(data.hits);
            } catch (error) {
                console.error("Build Error: API call failed", error);
            }
        };
        getRecipes();
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className="recipe-finder">
            <form onSubmit={getSearch} className="search-form">
                <input 
                    className="search-bar" 
                    type="text" 
                    value={search} 
                    onChange={updateSearch} 
                    placeholder="Search recipes..."
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <div key={recipe.recipe.label} className="recipe-card">
                        <h2>{recipe.recipe.label}</h2>
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        <p>Calories: {Math.round(recipe.recipe.calories)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeFinder;
