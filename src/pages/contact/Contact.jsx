import "./Contact.css";
import { useState } from "react";
import PageBanner from "../../components/page-banner/PageBanner";

const Contact = () => {
    const [result, setResult] = useState("");
    const [resultType, setResultType] = useState("");
    const [sending, setSending] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (sending) {
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "9a67f152-2479-40a4-9ab3-3e1165dcdbb8");

        setResult("Sending...");
        setResultType("");
        setSending(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setResult("Message sent!");
                setResultType("success");
                form.reset();
            } else {
                setResult("Error: " + (data.message || "Please try again."));
                setResultType("error");
            }
        } catch {
            setResult("Sorry, your message could not be sent. Please try again.");
            setResultType("error");
        } finally {
            setSending(false);
        }
    };

    return (
        <main id="contact" className="page">
            <PageBanner
                heading="GET IN TOUCH"
                title="Contact Mr. Shank"
                description="Use this form to ask a question, request extra help, or schedule a time to meet."
            />

            <section className="page-section light-section">
                <div className="content-width">
                    <section className="contact-form-card">
                        <h2>Send a Message</h2>
                        <p>
                            Please include enough details so Mr. Shank can help you.
                        </p>

                        <form
                            id="contact-form"
                            method="POST"
                            onSubmit={onSubmit}
                            aria-busy={sending}
                        >
                            <input
                                type="hidden"
                                name="subject"
                                value="New message from Shank Studies"
                            />

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="txt-name">Name:</label>
                                    <input
                                        id="txt-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="txt-email">Email:</label>
                                    <input
                                        id="txt-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="txt-message">Message:</label>
                                <textarea
                                    id="txt-message"
                                    name="message"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-submit-row">
                                <button
                                    className="yellow-button"
                                    id="btn-send-message"
                                    type="submit"
                                    disabled={sending}
                                >
                                    {sending ? "Sending..." : "Send Message"}
                                </button>

                                <p
                                    id="result"
                                    className={resultType}
                                    role="status"
                                >
                                    {result}
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default Contact;