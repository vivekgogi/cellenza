import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwp0LtB8s7tCFP8kwNAA4D-4NHF59qqss9khJu8hkkvnpnfa8gRENxOONt42XYRPJwX/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Assuming the response includes a success property
        if (data.success) {
          toast.success("Data uploaded successfully!");
        } else {
          toast.error("Failed to upload data.");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred while uploading data.");
      });
  }

  return (
    <footer>
      <div className="pre_footer">
        <div className="prefooter_left">
          <h4>ESPEE INDUSTRIES</h4>
          <p className="iso_certified">
            <i class="fa fa-medal"></i>
            ISO 9001:2015 Certified Company
          </p>
          <p>
            <i className="fa fa-map-marker" aria-hidden="true"></i> Plot No. 75,
            Kshirsagar Compound, <br />
            Hotgi Road, Mazarewadi, Solapur - 413006, <br />
            Maharashtra, INDIA.
          </p>
          <p>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            info@cellenza.in
          </p>
          <p>
            <i className="fa fa-phone" aria-hidden="true"></i> +91 7774969555
          </p>
          <p>
            <i className="fa fa-whatsapp" aria-hidden="true"></i> +91 9371609999
          </p>
        </div>

        <div className="prefooter_right">
          <div className="direct_links">
            <h4>QUICK LINKS</h4>
            <div className="direct_links_menu">
              <a className="" href="/">
                Home
              </a>
              <a className="" href="/">
                Products
              </a>
              <a className="" href="/">
                About Us
              </a>
              <a className="" href="/">
                Carees
              </a>
              <a className="" href="/">
                Contact Us
              </a>
            </div>
          </div>

          <div className="work_with_us">
            <h4>WORK WITH US</h4>
            <div className="work_with_us_menu">
              <a className="" href="/">
                Contact Us
              </a>
              <a className="" href="/">
                Enquiry Now
              </a>
              <a className="" href="/">
                Join Our Team
              </a>
              <a className="" href="/">
                Become Distributor
              </a>
              <a className="" href="/">
                Collaboration
              </a>
            </div>
          </div>

          <div className="connect_here">
            <h4>GET IN TOUCH</h4>

            <p>To receive regular updates,</p>

            <form className="form" onSubmit={(e) => Submit(e)}>
              <input placeholder="Enter Your Email" name="Email" type="text" />
              <button type="submit">CONNECT</button>
            </form>

            <div className="social_box">
              <a href="/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="/">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="/">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main_footer">
        <p>
          Cellenza &copy; <span id="displayYear"></span> 2023 | All Rights
          Reserved |{" "}
          <a href="https://jayedutechnoservices.online/" target="_blank">
            {" "}
            JayEduTechno Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
