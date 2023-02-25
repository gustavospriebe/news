import React from "react";
import hero from "../assets/images/image-web-3-desktop.jpg";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-img">
                <img src={hero} alt="" />
            </div>
            <div className="hero-container">
                <div className="hero-title">
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>
                <div className="hero-content">
                    <div className="hero-text">
                        <p>We dive into the next evolution of the web that claims to put the power of the plataforms back into the hand of the people. But is it really fulfilling its promise?</p>
                    </div>
                    <div className="hero-button"><p>READ MORE</p></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
