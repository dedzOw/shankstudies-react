import "./ResourceForm.css";
import { useState } from "react";

const validateResource = (resource) => {
    if (resource.title.length < 3 || resource.title.length > 80) {
        return "The title must contain 3–80 characters.";
    }

    if (resource.description.length < 10 || resource.description.length > 500) {
        return "The description must contain 10–500 characters.";
    }

    const urlPattern = /^https?:\/\/[a-z0-9.-]+\.[a-z]{2,}(?::\d{1,5})?(?:[/?#][^\s]*)?$/i;

    if (resource.url.length > 500 || !urlPattern.test(resource.url)) {
        return "Enter a website URL beginning with http:// or https://, with a maximum of 500 characters.";
    }

    return "";
};

const ResourceForm = (props) => {
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState("");
    const [resultType, setResultType] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        if (sending) {
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        const resource = {
            title: formData.get("title").trim(),
            url: formData.get("url").trim(),
            description: formData.get("description").trim()
        };

        const error = validateResource(resource);

        if (error) {
            setResult(error);
            setResultType("error");
            return;
        }

        setSending(true);
        setResult("Adding your resource...");
        setResultType("");

        try {
            const response = await fetch(props.apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(resource)
            });

            const data = await response.json();

            if (!response.ok) {
                setResult(data.message || "The resource could not be added.");
                setResultType("error");
                return;
            }

            props.onResourceAdded(data);
            form.reset();

            setResult("Resource added! You can find it in the list above.");
            setResultType("success");
        } catch {
            setResult("Could not connect to the server. Please try again.");
            setResultType("error");
        } finally {
            setSending(false);
        }
    };

    return (
        <form className="resource-form" onSubmit={onSubmit} noValidate aria-busy={sending}>
            <p className="small-heading red-heading">HELP YOUR CLASSMATES</p>
            <h3>Share a Study Resource</h3>
            <p>Found something helpful? Share a history website, video, or study guide.</p>

            <div className="resource-form-fields">
                <label htmlFor="resource-title">
                    Resource Title
                    <input id="resource-title" name="title" type="text" minLength={3} maxLength={80} required />
                </label>

                <label htmlFor="resource-url">
                    Website URL
                    <input id="resource-url" name="url" type="url" maxLength={500} placeholder="https://example.com" required />
                </label>

                <label htmlFor="resource-description">
                    Short Description
                    <textarea id="resource-description" name="description" minLength={10} maxLength={500} rows={4} required></textarea>
                </label>
            </div>

            <button className="yellow-button" type="submit" disabled={sending}>
                {sending ? "Adding..." : "Share Resource"}
            </button>

            <p className={`resource-result ${resultType}`} role={resultType === "error" ? "alert" : "status"}>
                {result}
            </p>
        </form>
    );
};

export default ResourceForm;