import React from "react";
import Sliderdata from "../json/images.json";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const TrustedCompany = () => {

  return (
    <section className="trusted-company-section">
      <div className="container">
        <div className="trusted-company-wrp">
          <div className="heading">
            <h2>Trusted by Company like</h2>
          </div>

            <OwlCarousel loop={false} margin={50} nav={true} dots={true} items={7} smartSpeed={1000} slideBy={1} navText={[]}>
                {Sliderdata.images.map((user) => (
                <div className="item" key={user.id}>
                    <img src={user.image} alt={user.title} />
                </div>
                ))}
            </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompany;
