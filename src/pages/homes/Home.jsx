import "./Home.css";
import Hero from "../../components/hero/Hero";
import { Card, UnitCard } from "../../components/cards/Cards";
import QuickLinks from "../../components/quick-links/QuickLinks";
import units from "../../data/units";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <main id="home" className="page">
            <Hero />
            <section className="units-section">
                <div className="content-width">
                    <div className="section-title-row">
                        <div>
                            <p className="small-heading">FULL CURRICULUM</p>
                            <h2>Course Units</h2>
                        </div>
                        <NavLink className="section-link" to="/units">View All Units →</NavLink>
                    </div>
                    <section className="unit-cards">{units.map((unit) => <UnitCard key={unit.id} unit={unit} />)}</section>
                </div>
            </section>
            <section className="guide-section">
                <div className="content-width">
                    <p className="small-heading red-heading">STUDENT GUIDE</p>
                    <h2>How to Use This Site</h2>
                    <section className="guide-cards">
                        <Card
                            number="01"
                            title="Missed a Class?"
                            description="Choose your unit to find lesson videos and make-up resources."
                            to="/missed-class"
                            linkText="Open Missed Class Page"
                        />
                        <Card
                            number="02"
                            title="Need to Check Work?"
                            description="Find assignments, deadlines, missing work, and grades in Google Classroom."
                            href="https://classroom.google.com/"
                            linkText="Open Google Classroom"
                        />
                        <Card
                            number="03"
                            title="Ready to Review?"
                            description="Use maps, writing guides, and source-analysis tools to prepare for class."
                            to="/study-tools"
                            linkText="Open Study Tools"
                        />
                        <Card
                            number="04"
                            title="Parents & Guardians"
                            description="Find course information, standards, and future meeting information."
                            to="/parent-portal"
                            linkText="Open Parent Portal"
                        />
                    </section>
                </div>
            </section>
            <QuickLinks />
            <section className="teacher-section">
                <div className="content-width teacher-content">
                    <div className="teacher-image"><p>Mr. Shank</p></div>
                    <div>
                        <p className="small-heading">YOUR TEACHER</p>
                        <h2>Meet Mr. Shank</h2>
                        <p>Mr. Shank teaches 7th Grade Social Studies in Room 253 at Humphreys Middle School. His course traces U.S. history from pre-Columbian America through the Civil War. Assignments are posted in Google Classroom, grades are updated in Aspen, and extra help is available by appointment.</p>
                        <NavLink className="yellow-button" to="/parent-portal">About Mr. Shank →</NavLink>
                        <NavLink className="outline-button" to="/contact">Contact Mr. Shank</NavLink>
                    </div>
                </div>
            </section>
            <section className="bottom-links">
                <div className="content-width bottom-link-cards">
                    <Card
                        title="DODEA Standards"
                        description="See the standards that guide 7th Grade Social Studies."
                        to="/standards"
                        linkText="Open Standards"
                    />
                    <Card
                        title="Class Syllabus"
                        description="Read course expectations, policies, and important information."
                        href="https://dedzow.github.io/csce242/projects/part6/resources/grade7_syllabus.pdf"
                        linkText="Open Syllabus"
                    />
                    <Card
                        title="Extra Help"
                        description="Extra help is available before or after school by appointment."
                        to="/parent-portal"
                        linkText="Open Contact Information"
                    />
                </div>
            </section>
        </main>
    );
};

export default Home;
