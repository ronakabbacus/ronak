import React from "react";
import { Link } from "react-router-dom";
import OurWork from "../components/ourWork";
import Footer from "../components/footer";

const Project = () => {
    return (
        <div>
            <div className="container">
                <ul className='breadcrumb mt-3'>
                    <li><Link to={'/'}>home</Link></li>
                    <li>project</li>
                </ul>
            </div>
            <OurWork />
            <Footer />
        </div>
    );
}

export default Project;