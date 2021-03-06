import React from 'react';
import './Info.css';

/*Format slug from GitHub API data.
 * Projects.json has to have an empty string for name 
 */
const Info = (props) => {
    const name = props.name.replace(/-/gi, " ");

    return (
        <section className="project-info">
            <h3 className="project-links">
                <a className="project-link" href={props.repo} title='GitHub repo'><i className="fab fa-github fa-2x"></i></a>
                <a className="project-link" href={props.livePage}>{name}</a>
            </h3>
            <p className="project-description">{props.description}</p>
        </section>
    )
}

export default Info;