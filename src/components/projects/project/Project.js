import React from 'react';
import './Project.css';
import Skills from './skills/Skills';
import Info from './info/Info';

const Project = (props) => (
    <>
        <Info {...props} />
        <>
            {props.skills.map((skill, index) => <Skills key={index} skill={skill} />)}
        </>
    </>
)

export default Project;