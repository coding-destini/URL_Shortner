import React, { useState } from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">Your App</div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to='/' ><div className="navbar-link">Home</div></Link>
        <Link to='/login' > <div className="navbar-link">Login</div></Link>
        <Link to='/register' ><div className="navbar-link">Register</div></Link>
      </div>
      <div className="burger-menu" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;
