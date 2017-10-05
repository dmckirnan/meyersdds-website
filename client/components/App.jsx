import React, { Component } from 'react';

import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import './../styles/Navbar.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div id="container">
        <Navbar />
        <div className="spacer">&nbsp;</div>
        <Main />
      </div>
    );
  }
}

export default App;
