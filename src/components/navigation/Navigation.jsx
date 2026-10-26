import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav" aria-label="Main navigation">
            <ul>
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
