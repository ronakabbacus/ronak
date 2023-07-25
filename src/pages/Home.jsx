import React from "react";
import HeroBanner from "../components/heroBanner";
import WeSelective from "../components/WeSelective";
import TrustedCompany from "../components/TrustedCompanySlider";
import Footer from "../components/footer";

const Home = () => {
    return(
        <div>
            <HeroBanner />
            <WeSelective />
            <TrustedCompany />
            <Footer />
        </div>
    )
}

export default Home;