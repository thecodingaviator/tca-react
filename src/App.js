import React, { Component } from 'react';
import './App.css';
import './Phenomenon.js';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <canvas></canvas>
        <div className="welcome">
          <h1>The Coding Aviator</h1>
          <h3>DEVELOPER | DESIGNER</h3>
        </div>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <Welcome />
    );
  }
}

export default App;