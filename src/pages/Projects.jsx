import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import OurWork from "../components/ourWork";
import Footer from "../components/footer";

const Project = () => {
    useEffect(() => {
        // Set the page title when the component is mounted
        document.title = 'Project - rm-graphic';
      }, []);
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