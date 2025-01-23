import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="card">
        <h3>Our Address</h3>
        <p>Melamchi Community School</p>
        <p>Melamchi-11, Sindhupalchowk</p>
      </div>

      <div className="card">
        <h3>Get in Touch</h3>
        <p>
          <strong>Phone:</strong> (011) 401105
        </p>
        <p>
          <strong>Email:</strong> melamchicommunityschool@gmail.com
        </p>
      </div>

      <div className="card">
        <h3>Office Hours</h3>
        <p>Sunday - Friday: 9:00 AM - 4:00 PM</p>
        <p>Saturday : Closed !</p>
      </div>

      <div className="card">
        <h3>Find Us on the Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.389904202041!2d85.57266017561278!3d27.8285444201352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb004719b35677%3A0x8b02277fdbd88147!2sMelamchi%20Community%20Secondary%20School!5e0!3m2!1sen!2snp!4v1737631702842!5m2!1sen!2snp.com/maps/embed?pb=..."
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="School Location"
        ></iframe>
      </div>

      <div className="card">
        <h3>Follow Us</h3>
        <p>
          <a
            href="https://www.facebook.com/smartmcses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
        </p>
      </div>

      <div className="card">
        <h3>Contact Form</h3>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" required />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
