import React, { Component }from 'react';

import Header from './components/Header';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          first react
        </div>
        <Home />
      </div>
    );
  }
}

