import "./QuickLinks.css";
import { useEffect, useState } from "react";

const UsefulLink = (props) => {
    return (
        <a
            className="content-card"
            href={props.link.url}
            target="_blank"
            rel="noreferrer"
        >
            <h3>{props.link.title}</h3>
            <p>{props.link.description}</p>
        </a>
    );
};

const QuickLinks = (props) => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getUsefulLinks = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.BASE_URL}json/useful-links.json`
                );

                if (!response.ok) {
                    throw new Error("Could not load links.");
                }

                const data = await response.json();
                setLinks(data);
            } catch {
                setError("Sorry, the useful links could not be loaded.");
            } finally {
                setLoading(false);
            }
        };

        getUsefulLinks();
    }, []);

    return (
        <section className="quick-links">
            <div className="content-width">
                <h2>{props.title || "Quick Links"}</h2>

                {loading && <p role="status">Loading links...</p>}
                {error && <p role="alert">{error}</p>}

                <section className="quick-link-cards">
                    {links.map((link) => (
                        <UsefulLink key={link._id} link={link} />
                    ))}
                </section>
            </div>
        </section>
    );
};

export default QuickLinks;