import "./Slideshow.css";
import { useState } from "react";

const images = [
    `${import.meta.env.BASE_URL}images/slideshow/student-work1.png`,
    `${import.meta.env.BASE_URL}images/slideshow/student-work2.png`,
    `${import.meta.env.BASE_URL}images/slideshow/student-work3.png`
];

const importAll = (resource) => {
    return Object.keys(resource).sort().map((path) => resource[path]);
};

const Slideshow = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((current) => (current + 1) % images.length);
    };

    const previousSlide = () => {
        setIndex((current) => (current - 1 + images.length) % images.length);
    };

    return (
        <section className="student-slideshow" aria-label="Student work examples" aria-roledescription="carousel">
            <figure className="slideshow-image" aria-live="polite" aria-atomic="true">
                <img src={images[index]} alt={`Student work example ${index + 1}`} />

                <figcaption>
                    <p>STUDENT WORK</p>
                    <h3>Example {index + 1}</h3>
                </figcaption>
            </figure>

            <div className="slideshow-controls">
                <button type="button" onClick={previousSlide} disabled={images.length < 2} aria-label="Previous student work example">
                </button>
                <p>{index + 1} / {images.length}</p>

                <button type="button" onClick={nextSlide} disabled={images.length < 2} aria-label="Next student work example">
                </button>
            </div>
        </section>
    );
};

export default Slideshow;