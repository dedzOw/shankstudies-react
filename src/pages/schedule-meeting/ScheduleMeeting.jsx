import PortalPage from "../../components/portal-page/PortalPage";
import { Card } from "../../components/cards/Cards";
import { NavLink } from "react-router-dom";

const ScheduleMeeting = () => {
    return (
        <PortalPage>
            <h2 className="portal-page-title">Schedule a Meeting</h2><p className="portal-page-intro">Families can contact Mr. Shank through the school or Google Classroom to request a meeting.</p><section className="meeting-card">
                <h3>Request a Meeting</h3>
                <NavLink className="blue-button" to="/contact">Contact Mr. Shank →</NavLink>
            </section><section className="meeting-details">
                <Card title="EMAIL" description="jaret.shank@student.dodea.edu" />
                <Card title="SCHOOL NUMBER" description="757-3365" />
                <Card title="MEETINGS" description="Contact the Mr. Shank for available times" />
                <Card title="EXTRA HELP" description="Available after school and during class" />
            </section>
        </PortalPage>
    );
};

export default ScheduleMeeting;
