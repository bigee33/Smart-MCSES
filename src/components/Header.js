import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
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
