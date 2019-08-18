import React, { Component } from 'react';
import './Projects.css';
import projects from "./Projects.json";
import Project from './project/Project';

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects
        }
    }

    render() {
        return (
            <div>{this.state.projects.map((project, id) =>
                <Project key={id} name={project.name} skills={project.skills} />
                )}
                </div>
            )
    }
}