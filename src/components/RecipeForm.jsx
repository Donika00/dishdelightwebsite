import React from "react";

const RecipeForm = ({
  newRecipe,
  setNewRecipe,
  addOrUpdateRecipe,
  editingId,
}) => {
  const handleInputChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  return (
    <div className="recipe-form">
      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        value={newRecipe.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={newRecipe.category}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="time"
        placeholder="Cooking Time"
        value={newRecipe.time}
        onChange={handleInputChange}
      />
      <textarea
        name="details"
        placeholder="Details"
        value={newRecipe.details}
        onChange={handleInputChange}
      />
      <button onClick={addOrUpdateRecipe}>
        {editingId ? "Update Recipe" : "Add Recipe"}
      </button>
    </div>
  );
};

export default RecipeForm; // Ensure Default Export
