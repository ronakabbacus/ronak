import React from "react";
import { Link } from "react-router-dom";
import ContactFrom from "../components/ContactFrom";
import Footer from "../components/footer";

const ContactUS = () => {
    return (
        <>
            <div className="container">
                <ul className='breadcrumb mt-3'>
                    <li><Link to={'/'}>home</Link></li>
                    <li>contact us</li>
                </ul>
            </div>
            <ContactFrom />
            <Footer />
        </>
    );
}

export default ContactUS;