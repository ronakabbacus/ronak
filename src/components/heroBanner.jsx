import React from "react";
import heroBannerImg from '../assets/images/Programmer-amico.svg';

const HeroBanner = () => {
    return (
        <section className="hero-banner-section">
            <div className="container">
                <div className="hero-row">
                    <div className="col-left">
                        <h2>Graphic</h2>
                        <p>A global graphic design agency in india</p>
                        <h3>Our Service</h3>
                        <ul>
                            <li>abstract graphic design</li>
                            <li>sticker design</li>
                            <li>mockup design</li>
                            <li>logo design</li>
                            <li>brochure design</li>
                        </ul>
                    </div>
                    <div className="col-right">
                        <img src={heroBannerImg} alt="Hero_Banner_Image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;