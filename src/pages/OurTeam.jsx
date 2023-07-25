import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import TeamMember from "../components/TeamMember";

const OurTeam = () => {
    return (
        <>
            <div className="container">
                <ul className='breadcrumb'>
                    <li><Link to={'/'}>home</Link></li>
                    <li>Our Team</li>
                </ul>
            </div>
            <TeamMember />
            <Footer />
        </>
    );
}

export default OurTeam;