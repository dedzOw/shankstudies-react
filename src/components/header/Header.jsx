import "./Header.css";
import { NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <div className="content-width header-content">
                <h1><NavLink to="/"><span>Shank</span> Studies</NavLink></h1>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
