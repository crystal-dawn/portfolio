import React, { Component } from 'react';
import './Projects.css';
import projects from "./Projects.json";
import Project from './project/Project';
import axios from 'axios'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects
        }
    }

    componentDidMount() {
        axios
            .get(
                window.encodeURI(
                    `https://api.github.com/users/crystal-dawn?client_id=GITHUB_CLIENT_ID&client_secret=GITHUB_CLIENT_SECRECT`,
                ),
            )
            .then(response => {
                const repos = response.data;
                this.setState({
                    repos,
                    loading: false,
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    loading: false,
                });
            });
    }

    render() {
        return (
            <div className="projects">
                {this.state.projects.map((project, id) =>
                    <Project className="project"
                        key={id}
                        name={project.name}
                        skills={project.skills}
                        description={project.description}
                        livePage={project.livePage}
                        repo={project.repo}
                    />
                )}
            </div>
        )
    }
}