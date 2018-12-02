import React from 'react';
import './Welcome.css';
import Particles from './Particles.js';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Particles />
        <div className="welcome">
          <h1>THE CODING AVIATOR</h1>
          <p>Tap/click and drag ;&#41;</p>
        </div>
      </div>
    )
  }
}