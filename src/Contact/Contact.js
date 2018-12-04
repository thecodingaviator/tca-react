import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Reach Me</h1>
        <form name="contact" method="POST" autoComplete="off" netlify>
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
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <form name="contact" method="POST" netlify>
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}