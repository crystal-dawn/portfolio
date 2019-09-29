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
            projects,
        }
    }

    componentDidMount() {
    /* Build up GitHub URL */
    /*TODO: GitHub authorization so all components of projects come from GitHub */
        const clientId = process.env.GITHUB_CLIENT_ID;
        const clientSecret = process.env.GITHUB_CLIENT_SECRET;
        const hostName = "https://api.github.com/users/";
        const searchPath = "crystal-dawn/repos?";
        const searchUrl = new URL(searchPath, hostName);
        const url = `${searchUrl}client_id=${clientId}&client_secret=${clientSecret}`;
    /* Fetch */
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
        const { projects, data, isLoading, error } = this.state;
        {/* Merge the existing project array with imported GitHub API data */}
        const merged = [];

        projects.forEach(project => {
            merged.push({
                ...project,
                ...(data.find(repo => repo.id == project.id))
            });
        })

        console.log(merged);
        if (error) {
            return <p>{error.message}</p>;
        }
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div className="projects">
                {merged.map(project =>
                    <Project className="project"
                        key={project.id}
                        name={project.name}
                        skills={project.skills}
                        description={project.description}
                        livePage={project.livePage}
                        repo={project.clone_url}
                    />
                )}
            </div>
        )
    }
}