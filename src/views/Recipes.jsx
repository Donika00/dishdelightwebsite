import { useState } from "react";
import { Link } from "react-router-dom";
import spagetti from "../assets/spagetti.jpg";
import chicken from "../assets/chicken.png";
import curry from "../assets/curry.png";
import miso from "../assets/miso.jpg";
import sushi from "../assets/sushi.jpg";
import pizza from "../assets/pizza.jpg";
const recipeData = [
  {
    id: 1,
    image: spagetti,
    title: "Spaghetti Carbonara",
    category: "Italian",
    time: "25 min",
    details:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    id: 2,
    image: chicken,
    title: "Chicken Stir Fry",
    category: "Asian",
    time: "30 min",
    details:
      "A quick and healthy stir fry with chicken, vegetables, and soy sauce.",
  },
  {
    id: 3,
    image: curry,
    title: "Vegetable Curry",
    category: "Indian",
    time: "40 min",
    details:
      "A flavorful vegetable curry made with a blend of aromatic spices.",
  },
  {
    id: 4,
    image: miso,
    title: "Miso Soup",
    category: "Asian",
    time: "15 min",
    details:
      "A traditional Japanese soup made with miso paste, tofu, and seaweed.",
  },
  {
    id: 5,
    image: sushi,
    title: "Sushi Rolls",
    category: "Asian",
    time: "50 min",
    details:
      "Traditional Japanese sushi rolls made with rice, nori, fresh fish, and vegetables.",
  },
  {
    id: 6,
    image: pizza,
    title: "Margherita Pizza",
    category: "Italian",
    time: "30 min",
    details:
      "A classic Italian pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil.",
  },
];
function Recipes() {
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredRecipes = recipeData.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(filter.toLowerCase()) &&
      (categoryFilter === "" || recipe.category === categoryFilter)
  );

  return (
    <div className="recipes-container">
      <h1 className="recipes-heading">DishDelights Recipes</h1>

      {/* Search & Filter Controls */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-field"
        />
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-filter"
        >
          <option value="">All Categories</option>
          <option value="Italian">Italian</option>
          <option value="Asian">Asian</option>
          <option value="Indian">Indian</option>
        </select>
      </div>

      {/* Recipe List */}
      <div className="recipe-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipeImage"
              />
              <h3>{recipe.title}</h3>
              <p>Category: {recipe.category}</p>
              <p>Cooking Time: {recipe.time}</p>
              <Link to={`/recipes/${recipe.id}`} className="details-link">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="no-results">No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Recipes;
