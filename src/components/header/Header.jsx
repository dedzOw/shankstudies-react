import Navigation from "../navigation/Navigation";
import "./Header.css";
function Header() {
  return (
    <header className="main-header">
      <div className="content-width header-content">
        <h1><span>Shank</span> Studies</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;