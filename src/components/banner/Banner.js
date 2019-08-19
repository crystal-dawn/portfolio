import React from 'react';
import './Banner.css';

const bannerPage = () => {
    return (
        <header className="banner-main">
            <div className="banner-main-wrapper">
                <p className="overlay"></p>
                <img
                    className="banner-main-image"
                    src="https://res.cloudinary.com/dacjqekio/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1566094707/Portfolio/honeycomb-530987_1920.jpg"
                    alt="honeycomb background"
                />
                <p className="banner-slogan">See Why</p>
            </div>
            <div className="banner-heading-wrapper">
                <h1 className="banner-name">Crystal Yungwirth</h1>
                <h2 className="banner-tagline">Front-End Web Developer</h2>
            </div>
        </header>
    )
}

export default bannerPage;