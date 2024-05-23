// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";


function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
          <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
            <li>Home</li>
            </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "selected" : ""}>
            <li>About</li>
            </NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "selected" : ""}>
            <li>Projects</li>
            </NavLink>
            <NavLink
          to="/search-example"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          <li>Search</li>
        </NavLink>
            <a href="https://www.github.com" target="_blank">my github</a>
              </ul>
      </nav>
    );
  }
  
  export default Navbar;
  