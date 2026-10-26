import PortalPage from "../../components/portal-page/PortalPage";
import { Card } from "../../components/cards/Cards";


const ParentPortal = () => {
    return (
        <PortalPage>
            <section className="portal-about">
                <article className="teacher-card">
                    <div className="teacher-card-top">
                        <p>Mr. Shank</p>
                    </div>
                    <div className="teacher-card-bottom">
                        <h3>Mr. Shank</h3>
                        <p>7th Grade Social Studies</p>
                        <span>Room 253 - Humphreys MS</span>
                    </div>
                </article>
                <div>
                    <h2>About Mr. Shank</h2>
                    <p>Mr. Shank teaches 7th Grade Social Studies at Humphreys Middle School. The course follows U.S. history from pre-Columbian America through the Civil War.</p>
                    <p>Students work with maps, primary and secondary sources, readings, research projects, presentations, and class discussions. Assignments are posted in Google Classroom, and grades are posted in Aspen.</p>
                    <section className="contact-details">
                        <Card title="SUBJECT" description="7th Grade Social Studies" />
                        <Card title="ROOM" description="Room 253 - Humphreys MS" />
                        <Card title="EXTRA HELP" description="After school or during class" />
                        <Card title="MAKE-UP WORK" description="Check Google Classroom or ask Mr. Shank" />
                    </section>
                </div>
            </section>
        </PortalPage>
    );
};

export default ParentPortal;
