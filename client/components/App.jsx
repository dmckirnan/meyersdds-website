import React, { Component } from 'react';

import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarActive: false,
      content: '',
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    const obj = Object.assign({}, this.state);
    let sidebarActive = obj.sidebarActive;
    sidebarActive = !sidebarActive;

    this.setState({ sidebarActive });
  }

  render() {
    return (
      <div id="container">
        <Navbar toggleSidebar={this.toggleSidebar} active={this.state.sidebarActive} />
        <Main />
      </div>
    );
  }
}

export default App;
