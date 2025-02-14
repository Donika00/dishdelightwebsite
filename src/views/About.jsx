import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About DishDelights</h1>
        <p className="about-subtitle">Connecting food lovers worldwide.</p>
      </div>
      
      <div className="about-content">
        <p>
          DishDelights is a vibrant community dedicated to uniting food lovers from around the globe.
          We offer a vast collection of recipes that cater to every taste and dietary preference.
          Whether you're an experienced chef or a beginner, DishDelights is your go-to source for cooking inspiration.
        </p>
        
        <p>
          Our goal is to make cooking easy and accessible. We provide detailed recipe descriptions,
          step-by-step instructions, and a personalized favorites section so you can save your best-loved recipes.
        </p>

        <h2 className="about-highlight">Why Choose DishDelights?</h2>
        <ul className="about-list">
          <li>🌎 A worldwide collection of diverse recipes.</li>
          <li>👩‍🍳 Easy-to-follow step-by-step instructions.</li>
          <li>📌 Save your favorite recipes for quick access.</li>
          <li>💡 Learn cooking tips and hacks.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
