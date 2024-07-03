import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ico_training_A from "../images/ico_training_A.png";
import ico_training_B from "../images/ico_training_B.png";
import ico_training_C from "../images/ico_training_C.png";
import VideoFrame from "../components/VideoFrame";

function Training() {
  return (
    <div className="private_label_section">
      <div
        className="contact_header"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>Training</h1>
        <h6>Training with Our Advisors for a Hands-on Understanding of Our Unique Solutions.</h6>
        <p>
          You will be able to connect directly with our advisors that will
          follow you during the whole learning experience. From the theory to
          the practice, we want you to fully get to know our unique solutions.
        </p>
      </div>

      <div
        className="box_container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="box">
          <div className="box_img">
            <img src={ico_training_A} />
          </div>

          <div className="box_text">
            <h3>Tailored</h3>
            <p>
              Our learning sessions are built around your needs. Please share
              your interests in terms of materials and job categories that you
              would like to explore with us, our advisors will plan a training
              session tailored for you.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box_img">
            <img src={ico_training_B} />
          </div>

          <div className="box_text">
            <h3>Interactive</h3>
            <p>
              We believe that active learning is the only way to fully embrace
              our training sessions. You will be the protagonist trying our
              solutions firsthand alongside our technical advisors.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="box_img">
            <img src={ico_training_C} />
          </div>

          <div className="box_text">
            <h3>One On One</h3>
            <p>
              You will be able to connect directly with our advisors that will
              follow you during the whole learning experience. From the theory
              to the practice, we want you to fully get to know our unique
              solutions.
            </p>
          </div>
        </div>
      </div>

      

    </div>
  );
}

function TrainingForm() {
  return (
    <div className="form_container">
      <div className="form_header" data-aos="fade-in" data-aos-duration="1500">
        <h1 style={{ textTransform: "capitalize" }}>
          Would you like to participate?
        </h1>
      </div>
      <details data-aos="slide-right" data-aos-duration="1500">
        <summary>
          Fill out the form and tell us more about what you would like to go
          through. Our advisors will get back to you ASAP. <br />
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

export default function TrainingPage() {
  return (
    <div className="private_label_page">
      <Header />
      <Training />
      <VideoFrame />
      <TrainingForm />
      <Footer />
    </div>
  );
}
