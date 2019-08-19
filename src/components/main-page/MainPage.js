import React from 'react';
import './MainPage.css';

const MainPage = () => {
    return (
        <header className="main-banner">
            <div className="main-banner-wrapper">
                <p className="overlay"></p>
                <img
                    className="main-banner-image"
                    src="https://res.cloudinary.com/dacjqekio/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1566094707/Portfolio/honeycomb-530987_1920.jpg"
                    alt="honeycomb background"
                />
                <p className="main-slogan">See Why</p>
            </div>
            <div className="main-heading-wrapper">
                <h1 className="main-name">Crystal Yungwirth</h1>
                <h2 className="main-tagline">Front-End Web Developer</h2>
            </div>
        </header>
    )
}

export default MainPage;