import React from 'react';
import './Header.css';
import Hero from './hero/Hero';
import TitleBlock from './title-block/TitleBlock';


const heroPage = () => {
    return (
        <header className="header-wrapper">
            <Hero />
            <TitleBlock />
        </header>
    )
}

export default heroPage;