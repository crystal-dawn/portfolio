import React, { Component } from 'react';
import './Projects.css';
import projects from "./Projects.json";
import Project from './project/Project';

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
            error: null,
            projects
        }
    }

    componentDidMount() {
        const clientId = process.env.GITHUB_CLIENT_ID;
        const clientSecret = process.env.GITHUB_CLIENT_SECRET;
        const hostName = "https://api.github.com/users/";
        const searchPath = "crystal-dawn/repos?";
        const searchUrl = new URL(searchPath, hostName);
        const url = `${searchUrl}client_id=${clientId}&client_secret=${clientSecret}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { data, isLoading, error } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }
        if (isLoading) {
            return <p>Loading ...</p>;
        }
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
                <ul>
                    {data
                        .filter(repo => repo.archived === false)
                        .map((repo, index) => (
                            <li key={index}>
                                {repo.description}
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
}