import React, {useEffect} from "react";
import Footer from "../components/footer";
import PrivacyPolicies from "../components/PrivacyPolicies";

const Policies = () => {
    
    // Set the page title
    useEffect(() => {
        document.title = 'Privacy Policies - rm-graphic';
    }, []);

    return (
        <>
            <PrivacyPolicies />
            <Footer />
        </>
    );
}

export default Policies;