import React from 'react';
import './TitleBlock.css';
import Honeycomb from '../../honeycomb/Honeycomb';


const TitleBlock = () => {
    return (
        <section className="title-block">
            <Honeycomb className="citrus" />
            <h1 className="name">Crystal Yungwirth</h1>
            <h2 className="title">Front-End <br />Web Developer</h2>
        </section>
    )
}

export default TitleBlock;