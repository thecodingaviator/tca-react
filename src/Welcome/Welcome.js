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
          <div>
            <p>Tap/click and drag ;&#41;</p>
            <br />
            <div className="down-arrow" onClick={smoothScroll('about')}>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
