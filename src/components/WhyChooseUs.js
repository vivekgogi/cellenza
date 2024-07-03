// WhyChooseUs.js

import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div className="whychooseus_container">
      <div
        className="whychooseus_heading"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h1>Why Choose Us?</h1>
      </div>

      <div className="whychooseus_content">
        <div
          className="whychooseus_content_icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <i class="fa-solid fa-medal"></i>
        </div>
        <div
          className="whychooseus_content_text"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <h3>Exclusive Quality</h3>
          <p>
            At Cellenza, our commitment to exclusive quality is unwavering. We
            meticulously craft adhesives, coatings, and specialty chemicals that
            surpass industry standards. Our products undergo rigorous testing by
            experienced quality analysts to ensure that only the finest, most
            reliable solutions reach our customers. This dedication to
            excellence defines our brand and establishes Cellenza as a trusted
            name in the market.
          </p>
        </div>
      </div>

      <div className="whychooseus_content">
        <div
          className="whychooseus_content_icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <i class="fa-solid fa-clock"></i>
        </div>
        <div
          className="whychooseus_content_text"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <h3>Always Avaliable</h3>
          <p>
            We understand the urgency of your needs. Cellenza takes pride in
            maintaining a seamless supply chain, ensuring our products are
            always available when you need them. Whether you have planned
            projects or last-minute requirements, our efficient distribution
            network and well-managed inventory guarantee a consistent and
            reliable source for your adhesives, coatings, and specialty
            chemicals.
          </p>
        </div>
      </div>

      <div className="whychooseus_content">
        <div
          className="whychooseus_content_icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* <i class="fa-solid fa-user-tie"></i> */}
          <i class="fa-solid fa-user-check"></i>
        </div>
        <div
          className="whychooseus_content_text"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <h3>Professional and Responsible</h3>
          <p>
            At Cellenza, professionalism and responsibility are fundamental to
            our business. Our experienced team is dedicated to delivering
            high-quality products and promoting transparent, ethical practices
            throughout our operations. From production to customer service,
            professionalism guides our interactions, ensuring a seamless
            experience for clients.
          </p>
        </div>
      </div>

      <div
        className="read_more_btn"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <Link to="/about">Read More</Link>
      </div>
    </div>
  );
};

const WhyUsBox = ({ imgSrc, title, description }) => {
  return (
    <div className="box">
      <div className="img-box">
        <img src={imgSrc} alt="" />
      </div>
      <div className="detail-box">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
