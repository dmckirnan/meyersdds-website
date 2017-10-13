import React, { Component } from 'react';

import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      responsive: false,
      content: '',
    };
    this.toggleResponsive = this.toggleResponsive.bind(this);
  }

  toggleResponsive() {
    const obj = Object.assign({}, this.state);
    let responsive = obj.responsive;
    responsive = !responsive;

    this.setState({ responsive });
  }

  render() {
    return (
      <div id="container">
        <Navbar toggleResponsive={this.toggleResponsive} responsive={this.state.responsive} />
        <Main />
      </div>
    );
  }
}

export default App;
