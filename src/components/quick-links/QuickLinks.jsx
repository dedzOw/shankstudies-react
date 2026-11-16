import "./QuickLinks.css";
import { useEffect, useState } from "react";
import ResourceForm from "../resource-form/ResourceForm";
import ResourceModal from "../resource-modal/ResourceModal";

const apiUrl = import.meta.env.DEV ? "http://localhost:3001/api/useful-links" : "https://shankstudies-backend.onrender.com/api/useful-links";

const UsefulLink = (props) => {
    return (
        <button className="resource-card" type="button" onClick={() => props.onSelect(props.link)}>
            <span className="resource-title">{props.link.title}</span>
            <span className="resource-description">{props.link.description}</span>
            <span className="resource-details-link">View Resource →</span>
        </button>
    );
};

const QuickLinks = (props) => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedResource, setSelectedResource] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const getUsefulLinks = async () => {
            try {
                const response = await fetch(apiUrl, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error("Could not load resources.");
                }

                const data = await response.json();
                setLinks(data);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError("Sorry, the resources could not be loaded. Please refresh to try again.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        getUsefulLinks();

        return () => controller.abort();
    }, []);

    const addResource = (resource) => {
        setLinks((current) => [...current, resource]);
    };

    return (
        <section className="quick-links">
            <div className="content-width">
                <h2>{props.title || "Quick Links"}</h2>

                {loading && <p role="status">Loading resources...</p>}
                {error && <p role="alert">{error}</p>}

                <div className="quick-link-cards">
                    {links.map((link) => (
                        <UsefulLink key={link._id} link={link} onSelect={setSelectedResource} />
                    ))}
                </div>

                {props.showForm && !loading && !error && (
                    <ResourceForm apiUrl={apiUrl} onResourceAdded={addResource} />
                )}

                {selectedResource && (
                    <ResourceModal resource={selectedResource} onClose={() => setSelectedResource(null)} />
                )}
            </div>
        </section>
    );
};

export default QuickLinks;