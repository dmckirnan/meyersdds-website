import React, { Component } from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
};

export default App;
