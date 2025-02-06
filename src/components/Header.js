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
            <FaPhoneAlt className="icon" /> 011-401105
          </span>
          <span>
            <FaWhatsapp className="icon whatsapp-icon" /> 980000000000
          </span>
        </div>
      </div>
      <div className="logo-container">
        <div className="logo">
          <img
            src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/438299025_939704701283739_3267598988917521445_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Kg5U8BhiPt8Q7kNvgGjmFsH&_nc_oc=AdiN0i_ToKG-unEoLgx6cwxVKuzXbvgiqYoivwLRDeKjhC9_Wzm7UlQDMWcGUZQg83oIWZOH1oJJ2mLPGx2qGbas&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=A40rUePJuz0cw8D4ym7iO1b&oh=00_AYBug9lMvYiZobMQicZcEpJ0rjq16CYrFYKMTFGw82VT8Q&oe=6797DFF8"
            alt="Smart MCSES Logo"
          />
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
