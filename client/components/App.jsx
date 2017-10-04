import React, { Component } from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';

import './../styles/Header.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
  }

  render() {
    return (
      <div id="container">
        <Header />
        <div className="spacer">
          &nbsp;
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
