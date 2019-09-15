import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <p className="hero-overlay"></p>
            <img
                className="hero-image"
                src="https://res.cloudinary.com/dacjqekio/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1566094707/Portfolio/honeycomb-530987_1920.jpg"
                alt="honeycomb background"
            />
            <p className="hero-tagline">See Why</p>
        </div>
    )
}

export default Hero;