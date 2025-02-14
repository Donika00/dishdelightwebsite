import { useState, useEffect } from "react";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";

function PersonalFavorites() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    category: "",
    time: "",
    details: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addOrUpdateRecipe = () => {
    if (!newRecipe.title.trim()) return; // Prevent empty recipes
    if (editingId) {
      // Update existing recipe
      setFavorites(
        favorites.map((recipe) =>
          recipe.id === editingId ? { ...recipe, ...newRecipe } : recipe
        )
      );
      setEditingId(null);
    } else {
      // Add new recipe
      setFavorites([...favorites, { id: Date.now(), ...newRecipe }]);
    }
    setNewRecipe({ title: "", category: "", time: "", details: "" }); // Reset form
  };

  const editRecipe = (recipe) => {
    setNewRecipe(recipe);
    setEditingId(recipe.id);
  };

  const removeRecipe = (id) => {
    setFavorites(favorites.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="favorites-container">
      <h1 className="favorites-heading">Personal Favorite Recipes</h1>
      <RecipeForm
        newRecipe={newRecipe}
        setNewRecipe={setNewRecipe}
        addOrUpdateRecipe={addOrUpdateRecipe}
        editingId={editingId}
      />
      <RecipeList
        favorites={favorites}
        editRecipe={editRecipe}
        removeRecipe={removeRecipe}
      />
    </div>
  );
}

export default PersonalFavorites;
