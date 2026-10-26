import "./UnitDetail.css";
import { Card } from "../cards/Cards";

const UnitDetail = (props) => {
    return (
        <article className="unit-detail" id={props.unit.anchor}>
            <p className="unit-label">{props.unit.unit}</p>
            <h2>{props.unit.title}</h2>
            <p>{props.unit.description}</p>
            <section className="topic-list">
                {props.unit.topics.map((topic) => (
                <Card key={topic.title} title={topic.title} description={topic.description} />
                ))}
            </section>
            <a className="blue-button" href="https://classroom.google.com/" target="_blank" rel="noreferrer">
                Open Unit {props.unit.id} Materials in Google Classroom
            </a>
        </article>
    );
};

export default UnitDetail;
