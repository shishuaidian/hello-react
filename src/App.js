import React, { Component }from 'react';

import Header from './components/Header';
import Home from './components/Home';

export default class App extends Component {
  render() {
    let user = {
      name: 'shishuaidian',
      age: 27,
      hobbles: ['swiming', 'football']
    }
    return (
      <div>
        <Header />
        <div>
          first react
          My age is {user.age}
        </div>
        <Home name={user.name} user={user} Age={user.age} />
      </div>
    );
  }
}

