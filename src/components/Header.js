import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import AuthContext from "../context/AuthContext"; // Import AuthContext
import "./Header.css";

const Header = () => {
  const { isAdminLoggedIn } = useContext(AuthContext); // Get login status

  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <span>
            <FaPhoneAlt className="icon" /> 011-000000
          </span>
          <span>
            <FaWhatsapp className="icon whatsapp-icon" /> 980000000000
          </span>
        </div>
      </div>
      <div className="logo-container">
        <div className="logo">
          <img src="/images/schoolLogo.jpg" alt="Smart MCSES Logo" />
        </div>
        <div className="school-name">Welcome to Smart MCSES</div>
      </div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Notices">Notice</Link>
        <Link to="/FeeStructure">Fee Structure</Link>
        <Link to="/Gallery">Galleries</Link>
        <Link to="/Contact">Contact</Link>
        {/* Show 'Admin Dashboard' if logged in, otherwise show 'Admin Login' */}
        {isAdminLoggedIn ? (
          <Link to="/AdminDashboard">Admin Dashboard</Link>
        ) : (
          <Link to="/AdminLogin">Admin Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
