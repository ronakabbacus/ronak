import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Services = () => {
    return(
        <>
            <div className="container">
                <ul className='breadcrumb mt-3'>
                    <li><Link to={'/'}>home</Link></li>
                    <li>our service</li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default Services;