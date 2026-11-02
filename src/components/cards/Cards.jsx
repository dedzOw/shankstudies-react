import "./Cards.css";
import { motion, useReducedMotion } from "motion/react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Card = (props) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            className="content-card"
            initial={reduceMotion ? false : { opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={reduceMotion ? {} : { scale: 1.04 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
        >
            {props.number && <p className="number">{props.number}</p>}

            <h3>{props.title}</h3>
            <p>{props.description}</p>

            {props.href && (
                <a href={props.href} target="_blank" rel="noreferrer">
                    {props.linkText} &rarr;
                </a>
            )}

            {props.to && (
                <NavLink to={props.to}>
                    {props.linkText} &rarr;
                </NavLink>
            )}
        </motion.article>
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

            <iframe
                src={props.unit.video_url}
                title={props.unit.video_title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <p className="video-description">
                {props.unit.description}
            </p>

            <HashLink to={props.unit.review_link.replace("units.html", "/units")}>
                {props.unit.review_text} &rarr;
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
            <header>
                <p>{props.unit}</p>
                <span>Example</span>
            </header>

            <div>
                <h3>Placeholder</h3>
            </div>
        </article>
    );
};