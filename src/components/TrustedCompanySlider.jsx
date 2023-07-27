import React from "react";
import Sliderdata from "../json/images.json";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const TrustedCompany = () => {

  const options = {
    loop: false,
    margin: 50,
    responsiveClass: true,
    nav: true,
    dots: true,
    dotsEach: 2,
    autoplay: false,
    slideBy: 1,
    navText: [],
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        400: {
            items: 1,
        },
        600: {
            items: 3,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 7,
        }
    },
};

  return (
    <section className="trusted-company-section">
      <div className="container">
        <div className="trusted-company-wrp">
          <div className="heading">
            <h2>Trusted by Company like</h2>
          </div>

            <OwlCarousel {...options}>
              {Sliderdata.images.slice(0, 10).map((user) => (
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
