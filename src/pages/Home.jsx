import React, {useEffect} from "react";
import HeroBanner from "../components/heroBanner";
import WeSelective from "../components/WeSelective";
import TrustedCompany from "../components/TrustedCompanySlider";
import Footer from "../components/footer";

const Home = () => {
    useEffect(() => {
        // Set the page title when the component is mounted
        document.title = 'Home - rm-graphic';
      }, []);
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