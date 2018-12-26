import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Reach Me</h1>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <span>&copy; 2019 The Coding Aviator</span>
      </div>
    )
  }
}
