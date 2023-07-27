import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const WhyUs = () => {
    // Set the page title
    useEffect(() => {
        document.title = 'Why Us - rm-graphic';
    }, []);
    return (
        <>
            <div className="container">
                <ul className='breadcrumb mt-3'>
                    <li><Link to={'/'}>home</Link></li>
                    <li>why us</li>
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default WhyUs;