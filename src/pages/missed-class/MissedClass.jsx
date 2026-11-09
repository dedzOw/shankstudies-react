import { useEffect, useState } from "react";
import PageBanner from "../../components/page-banner/PageBanner";
import { VideoCard } from "../../components/cards/Cards";

const MissedClass = () => {
    const [units, setUnits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getUnits = async () => {
            try {
                const response = await fetch("https://shankstudies-backend.onrender.com/api/studies");

                if (!response.ok) {
                    throw new Error("Could not load lessons.");
                }

                const data = await response.json();
                setUnits(data);
            } catch {
                setError("Sorry, the lessons could not be loaded. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        getUnits();
    }, []);

    return (
        <main id="missed-class" className="page">
            <PageBanner heading="LESSON VIDEOS" title="Missed Class?" description="Choose your unit to watch lesson videos and review what you missed.">
                <a className="yellow-button" href="https://classroom.google.com/" target="_blank" rel="noreferrer">Open Google Classroom</a>
            </PageBanner>

            <section className="page-section light-section">
                <div className="content-width">
                    {loading && <p role="status">Loading lessons...</p>}
                    {error && <p role="alert">{error}</p>}

                    <section className="video-grid" id="unit-list">
                        {units.map((unit) => (
                            <VideoCard key={unit._id} unit={unit} />
                        ))}
                    </section>
                </div>
            </section>
        </main>
    );
};

export default MissedClass;