import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DistributorForm from "../components/DistributorForm";
import CollaboratorForm from "../components/CollaboratorForm";
import JoinTeamForm from "../components/JoinTeamForm";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function CareerPageHeading() {
  return (
    <div className="career_header" data-aos="zoom-in" data-aos-duration="1000">
      <h1>Work With Us</h1>
      <h6>Building Careers, Fostering Growth, and Embracing Excellence</h6>
      <p>
        Whether you aspire to <span>Become a Certified Distributor</span>,{" "}
        <span>Collaborate on Challenging Projects</span>, or{" "}
        <span>Join Our Dynamic Team</span>, we invite you to fill out the form
        and embark on a journey of growth, teamwork, and fulfillment with us.
      </p>
    </div>
  );
}

function CareerPage() {
  return (
    <div className="career_page">
      <Header />
      <CareerPageHeading />
      {/* <DistributorForm /> */}
      <JoinTeamForm />
      <CollaboratorForm />
      <Footer />
    </div>
  );
}

export default CareerPage;
