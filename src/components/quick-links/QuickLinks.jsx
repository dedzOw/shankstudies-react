import "./QuickLinks.css";
import { Card } from "../cards/Cards";

const QuickLinks = (props) => {
    return (
        <section className="quick-links">
            <div className="content-width">
                <h2>{props.title || "Quick Links"}</h2>
                <section className="quick-link-cards">
                    <Card title="iCivics" description="Games and civic learning" href="https://www.icivics.org/games" linkText="Visit Website" />
                    <Card title="Khan Academy History" description="U.S. history review" href="https://www.khanacademy.org/humanities/us-history" linkText="Visit Website" />
                    <Card title="Crash Course U.S. History" description="History videos" href="https://thecrashcourse.com/topic/ushistory/" linkText="Visit Website" />
                    <Card title="National Archives" description="Founding documents" href="https://www.archives.gov/founding-docs" linkText="Visit Website" />
                </section>
            </div>
        </section>
    );
};

export default QuickLinks;
