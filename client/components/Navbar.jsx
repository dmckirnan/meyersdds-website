import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = props =>
  (
    <nav id="navbar" className={props.responsive ? 'navbar responsive' : 'navbar'}>
      <Link to="/">Home</Link>
      <Link to="/staff">Staff</Link>
      <Link to="/contact">Contact</Link>
      <a href="#" className="icon" onClick={props.toggleResponsive}>&#9776;</a>
    </nav>
  );

Navbar.propTypes = {
  responsive: PropTypes.bool.isRequired,
  toggleResponsive: PropTypes.func.isRequired,
};

export default Navbar;
