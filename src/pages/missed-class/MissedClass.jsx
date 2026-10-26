import PageBanner from "../../components/page-banner/PageBanner";
import { VideoCard } from "../../components/cards/Cards";
import units from "../../data/units";


const MissedClass = () => {
    return (
        <main id="missed-class" className="page">
            <PageBanner heading="LESSON VIDEOS" title="Missed Class?" description="Lesson videos will be added here by unit. Until then, check Google Classroom for missed work and class materials."><a className="yellow-button" href="https://classroom.google.com/" target="_blank" rel="noreferrer">Open Google Classroom</a></PageBanner>
            <section className="page-section light-section">
                <div className="content-width">
                    <section className="video-grid" id="unit-list">{units.map((unit) => <VideoCard key={unit.id} unit={unit} />)}</section>
                </div>
            </section>
        </main>
    );
};

export default MissedClass;
