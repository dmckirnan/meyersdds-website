import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/Navbar.scss';

const Navbar = () => (
  <div className="nav">
    <div className="nav-container">
      <h1 id="logo">STEVEN A. MEYERS DDS, FAGD</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/doctor'>Meet the Doctor</Link>
        <Link to='/staff'>Meet the Staff</Link>
        <Link to='/services'>Our Services</Link>
        <Link to='/smile'>Smile Gallery</Link>
        <Link to='/payment'>Payment Options</Link>
        <Link to='/hours'>Hours & Location</Link>
        <Link to='/contact'>Contact</Link>
        <a href="https://www.ident.ws/template_include/pi_login.jsp?site=3818">Patient Login</a>
      </nav>
    </div>
  </div>
);

export default Navbar;
