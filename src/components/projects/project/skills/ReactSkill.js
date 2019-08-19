import React, { Component } from 'react';
import { FaReact, FaJs, FaCss3, FaHtml5 } from 'react-icons/fa';

export default class ReactSkill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const skill = this.props.skill;
        let display;

        if (skill === "FaReact") {
            display = <FaReact />;
        } else if (skill === "FaJs") {
            display = <FaJs />;
        } else if (skill === "FaCss3") {
            display = <FaCss3 />;
        } else {
            display = <FaHtml5 />;
        }

        return (    
            <div>{display}</div>
       )
    }
} 