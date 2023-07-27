import React from "react";
import {NavLink, Link} from "react-router-dom";
import FooterLogo from '../assets/images/logo.svg';
import twitter from '../assets/images/twitter.svg';
import facebook from '../assets/images/facebook.svg';
import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg';
import phone from '../assets/images/phone-solid.svg';
import envelope from '../assets/images/envelope-solid.svg';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row footer-wrp">
                    <div className="left-col">
                        <div className="footer-logo-col">
                            <div className="logo">
                                <img src={FooterLogo} alt="Footer_Logo" />
                                <h4>Graphic</h4>
                                <p>A global software design and development agency</p>
                            </div>
                            <ul>
                                <li><Link to={'/https://www.twitter.com'}><img src={twitter} alt="Twitter" /></Link></li>
                                <li><Link to={'/https://www.facebook.com'}><img src={facebook} alt="Facebook" /></Link></li>
                                <li><Link to={'/https://www.linkedin.com'}><img src={linkedin} alt="Linkedin" /></Link></li>
                                <li><Link to={'/https://www.instagram.com'}><img src={instagram} alt="Instagram" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="middle-col">
                        <div className="site-links">
                            <h5>site links</h5>
                            <ul>
                                <li><NavLink to="/project">Projects</NavLink></li>
                                <li><NavLink to="/our-team">Our Team</NavLink></li>
                                <li><NavLink to="/services">Our Service</NavLink></li>
                                <li><NavLink to="/about-us">About Us</NavLink></li>
                                <li><NavLink to="/why-us">Why Us</NavLink></li>
                                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="contact-info">
                            <h5>contact info</h5>
                            <ul>
                                <li><img src={envelope} alt="Email" /><a href="mailto:info@email.com">info@email.com</a></li>
                                <li><img src={phone} alt="Phone" /><a href="tel:+91 9974628288">+91 99746 28288</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="privacy-policies">
                <Link to={'/PrivacyPolicies'}>&copy; {currentYear} Your Company. All rights reserved.</Link>
            </div>
        </footer>
    );
}

export default Footer;