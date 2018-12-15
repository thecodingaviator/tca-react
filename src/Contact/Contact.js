import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Reach Me</h1>
        <form name="contact" method="POST" autoComplete="off" enctype="application/x-www-form-urlencoded" netlify>
          <p>
            <label><span>Name</span><input type="text" name="name" autoComplete="off" /></label>
          </p>
          <br />
          <p>
            <label><span>Email</span><input type="text" name="emails" autoComplete="off" /></label>
          </p>
          <br />
          <p>
            <label><span>Message</span><textarea name="message" rows="8" cols="1"></textarea></label>
          </p>
          <br />
          <div data-netlify-recaptcha></div>
          <p className="hidden">
            <label>Don’t fill this out if you\'re human: <input name="bot-field" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}
