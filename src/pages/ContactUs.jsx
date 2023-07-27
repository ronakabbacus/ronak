import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import ContactFrom from "../components/ContactFrom";
import Footer from "../components/footer";

const ContactUS = () => {
    
    // Set the page title
    useEffect(() => {
        document.title = 'Contact Us - rm-graphic';
    }, []);
      
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