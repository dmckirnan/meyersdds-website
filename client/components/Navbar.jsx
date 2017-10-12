import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './../styles/Header.scss';

const Navbar = props =>
  (
    <div className="nav">
      <div className="nav-container">
        <button className="menu-open" onClick={props.toggleSidebar} />
        <h1 className="logo"><Link to="/">STEVEN A. MEYERS DDS, FAGD</Link></h1>
      </div>
    </div>
  );

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
