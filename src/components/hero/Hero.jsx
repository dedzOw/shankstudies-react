import "./Hero.css";
import { NavLink } from "react-router-dom";

const HeroCard = ({ title, description, href, to }) => {
    const content = (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    );

    if (href) {
        return (
            <a
                className="hero-card"
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return (
        <NavLink className="hero-card" to={to}>
            {content}
        </NavLink>
    );
};

const Hero = () => {
    return (
        <section className="hero">
            <div className="content-width hero-content">
                <p className="small-heading">
                    7TH GRADE SOCIAL STUDIES - DODEA - HUMPHREYS MS
                </p>

                <h2>
                    WELCOME TO<br />
                    <span>MR. SHANK'S</span> CLASS
                </h2>

                <p>
                    Your one-stop resource for lessons, missed class videos,
                    unit content, and<br />
                    everything you need to succeed in 7th Grade Social Studies.
                </p>

                <a
                    className="yellow-button"
                    href="https://dedzow.github.io/csce242/projects/part6/resources/grade7_syllabus.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Class Syllabus
                </a>

                <section className="hero-cards">
                    <HeroCard
                        title="Google Classroom"
                        description="Assignments, deadlines, and make-up work"
                        href="https://classroom.google.com/"
                    />

                    <HeroCard
                        title="Missed a Class?"
                        description="Lesson videos will be added by unit"
                        to="/missed-class"
                    />

                    <HeroCard
                        title="Study Tools"
                        description="Writing guides, maps, and source analysis"
                        to="/study-tools"
                    />
                </section>
            </div>

            <p id="scroll-arrow" aria-hidden="true">⌄</p>
        </section>
    );
};

export default Hero;