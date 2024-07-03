import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import whoweare from "../images/whoweare.webp";
import company from "../images/company.png";
import iso from "../images/iso2.jpg";
import mission from "../images/mission.jpg";
import vision from "../images/vision.jpg";

function AboutPage() {
  return (
    <div>
      <Header />

      <div className="about_section">
        <div
          className="about_header"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h1>About Us</h1>
          <h6>Unveiling a Legacy of Quality, Innovation, and Commitment</h6>
          {/* <p>
            Whether you aspire to <span>Become a Certified Distributor</span>,{" "}
            <span>Collaborate on Challenging Projects</span>, or{" "}
            <span>Join Our Dynamic Team</span>, we invite you to fill out the
            form and embark on a journey of growth, teamwork, and fulfillment
            with us.
          </p> */}
        </div>

        <div className="company">
          <div
            className="company_img"
            data-aos="fade-in"
            data-aos-duration="2500"
          >
            <img src={company} alt="" />
          </div>

          <div
            className="company_text"
            data-aos="fade-in"
            data-aos-duration="2500"
          >
            <p>
              Welcome to <span>Cellenza</span>, a prominent player in the
              manufacturing and supply of high-quality adhesives, coatings, and
              specialty chemicals. Our products are recognized for excellence,
              offering extended shelf life, user-friendly applications, and
              competitive pricing.
              <br />
              <br />
              Specializing in surface treatment solutions for natural stone,
              marble, granite, porcelain, ceramic, agglomerates, bricks, and
              concrete. From production to daily use, we pride ourselves on
              crafting solutions that precisely meet our clients' needs. Welcome
              to a world of quality and innovation at <span>Cellenza</span>.
            </p>
          </div>
        </div>

        <div className="whoweare">
          <div
            className="content_heading"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3>What We Do?</h3>
          </div>
          <div className="whoweare_content">
            <div
              className="whoweare_img"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <img src={whoweare} alt="" />
            </div>
            <div
              className="whoweare_text"
              data-aos="slide-left"
              data-aos-duration="1000"
            >
              <p>
                At <span>Cellenza</span>, we specialize in the manufacturing and
                supply of top-tier adhesives, coatings, and specialty chemicals.
                Our diverse product range is tailored for a variety of
                applications, offering optimal quality, extended shelf life,
                user-friendly attributes, and competitive pricing.
                <br />
                <br />
                In surface treatment solutions, we cater to the specific needs
                of various materials, including natural stone, marble, granite,
                porcelain, ceramic, agglomerates, bricks, and concrete. we
                continuously strive to add significant value for our customers,
                business partners, and stakeholders.
              </p>
            </div>
          </div>
        </div>

        <div className="certifications">
          <div
            className="content_heading"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3>Certifications</h3>
          </div>
          <div className="certifications_content">
            <div
              className="certifications_img"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={iso} alt="" />
            </div>
            <div
              className="certifications_text"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p>
                <span>ISO 9001:2015 Certified</span> <br />
                <br />
                Throughout the years we have established active cooperating
                relationships with some of the biggest and most prestigious
                producers and transformers in the ceramic, stone, and
                agglomerates fields, contributing to the enhancement of the
                quality of this made in Italy products that are known and
                appreciated all around the world. We obtained the ISO 9001:2015,
                Released by the certification organisation CERTIQUALITY. Our
                products have obtained many certifications from external
                national and international certified labs and organizations that
                testify to the quality, performance, food contact safety,
                breathability, and overall safety of our formulas.
              </p>
            </div>
          </div>
        </div>

        <div className="mission">
          <div
            className="content_heading"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3>Mission</h3>
          </div>
          <div className="mission_content">
            <div
              className="mission_img"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <img src={mission} alt="" />
            </div>
            <div
              className="mission_text"
              data-aos="slide-left"
              data-aos-duration="1000"
            >
              <p>
                At <span>Cellenza</span>, our mission is to redefine industry
                standards by consistently delivering excellence in the
                manufacturing and supply of adhesives, coatings, and specialty
                chemicals. Rooted in Maharashtra and reaching every corner of
                the nation, we aim to provide more than just products; we strive
                to offer comprehensive stone care solutions that stand as a
                testament to innovation and enduring quality. We are dedicated
                to being a regional market leader, not only through business
                growth but also by contributing to the sustainable advancement
                of global and local communities. With a focus on operational
                excellence, technological development, and unwavering commitment
                to customer satisfaction, Cellenza is on a mission to elevate
                surfaces and exceed expectations.
                {/* <br />
                <br /> */}
                Trust us for a journey where quality, responsibility, and
                innovation converge for unparalleled results.
                {/* <br /> */}
                {/* <br />
                Let's Build Together, Let's Grow Together!
                <br /> */}
              </p>
            </div>
          </div>
        </div>

        <div className="vision">
          <div
            className="content_heading"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3>Vision</h3>
          </div>
          <div className="vision_content">
            <div
              className="vision_text"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <p>
                We <span>Cellenza</span>, We envision becoming the regional
                market leader in the realm of adhesives, coatings, and specialty
                chemicals. Grounded in Maharashtra, our commitment extends to
                fostering sustainable development in both global and local
                communities where we operate. We aspire to contribute to the
                well-being of humanity by delivering quality products and
                services through operational excellence, technological
                development, and innovation. Our vision is anchored in adding
                significant value for our customers, business partners, and
                stakeholders, setting the benchmark for international business
                standards. Through this journey, Cellenza strives to be a
                driving force in the advancement of both businesses and
                communities, embodying a commitment to growth and excellence.
              </p>
            </div>
            <div
              className="vision_img"
              data-aos="slide-left"
              data-aos-duration="1000"
            >
              <img src={vision} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
