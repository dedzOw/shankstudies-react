import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Units">Units 1-5</a></li>
                <li><a href="/Missed-Class">Missed Class</a></li>
                <li><a href="/Study-Tools">Study Tools</a></li>
                <li><a href="/Parent-Portal">Parent Portal</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;