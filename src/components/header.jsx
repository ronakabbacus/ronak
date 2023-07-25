import React from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Projects';
import AboutUS from '../pages/AboutUs';
import Services from '../pages/Services';
import ContactUS from '../pages/ContactUs';
import WhyUs from '../pages/WhyUs';
import Logo from '../assets/images/logo.svg';
import ProductDetail from './ProductView/ProductDetailPage'; // Import the ProductDetail comp
import PrivacyPolicies from '../pages/Policies';
import OurTeam from '../pages/OurTeam';
import MemberDetail from './ourTeam/memberDetail';

// Placeholder ProductDetail component


function Header() {
  const location = useLocation();
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
            <div className="right-links">
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
              <NavLink to="/contact-us" className="contact-btn">
                Contact Us
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/ronak' element={<Home />} />
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
