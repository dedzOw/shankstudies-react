import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="main-nav" aria-label="Main navigation">
            <button
                id="toggle-nav"
                type="button"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="nav-links"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul
                id="nav-links"
                className={menuOpen ? "show-small" : ""}
                onClick={() => setMenuOpen(false)}
            >
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/units">Units 1-5</NavLink></li>
                <li><NavLink to="/missed-class">Missed Class</NavLink></li>
                <li><NavLink to="/study-tools">Study Tools</NavLink></li>
                <li><NavLink className="parent-button" to="/parent-portal">Parent Portal</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;