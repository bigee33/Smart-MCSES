import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Font Awesome CDN Link for Social Media Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      <footer className="footer">
        <div className="footer-container">
          {/* Quick Contact Section */}
          <div className="quick-contact">
            <h3>Quick Contact</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Melamchi-11,
              Sindhupalchowk
            </p>
            <p>
              <i className="fas fa-phone"></i> 011-401105, 9800000000
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:inquiry@texascollege.edu.np">
                inquiry@smartmcses.edu.np
              </a>
            </p>
            <p>
              <i className="fas fa-clock"></i> Opening Hours: 9:00 AM - 4:00 PM
            </p>
          </div>

          {/* Social Media Section */}
          <div className="social-icons">
            <h3>Follow Us On</h3>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>

        {/* Line Separator */}
        <hr className="footer-divider" />

        {/* Copyright Section */}
        <div className="copyright">
          <p className="developed-by">
            Developed By: Information Bridge Technologies Nepal Pvt.Ltd
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
