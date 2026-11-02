import "./ImageViewer.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const ImageViewer = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="image-preview"
                type="button"
                onClick={() => setOpen(true)}
                aria-label={`Enlarge ${props.alt}`}
            >
                <img src={props.src} alt={props.alt} />
                <span>Click to enlarge</span>
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: props.src, alt: props.alt }]}
                plugins={[Zoom]}
                carousel={{ finite: true }}
                render={{ buttonPrev: () => null, buttonNext: () => null }}
            />
        </>
    );
};

export default ImageViewer;