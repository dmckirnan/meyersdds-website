import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Sidebar.scss';

const Sidebar = (props) => {
  if (props.active) {
    return (
      <div className="sidebar-nav">
        <h3>Menu</h3>
        <button className="close-button" onClick={props.toggleSidebar}>X</button>
        <div className="menu">
          <div className="main-menu-container">
            <ul className="main-menu">
              <li><Link className="router-link" onClick={props.toggleSidebar} to="/">Home</Link></li>
              <li><Link className="router-link" onClick={props.toggleSidebar} to="/doctor">Meet the Doctor</Link></li>
              <li><Link className="router-link" to="/staff">Meet the Staff</Link></li>
              <li><Link className="router-link" to="/services">Our Services</Link></li>
              <li><Link className="router-link" to="/smile">Smile Gallery</Link></li>
              <li><Link className="router-link" to="/payment">Payment Options</Link></li>
              <li><Link className="router-link" to="/hours">Hours & Location</Link></li>
              <li><Link className="router-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

Sidebar.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
