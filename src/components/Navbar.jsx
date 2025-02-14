import { NavLink } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav>
      <h1 className="logo">DishDelights</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recipes"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/personalfavorites"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Personal Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
