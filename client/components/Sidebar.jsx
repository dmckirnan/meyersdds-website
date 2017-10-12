import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Sidebar.scss';

const Sidebar = (props) => {
  if (props.active) {
    return (
      <div className="sidebar-container">
        <aside className="sidebar">
          <button className="menu-close" onClick={props.toggleSidebar} />
          <section className="router-link"><Link to="/">Home</Link></section>
          <section className="router-link"><Link to="/doctor">Meet the Doctor</Link></section>
          <section className="router-link"><Link to="/staff">Meet the Staff</Link></section>
          <section className="router-link"><Link to="/services">Our Services</Link></section>
          <section className="router-link"><Link to="/smile">Smile Gallery</Link></section>
          <section className="router-link"><Link to="/payment">Payment Options</Link></section>
          <section className="router-link"><Link to="/hours">Hours & Location</Link></section>
          <section className="router-link"><Link to="/contact">Contact</Link></section>
        </aside>
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
