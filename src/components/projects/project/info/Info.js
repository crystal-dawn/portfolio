import React from 'react';
import './Info.css';

const Info = (props) => {
    return (
        <section className="project-info">
            <h3 className="project-links">
                <a className="project-link" href={props.repo} title='GitHub repo'><i className="fab fa-github fa-2x"></i></a>
                <a className="project-link" href={props.livePage}>{props.name}</a>
            </h3>
            <p className="project-description">{props.description}</p>
        </section>
    )
}

export default Info;