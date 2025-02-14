import { useState } from "react";

function RecipeCard({ recipe, addToFavorites }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category}</p>
      <p>Cooking Time: {recipe.time}</p>
      <button onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
    </div>
  );
}

export default RecipeCard;
