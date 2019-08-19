import React from 'react';
import './Project.css';
import ReactSkill from './skills/ReactSkill';

const Project = (props) => (
    <>
        <h3>{props.name}</h3>
        <>
            {props.skills.map((skill, index) => <ReactSkill key={index} skill={skill} />)}
        </>

    </>
)

export default Project;