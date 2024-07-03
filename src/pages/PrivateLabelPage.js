import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ico_privateLabel_01 from "../images/ico_privateLabel_01.png";
import ico_privateLabel_02 from "../images/ico_privateLabel_02.png";
import ico_privateLabel_03 from "../images/ico_privateLabel_03.png";
import ico_privateLabel_04 from "../images/ico_privateLabel_04.png";

function PrivateLable() {
  return (
    <div className="private_label_section">
      <div
        className="contact_header"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>Private Label</h1>
        <h6>
          Tailored Solutions and Collaborative Formulations for Private Label
          Success
        </h6>
        <p>
          Based on your needs and the target you would like to reach, we will
          work together to select the most suitable formulas. Based on your
          needs and the target you would like to reach, we will work together to
          select the most suitable formulas.
        </p>
      </div>

      <div
        className="box_container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="box">
          <div className="box_img">
            <img src={ico_privateLabel_01} />
          </div>

          <div className="box_text">
            <h3>R & D</h3>
            <p>
              Based on your needs and the target you would like to reach, we
              will work together to select the most suitable formulas.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box_img">
            <img src={ico_privateLabel_02} />
          </div>

          <div className="box_text">
            <h3>Design</h3>
            <p>
              From the concept to the packaging, no detail will be neglected.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box_img">
            <img src={ico_privateLabel_03} />
          </div>

          <div className="box_text">
            <h3>Production</h3>
            <p>
              Our internal production allows us full control of the quality and
              also flexibility when it comes to quantity and formats.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box_img">
            <img src={ico_privateLabel_04} />
          </div>

          <div className="box_text">
            <h3>Technical Assistance</h3>
            <p>We are here! Our expertise is always at your service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrivateLableForm() {
  return (
    <div className="form_container">
      <div className="form_header" data-aos="fade-in" data-aos-duration="1500">
        <h1 style={{ textTransform: "capitalize" }}>
          Do you want to know more?
        </h1>
      </div>
      <details data-aos="slide-right" data-aos-duration="1500">
        <summary>
          Fill the form and one of our advisors will contact you shortly.
          <span>
            <u>CLICK HERE</u>
          </span>
        </summary>
        <form className="form">
          <input placeholder="Your Name *" name="Name" type="text" required />
          <input
            placeholder="Your Surname *"
            name="Surname"
            type="text"
            required
          />
          <input placeholder="Your Phone *" name="Phone" type="text" required />
          <input
            placeholder="Your Email *"
            name="Email"
            type="email"
            required
          />
          <input placeholder="Your Company" name="Company" type="text" />
          <input placeholder="Your Website" name="Website" type="text" />
          <input placeholder="Your City" name="City" type="text" />
          <input placeholder="Your Postal Code" name="PostalCode" type="text" />
          <input placeholder="Your State" name="State" type="text" />
          <input
            placeholder="Your Country *"
            name="Country"
            type="text"
            required
          />
          <textarea placeholder="Your Message" name="Message" />
          <button type="submit">Submit</button>
        </form>
      </details>
    </div>
  );
}

export default function PrivateLabelPage() {
  return (
    <div className="private_label_page">
      <Header />
      <PrivateLable />
      <PrivateLableForm />
      <Footer />
    </div>
  );
}
