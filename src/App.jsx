import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import RecipeDetail from "./views/RecipeDetail";
import PersonalFavorites from "./views/PersonalFavorites";
import About from "./views/About";
import Contact from "./views/Contact";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/personalfavorites" element={<PersonalFavorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
