import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const AboutUS = () => {
    // Set the page title
    useEffect(() => {
        document.title = 'About Us - rm-graphic';
      }, []);
    return(
        <>
            <div className="container">
                <ul className='breadcrumb mt-3'>
                    <li><Link to={'/'}>home</Link></li>
                    <li>about us</li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default AboutUS;