import React from "react";
import gallary1 from "../images/g1.png";
import gallary2 from "../images/g2.png";
import gallary3 from "../images/g3.jpg";
import { Link } from "react-router-dom";

export default function Gallary() {
  return (
    <div className="gallary_container">
      <div
        className="gallary_heading"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h1>Our Gallary</h1>
        <p>Adhesives, Glues, Coatings, Sealants, and Specialty Chemicals.</p>
      </div>
      <div className="gallary_images">
        <img
          src={gallary1}
          alt=""
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        />
        <img
          src={gallary2}
          alt=""
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        />
        <img
          src={gallary3}
          alt=""
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        />
      </div>
      <div className="see_more_btn" data-aos="fade-in" data-aos-duration="1500">
        <Link to="/products">See More</Link>
      </div>
    </div>
  );
}
