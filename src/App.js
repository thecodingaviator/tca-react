import React, { Component } from 'react';
import './App.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h1>The Coding Aviator</h1>
        <div className="overlay-1"></div>
        <div className="overlay-2"></div>
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