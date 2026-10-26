import "./Hero.css";
import { Card } from "../cards/Cards";


const Hero = () => {
    return (
        <section className="hero">
            <div className="content-width hero-content">
                <p className="small-heading">7TH GRADE SOCIAL STUDIES - DODEA - HUMPHREYS MS</p>
                <h2>WELCOME TO<br /><span>MR. SHANK'S</span> CLASS</h2>
                <p>Your one-stop resource for lessons, missed class videos, unit content, and<br />everything you need to succeed in 7th Grade Social Studies.</p>
                <a className="yellow-button" href="https://dedzow.github.io/csce242/projects/part6/resources/grade7_syllabus.pdf" target="_blank" rel="noreferrer">View Class Syllabus</a>
                <section className="hero-cards">
                    <Card title="Google Classroom" description="Assignments, deadlines, and make-up work" href="https://classroom.google.com/" linkText="Open Google Classroom" />
                    <Card title="Missed a Class?" description="Lesson videos will be added by unit" to="/missed-class" linkText="Open Missed a Class" />
                    <Card title="Study Tools" description="Writing guides, maps, and source analysis" to="/study-tools" linkText="Open Study Tools" />
                </section>
            </div>
            <p id="scroll-arrow">â</p>
        </section>
    );
};

export default Hero;
