import React from 'react';
import './Project.css';
import Skills from './skills/Skills';
import Info from './info/Info';
import Honeycomb from '../../honeycomb/Honeycomb';

const Project = (props) => (
    <div className="project">
        <Info {...props} />
        <div className="skills">
            {props.skills.map((skill, index) => (
                <div className="skill-honeycomb">
                    <Honeycomb className="citrus skill" />
                    <Honeycomb className="citrus skill" />
                    <Skills key={index} skill={skill} />
                    <Honeycomb className="citrus skill" />
                    </div>
                    )
            )}
        </div>
    </div>
)

export default Project;