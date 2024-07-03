export default function ContactContainer() {
  return (
    <div className="contact_container">
      <div className="contact_info">
        <h3>Our Office Address</h3>
        <p>
          Plot No. 75, Kshirsagar Compound, Hotgi Road, Mazarewadi, Solapur -
          413006, Maharashtra, INDIA.
        </p>

        <h3>General Enquiries</h3>
        <p>info@cellenza.in</p>

        <h3>Call Us</h3>
        <p>
          {" "}
          +91 7774969555
          <br />
          +91 9371609999
        </p>

        <h3>Our Timing</h3>
        <p>Mon - Sun : 09:00 AM - 06:00 PM</p>
      </div>

      <div className="form_container contact_form">
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
          <textarea placeholder="Your Message" name="Message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
