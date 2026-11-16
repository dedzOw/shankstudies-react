import "./ResourceModal.css";
import { useEffect, useRef } from "react";

const ResourceModal = (props) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        dialog.showModal();

        return () => dialog.close();
    }, []);

    const cancelModal = (e) => {
        e.preventDefault();
        props.onClose();
    };

    return (
        <dialog className="resource-modal" ref={dialogRef} onCancel={cancelModal} aria-labelledby="resource-modal-title">
            <div className="resource-modal-header">
                <p className="small-heading">STUDY RESOURCE</p>
                <button className="resource-close" type="button" onClick={props.onClose}>Close ✕</button>
            </div>

            <h2 id="resource-modal-title">{props.resource.title}</h2>
            <p className="resource-modal-description">{props.resource.description}</p>
            <p className="resource-modal-url">{props.resource.url}</p>

            <a className="yellow-button" href={props.resource.url} target="_blank" rel="noreferrer">
                Visit Website →
            </a>
        </dialog>
    );
};

export default ResourceModal;