import React from 'react';
import './Project.css';
import Skills from './skills/Skills';
import Info from './info/Info';

const Project = (props) => (
    <div className="project">
        <Info {...props} />
        <div className="skills">
            {props.skills.map((skill, index) => <Skills key={index} skill={skill} />)}
        </div>
    </div>
)

export default Project;