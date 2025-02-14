import React from "react";

const RecipeList = ({ favorites, editRecipe, removeRecipe }) => {
  return (
    <div className="recipe-list">
      {favorites.length === 0 ? (
        <p>No favorite recipes added yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Cooking Time:</strong> {recipe.time}</p>
            <p>{recipe.details}</p>
            <button onClick={() => editRecipe(recipe)}>Edit</button>
            <button onClick={() => removeRecipe(recipe.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList; 