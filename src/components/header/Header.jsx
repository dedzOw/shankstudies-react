import "./Header.css";

const Header = () => {
    return (
        <header className="main-header">
            <img id="logo" src ={logo} alt="Shank Studies Logo" />
            <h1>Shank Studies</h1>
            <Navigation />
        </header>
    );

};

export default Header;