import React from 'react';
import './App.css';

import Welcome from './Welcome/Welcome.js';
import About from './About/About.js';
//import Projects from './Projects/Projects.js';
import Links from './Links/Links.js';
import Contact from './Contact/Contact.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <About />
        <Links />
        <Contact />
      </div>
    );
  }
}