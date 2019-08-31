import React from 'react';
import './TitleBlock.css';
import Honeycomb from '../../honeycomb/Honeycomb';


const TitleBlock = () => {
    return (
        <section className="title-block">
            <h1 className="name">Crystal Yungwirth</h1>
            <h2 className="title">Front-End <br />Web Developer</h2>
            <Honeycomb className="citrus" />
        </section>
    )
}

export default TitleBlock;