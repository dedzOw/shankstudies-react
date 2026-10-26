import "./PortalPage.css";
import { NavLink } from "react-router-dom";

const PortalPage = (props) => {
    return (
        <main className="page">
            <section className="portal-banner">
                <div className="content-width">
                    <p className="small-heading">PARENT &amp; GUARDIAN PORTAL</p>
                    <h2>Welcome, Families</h2>
                    <p>Everything you need to stay connected to your student's education.</p>
                </div>
            </section>
            <section className="portal-section">
                <div className="content-width">
                    <nav className="portal-tabs">
                        <NavLink className="portal-tab" to="/parent-portal">About Mr. Shank</NavLink>
                        <NavLink className="portal-tab" to="/standards">DoDEA Standards</NavLink>
                        <NavLink className="portal-tab" to="/student-work">Student Work</NavLink>
                        <NavLink className="portal-tab" to="/schedule-meeting">Schedule a Meeting</NavLink>
                    </nav>
                    {props.children}
                </div>
            </section>
        </main>
    );
};

export default PortalPage;
