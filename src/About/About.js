import React from 'react';
import './About.css';

import photograph from './photo.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div>
          <img src={ photograph } alt=""/>
        </div>
        <div>
          <h1>About Me</h1>
          <p>A web deisgner, photography enthusiast, blogger and musicophile on a little blue dot in the fabric of space! I love design and try to come up with the best and most elegant design solutions!</p>
        </div>
      </div>
    );
  }
}