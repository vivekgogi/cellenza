import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DistributorForm from "../components/DistributorForm";
import CollaboratorForm from "../components/CollaboratorForm";
import JoinTeamForm from "../components/JoinTeamForm";
import ContactContainer from "../components/ContactContainer";
import ContactMap from "../components/ContactMap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function ContactPageHeading() {
  return (
    <div className="contact_header" data-aos="zoom-in" data-aos-duration="1000">
      <h1>Contact Us</h1>
      <h6>Reach Out, Connect, and Let's Make Things Happen Together!</h6>
      <p>
        Get in touch with us easily. Whether you have questions, feedback, or
        partnership inquiries, our team is here and ready to assist you. Connect
        with Cellenza - where communication meets collaboration.{" "}
      </p>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="contact_page">
      <Header />
      <ContactPageHeading />
      <ContactContainer />
      <DistributorForm />
      <ContactMap />
      <Footer />
    </div>
  );
}

export default ContactPage;
