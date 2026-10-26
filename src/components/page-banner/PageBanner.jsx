import "./PageBanner.css";

const PageBanner = (props) => {
    return (
        <section className="page-banner">
            <div className="content-width">
                <p className="small-heading">{props.heading}</p>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                {props.children}
            </div>
        </section>
    );
};

export default PageBanner;
