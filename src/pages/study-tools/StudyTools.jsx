import "./StudyTools.css";
import PageBanner from "../../components/page-banner/PageBanner";
import { Card } from "../../components/cards/Cards";
import QuickLinks from "../../components/quick-links/QuickLinks";


const StudyTools = () => {
    return (
        <main id="study-tools" className="page">
            <PageBanner heading="STUDENT RESOURCES" title="Study Tools" description="Use these tools to examine sources, write clearly, and review historical topics from class." />
            <section className="page-section light-section" id="case">
                <div className="content-width">
                    <p className="small-heading red-heading">HISTORICAL ANALYSIS</p>
                    <h2>Use the C.A.S.E. Method</h2>
                    <p className="section-intro">C.A.S.E. is a simple way to look closely at a historical source before using it as evidence.</p>
                    <section className="case-grid">
                        <Card
                            title="C - Core Identification"
                            description="Identify the basic information: who, what, when, and where."
                        />
                        <Card
                            title="A - Action & Observation"
                            description="Describe what is happening and notice important details."
                        />
                        <Card
                            title="S - Significance"
                            description="Explain why the source matters and what it helps you understand."
                        />
                        <Card
                            title="E - Examine the Source"
                            description="Consider the author, audience, perspective, and possible bias."
                        />
                    </section>
                    <div className="resource-row">
                        <img src="https://dedzow.github.io/csce242/projects/part6/images/CASE%20infographic(1).png" alt="C.A.S.E. historical analysis infographic" />
                        <div>
                            <h3>C.A.S.E. Reference Guide</h3>
                            <p>Keep the full guide open when you are analyzing primary and secondary sources.</p>
                            <a className="blue-button" href="https://dedzow.github.io/csce242/projects/part6/resources/CASE_for_Historical_Analysis.pdf" target="_blank" rel="noreferrer">Open C.A.S.E. Guide PDF</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section" id="writing">
                <div className="content-width">
                    <p className="small-heading red-heading">WRITING SUPPORT</p>
                    <h2>Writing Resources</h2>
                    <section className="resource-grid">
                        <Card
                            title="Social Studies Writing Guide"
                            description="Review expectations for organizing evidence, writing explanations, and responding to historical questions."
                            href="https://dedzow.github.io/csce242/projects/part6/resources/Social_Studies_Writing_Standards.pdf"
                            linkText="Open Writing Guide"
                        />
                        <Card
                            title="Course Standards"
                            description="Read the DoDEA College and Career Ready Standards for Social Studies in grades 6 through 8."
                            href="https://dedzow.github.io/csce242/projects/part6/resources/ccrs_social_studies_grades_6-8_2025-1.pdf"
                            linkText="Open Standards"
                        />
                        <Card
                            title="Course Syllabus"
                            description="Check the course overview, class expectations, and information about extra help."
                            href="https://dedzow.github.io/csce242/projects/part6/resources/grade7_syllabus.pdf"
                            linkText="Open Syllabus"
                        />
                    </section>
                </div>
            </section>
            <QuickLinks title="Helpful History Websites" />
        </main>
    );
};

export default StudyTools;
