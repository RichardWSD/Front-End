import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    // JSX写法
    return (
      <ul className="my-list">
        <li>{false ? 'JSPang.com' : '登登登'}</li>
        <li>I love React</li>
      </ul>
    );
  }
}

export default App;
