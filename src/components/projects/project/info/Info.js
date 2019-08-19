import React from 'react';

const Info = (props) => {
    return (
        <section className="project-info">
            <h3 className="project-name"><a href={props.livePage}> {props.name}</a></h3>
            <p className="project-desription">{props.description}</p>
        </section>
        )
}

export default Info;