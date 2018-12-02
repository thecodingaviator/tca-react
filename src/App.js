import React from 'react';
import './App.css';

import Welcome from './Welcome/Welcome.js';
import About from "./About/About.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <About />
      </div>
    );
  }
}