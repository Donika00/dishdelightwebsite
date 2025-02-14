import { useParams } from "react-router-dom";
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
    ingredients: [
      "200g spaghetti",
      "100g pancetta (or bacon), diced",
      "2 large eggs",
      "50g grated Pecorino Romano or Parmesan cheese",
      "2 cloves garlic, whole (for flavor, optional)",
      "Freshly ground black pepper",
      "Salt (for boiling pasta water)",
      "1 tbsp olive oil",
      "Fresh parsley (optional, for garnish)",
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook the spaghetti until al dente. Reserve ½ cup of pasta water and drain.",
      "In a bowl, whisk together the eggs, grated cheese, and a generous amount of black pepper.",
      "Heat 1 tbsp olive oil in a pan over medium heat. Add diced pancetta and cook until crispy.",
      "Reduce heat to low, then add the drained hot spaghetti to the pan with the pancetta.",
      "Remove the pan from heat. Pour the egg and cheese mixture over the spaghetti, stirring quickly.",
      "Plate the pasta and sprinkle with extra cheese and black pepper. Garnish with fresh parsley if desired. Serve immediately.",
    ],
  },
  {
    id: 2,
    image: chicken,
    title: "Chicken Stir Fry",
    category: "Asian",
    time: "30 min",
    details:
      "A quick and healthy stir fry with chicken, vegetables, and soy sauce.",
    ingredients: [
      "2 chicken breasts, sliced",
      "1 bell pepper, sliced",
      "1 onion, sliced",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "1 tsp garlic, minced",
      "1 tsp ginger, minced",
      "1 cup broccoli florets",
    ],
    instructions: [
      "Heat olive oil in a pan over medium heat.",
      "Add garlic and ginger, sauté for 1 minute.",
      "Add sliced chicken and cook until golden brown.",
      "Add onions, bell peppers, and broccoli; stir-fry for 3-4 minutes.",
      "Pour in soy sauce and stir to coat evenly.",
      "Serve hot with rice or noodles.",
    ],
  },
  {
    id: 3,
    image: curry,
    title: "Vegetable Curry",
    category: "Indian",
    time: "40 min",
    details:
      "A flavorful vegetable curry made with a blend of aromatic spices.",
    ingredients: [
      "2 cups mixed vegetables (carrots, potatoes, peas)",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1-inch ginger, minced",
      "2 tbsp curry powder",
      "1 can coconut milk",
      "1 tbsp olive oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat oil in a pan and sauté onions, garlic, and ginger until fragrant.",
      "Add curry powder and stir for 1 minute.",
      "Add vegetables and cook for 5 minutes.",
      "Pour in coconut milk, cover, and simmer for 15-20 minutes.",
      "Season with salt and pepper and serve with rice.",
    ],
  },
  {
    id: 4,
    image: miso,
    title: "Miso Soup",
    category: "Asian",
    time: "15 min",
    details:
      "A traditional Japanese soup made with miso paste, tofu, and seaweed.",
    ingredients: [
      "4 cups water",
      "3 tbsp miso paste",
      "1/2 cup tofu, cubed",
      "1/4 cup green onions, chopped",
      "1/4 cup seaweed",
      "1 tbsp soy sauce (optional)",
    ],
    instructions: [
      "Bring water to a simmer in a pot.",
      "Add tofu and seaweed, simmer for 5 minutes.",
      "Dissolve miso paste in a small bowl with warm water, then add to the pot.",
      "Stir well and add green onions.",
      "Remove from heat and serve warm.",
    ],
  },
];

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="recipe-detail-container">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipePic" />
      <p>
        <strong>Category:</strong> {recipe.category}
      </p>
      <p>
        <strong>Cooking Time:</strong> {recipe.time}
      </p>
      <p>{recipe.details}</p>
      <h2 className="section-title">Ingredients</h2>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="section-title">Instructions</h2>
      <ol className="instructions-list">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
