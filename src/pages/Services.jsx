import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import QRCodeGenerator from "../components/QRCodeGenerator";

const Services = () => {
    // Set the page title
    useEffect(() => {
        document.title = 'Our Services - rm-graphic';
    }, []);
    return(
        <>
            <div className="container">
                <ul className='breadcrumb mt-3'>
                    <li><Link to={'/'}>home</Link></li>
                    <li>our service</li>
                </ul>
            </div>
            <div className="container">
                <QRCodeGenerator />
            </div>
            <Footer />
        </>
    )
}

export default Services;