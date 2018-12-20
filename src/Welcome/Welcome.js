import React from 'react';
import './Welcome.css';
import Particles from './Particles.js';

function log(){document.getElementById('about').scrollIntoView();}

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Particles />
        <div className="welcome">
          <h1>THE CODING AVIATOR</h1>
          <div>
            <p>Tap/click and drag ;&#41;</p>
            <br />
            <div className="down-arrow" onClick={log}>
              <h1>&#65088;</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
