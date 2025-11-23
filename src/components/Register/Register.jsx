import './register.css';

import closeIcon from '../../assets/close-icon.svg';
import { UniversalButton } from '../../components/UniversalButton';
import { useState } from 'react';

export function Register({ onClose }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
 
  // sending user data to the server
  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, pass })
    });

    const data = await res.json();  
    onClose();
  }

  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit}>
        <fieldset className='register-items'>
          <legend>Register</legend>

          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              className="register-input"
              id="firstName"
              name="firstName"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              className="register-input"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              className="register-input"
              id="email"
              name="email"
              placeholder="@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="pass">
            Password
            <input
              type="password"
              className="register-input"
              id="pass"
              name="pass"
              placeholder="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
        </fieldset>

        <UniversalButton type='submit'>Submit</UniversalButton>

        <button type="button" className='close-button' onClick={onClose}>
          <img className='close-icon' src={closeIcon} alt="Close" />
        </button>
      </form>
    </div>
  )
}
