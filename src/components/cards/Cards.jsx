import "./Cards.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Card = (props) => {
    return (
        <article className="content-card">
            {props.number && <p className="number">{props.number}</p>}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {props.href && (
                <a href={props.href} target="_blank" rel="noreferrer">
                    {props.linkText} &rarr;
                </a>
            )}
            {props.to && (
                <NavLink to={props.to}>{props.linkText} &rarr;</NavLink>
            )}
        </article>
    );
};

export const UnitCard = (props) => {
    return (
        <HashLink className="unit-card" to={`/units#${props.unit.anchor}`}>
            <p>{props.unit.unit}</p>
            <h3>{props.unit.title}</h3>
            <span>{props.unit.summary}</span>
        </HashLink>
    );
};

export const VideoCard = (props) => {
    return (
        <article className="video-card">
            <p>{props.unit.unit}</p>
            <h3>{props.unit.title}</h3>
            <div className="video-placeholder">{props.unit.unit} lesson video</div>
            <p className="video-description">{props.unit.description}</p>
            <HashLink to={`/units#${props.unit.anchor}`}>
                Review Unit {props.unit.id} topics &rarr;
            </HashLink>
        </article>
    );
};

export const StandardCard = (props) => {
    return (
        <article>
            <p>{props.number}</p>
            <div>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </article>
    );
};

export const StudentWorkCard = (props) => {
    return (
        <article>
            <header><p>{props.unit}</p><span>Example</span></header>
            <div><h3>Placeholder</h3></div>
        </article>
    );
};
