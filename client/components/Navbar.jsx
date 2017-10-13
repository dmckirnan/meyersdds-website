import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = (props) => {
  return (
    <nav id="navbar" className={props.active ? 'navbar responsive' : 'navbar'}>
      <Link to="/">Home</Link>
      <Link to="/staff">Staff</Link>
      <Link to="/contact">Contact</Link>
      <a href="#" className="icon" onClick={props.toggleSidebar}>&#9776;</a>
    </nav>
  );
};

Navbar.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

export default Navbar;
