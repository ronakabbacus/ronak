import React, { useState, useEffect } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Projects';
import AboutUS from '../pages/AboutUs';
import Services from '../pages/Services';
import ContactUS from '../pages/ContactUs';
import WhyUs from '../pages/WhyUs';
import Logo from '../assets/images/logo.svg';
import callIcon from '../assets/images/phone-call.svg';
import ProductDetail from './ProductView/ProductDetailPage';
import PrivacyPolicies from '../pages/Policies';
import OurTeam from '../pages/OurTeam';
import MemberDetail from './ourTeam/memberDetail';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a new page is opened
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="header-logo">
              <Link to="/">
                <h1>
                  <img src={Logo} srcSet={Logo} alt="Logo" />
                </h1>
              </Link>
            </div>
            <div className={`right-links ${isMenuOpen ? 'menu-open' : ''}`}>
              <ul className="main-menu">
                <li>
                  <NavLink to="/project" style={({ isActive, isPending }) => { return { color: isActive ? '$AlizarinCrimson' : '$DarkCerulean' }; }} className={ location.pathname.includes('/productDetail') ? 'active' : '' } > Projects </NavLink>
                </li>
                <li>
                  <NavLink to="/our-team" style={({ isActive, isPending }) => { return { color: isActive ? '$AlizarinCrimson' : '$DarkCerulean' }; }} className={ location.pathname.includes('/team-details') ? 'active' : '' } > Our Team </NavLink>
                </li>
                <li>
                  <NavLink to="/services" style={({ isActive, isPending }) => { return { color: isActive ? '$AlizarinCrimson' : '$DarkCerulean' }; }} className={({ isActive, isPending }) => { return isActive ? 'active' : isPending ? 'pending' : ''; }} > Our Service </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" style={({ isActive, isPending }) => { return { color: isActive ? '$AlizarinCrimson' : '$DarkCerulean' }; }} className={({ isActive, isPending }) => { return isActive ? 'active' : isPending ? 'pending' : ''; }} > About Us </NavLink>
                </li>
                <li>
                  <NavLink to="/why-us" style={({ isActive, isPending }) => { return { color: isActive ? '$AlizarinCrimson' : '$DarkCerulean' }; }} className={({ isActive, isPending }) => { return isActive ? 'active' : isPending ? 'pending' : ''; }} > Why Us </NavLink>
                </li>
              </ul>
              <NavLink to="/contact-us" className="contact-btn"><span>Contact Us</span><img src={callIcon} alt="Phone Icon" /></NavLink>
            </div>
            <button className={`menu-toggle-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/ronak" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/PrivacyPolicies" element={<PrivacyPolicies />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/team-details/:id" element={<MemberDetail />} />
      </Routes>
    </div>
  );
}

export default Header;
