import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Reach Me</h1>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </div>
    )
  }
}
