// import React from "react";
// import backgroundImg from "../images/carousel-1.jpg";
// import { Link } from "react-router-dom";
// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <img src={backgroundImg} alt="Background" className="bg-image" />
//       <div className="hero-content">
//         <h1
//           data-aos="fade-right"
//           data-aos-duration="1000"
//           style={{ fontWeight: "500" }}
//         >
//           Cellenza
//         </h1>
//         <p
//           data-aos="fade-in"
//           data-aos-duration="2000"
//           style={{ fontWeight: "350" }}
//         >
//           We are manufacturers and suppliers of high-quality adhesives,
//           coatings, and specialty chemicals. With a commitment to excellence,
//           innovation, and customer satisfaction, Cellenza ensures enduring
//           results that elevate your surfaces to their fullest glory.
//         </p>
//         <div
//           className="ctr_buttons"
//           data-aos="slide-up"
//           data-aos-duration="2000"
//         >
//           <Link className="view_products" to="/products">
//             View Products
//           </Link>
//           <Link className="enquire_now" to="/contact">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import carousel1 from "../images/carousel-1.jpg";
import carousel1 from "../images/slide1.jpg";
import carousel2 from "../images/slide2.jpg";
import carousel3 from "../images/slide3.jpg";

function IndividualIntervalsExample() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100 hero" src={carousel1} alt="First slide" />
        <Carousel.Caption>
          {/* <h1 className="heroh1">Cellenza 1</h1>
          <p className="herop">
            We are manufacturers and suppliers of high-quality adhesives,
            coatings, and specialty chemicals. With a commitment to excellence,
            innovation, and customer satisfaction, Cellenza ensures enduring
            results that elevate your surfaces to their fullest glory.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 hero" src={carousel2} alt="First slide" />
        <Carousel.Caption>
          {/* <h1 className="heroh1">Cellenza 2</h1>
          <p className="herop">
            We are manufacturers and suppliers of high-quality adhesives,
            coatings, and specialty chemicals. With a commitment to excellence,
            innovation, and customer satisfaction, Cellenza ensures enduring
            results that elevate your surfaces to their fullest glory. Yes
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 hero" src={carousel3} alt="First slide" />
        <Carousel.Caption>
          {/* <h1 className="heroh1">Cellenza 3</h1>
          <p className="herop">
            We are manufacturers and suppliers of high-quality adhesives,
            coatings, and specialty chemicals. With a commitment to excellence,
            innovation, and customer satisfaction, Cellenza ensures enduring
            results that elevate your surfaces to their fullest glory.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
