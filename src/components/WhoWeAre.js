import React from "react";
import WhoWeAreImg from "../images/whoweare.webp";
import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <div className="whoweare_container">
      <div className="whoweare_content">
        <h1 data-aos="fade-in" data-aos-duration="1000">
          Who We Are?
        </h1>
        <p data-aos="fade-in" data-aos-duration="2000">
          Who we are at Cellenza extends beyond being manufacturers and
          suppliers; we are architects of excellence in the realm of adhesives,
          coatings, and specialty chemicals. Rooted in Maharashtra and
          celebrated nationwide, we transcend conventional standards. Our
          identity is woven into the fabric of providing not just products, but
          comprehensive stone care solutions that redefine the industry. With a
          relentless pursuit of innovation, operational excellence, and a
          commitment to customer satisfaction, Cellenza emerges as a beacon of
          trust and quality. We are more than a brand; We are a promise,
          Ensuring enduring results that stand the test of time.
        </p>
        <div
          className="know_more_btn"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <Link to="/products">Know More</Link>
        </div>
      </div>

      <div
        className="whoweare_image"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <img src={WhoWeAreImg} alt="" />
      </div>
    </div>
  );
}

export default WhoWeAre;
