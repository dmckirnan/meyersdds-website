import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/doctor'>Meet the Doctor</Link></li>
        <li><Link to='/staff'>Meet the Staff</Link></li>
        <li><Link to='/services'>Our Services</Link></li>
        <li><Link to='/smile'>Smile Gallery</Link></li>
        <li><Link to='/payment'>Payment Options</Link></li>
        <li><Link to='/hours'>Hours & Location</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><a href="https://www.ident.ws/template_include/pi_login.jsp?site=3818">Patient Login</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
