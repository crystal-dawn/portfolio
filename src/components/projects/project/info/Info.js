import React from 'react';

const Info = (props) => {
    return (
        <section className="project-info">
            <h3 className="project-links">
                <a href={props.repo}><i className="fab fa-github fa-2x"></i></a>
                <a href={props.livePage}>{props.name}</a>
            </h3>
            <p className="project-description">{props.description}</p>
        </section>
    )
}

export default Info;