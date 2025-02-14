import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <h1 className="home-title logo-font">Welcome to DishDelights! 🍽️✨</h1>
        <p className="home-description styled-text">
          Discover a world of flavors with our carefully curated collection of recipes! Whether you're an experienced chef or a beginner in the kitchen, DishDelights offers something for everyone.
        </p>
        <ul className="home-features">
          <li>✔ Browse a wide variety of recipes</li>
          <li>✔ Find step-by-step instructions for easy cooking</li>
          <li>✔ Save and manage your favorite recipes</li>
        </ul>
        <p className="home-description styled-text">Join our community of food lovers and start cooking up something amazing today! 🚀</p>
      </header>
      <div className="home-links">
        <Link to="/recipes" className="home-button">
          Explore Recipes
        </Link>
        <Link to="/about" className="home-button secondary">
          Learn More
        </Link>
      </div>
    </div>
  );
}
