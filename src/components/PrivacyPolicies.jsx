import React from "react";
import { Link } from 'react-router-dom';

const PrivacyPolicies = () => {
    return (
        <div className="container">
            <div className="row">
                <ul className='breadcrumb'>
                    <li><Link to={'/'}>home</Link></li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>heading</h2>
                    <p>content</p>
                    <ul>
                        <li>content</li>
                    </ul>
                    <h2>heading</h2>
                    <ul>
                        <li>content</li>
                    </ul>
                    <p>content</p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicies;