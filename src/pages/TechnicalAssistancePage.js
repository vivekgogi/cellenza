import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ico_assistenza_A from "../images/ico_assistenza_A.png";
import ico_assistenza_B from "../images/ico_assistenza_B.png";
import ico_assistenza_C from "../images/ico_assistenza_C.png";

function TechnicalAssistance() {
  return (
    <div className="private_label_section">
      <div
        className="contact_header"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>Technical Assistance</h1>
        <h6>
          Access to Specialized Advisors for Targeted Technical Assistance.
        </h6>
        <p>
          Get efficient technical support crafted for your needs. Connect
          directly with specialized advisors for prompt and effective
          assistance no intermediaries, just solutions.
        </p>
      </div>

      <div
        className="box_container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="box">
          <div className="box_img">
            <img src={ico_assistenza_A} />
          </div>

          <div className="box_text">
            <h3>Specific</h3>
            <p>
              To each inquiry we provide tailored assistance. We do not use bots
              or automatic systems, our advisors will assist you according to
              your needs.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box_img">
            <img src={ico_assistenza_B} />
          </div>

          <div className="box_text">
            <h3>Direct</h3>
            <p>
              Upon an initial assessment, your request will be directed to the
              advisor best suited for it. From there, you will be able to have
              direct contact with no intermediary.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box_img">
            <img src={ico_assistenza_C} />
          </div>

          <div className="box_text">
            <h3>Quick</h3>
            <p>
              Our commitment to our customers is to provide you with the
              quickest, punctual, and specific technical assistance possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnicalAssistanceForm() {
  return (
    <div
      className="career_header"
      data-aos="zoom-in"
      data-aos-duration="1000"
      style={{ marginBottom: "15vmin" }}
    >
      {/* <h1>Work With Us</h1> */}
      <h6 style={{ textAlign: "center", color: "red", fontSize: "6vmin" }}>
        Don't hesitate!
      </h6>

      <p style={{ textAlign: "center", padding: "0vmin 25vmin" }}>
        Contact us now through a channel of your choice down below. WhatsApp,
        Email, Phone, or our e-shop Assistance form. We remain at your
        disposal..
      </p>
    </div>
  );
}

export default function TechnicalAssistancePage() {
  return (
    <div className="private_label_page">
      <Header />
      <TechnicalAssistance />
      <TechnicalAssistanceForm />
      <Footer />
    </div>
  );
}
