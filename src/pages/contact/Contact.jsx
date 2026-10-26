import "./Contact.css";
import PageBanner from "../../components/page-banner/PageBanner";


const Contact = () => {
    return (
        <main id="contact" className="page">
            <PageBanner heading="GET IN TOUCH" title="Contact Mr. Shank"
            description="Ask a question, request extra help, or schedule a time to meet." />
            <section className="page-section light-section">
                <div className="content-width">
                    <section className="contact-form-card contact-page">
                        <h2>Get in Touch</h2>
                        <p>Please include enough details so Mr. Shank can help you.</p>
                        <p><strong>Email: </strong><a href="mailto:jaret.shank@student.dodea.edu">jaret.shank@student.dodea.edu</a></p>
                        <p><strong>School number:</strong> 757-3365</p>
                        <p><strong>Room:</strong> 253 - Humphreys MS</p>
                        <a className="yellow-button" href="https://classroom.google.com/" target="_blank" rel="noreferrer">Open Google Classroom</a>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default Contact;
