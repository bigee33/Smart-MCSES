import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <img
            src="https://play-lh.googleusercontent.com/H1ZUS2kBuu3FCgDQIXnF9DUA7ex9PAyDyc1KVk6z9UoqSjTWHddqYHzdzacfvpMewIY"
            alt="Smart MCSES Logo"
          />
        </div>
        <div className="school-name">Welcome to Smart MCSES</div>
      </div>

      <nav className="menu">
      <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/fee-structure">Fee Structure</Link>
        <Link to="/galleries">Galleries</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
