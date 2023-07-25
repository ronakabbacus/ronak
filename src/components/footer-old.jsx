import React from "react";
import FooterLogo from '../assets/images/logo.svg';

const Foooter = () => {
    return(
        <footer>
            <div className="container">
                <div className="left-col">
                    <div className="logo">
                        <img src={FooterLogo} alt="Footer_Logo" />
                        <h4>Graphic</h4>
                    </div>
                </div>
                <div className="middle-col">
                    <div className="site-links">
                        <h5>site links</h5>
                        <ul>
                            <li>Projects</li>
                            <li>Introduce</li>
                            <li>Our Service</li>
                            <li>About Us</li>
                            <li>Why Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="right-col"></div>
            </div>
        </footer>
    );
}

export default Foooter;