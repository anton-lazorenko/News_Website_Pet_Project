import './register.css'

import closeIcon from '../../assets/close-icon.svg'
import { UniversalButton } from '../../components/UniversalButton'
 

export function Register({ onClose }) { 

  return (
    <div>
      <form  className="register-form" onSubmit={(e) => e.preventDefault()}>
        <fieldset className='register-items'>
          <legend>Register</legend>

          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              className="register-input"
              id="firstName"
              name="firstName"
            />
          </label>

          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              className="register-input"
              id="lastName"
              name="lastName"
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              className="register-input"
              id="email"
              name="email"
            />
          </label>
        </fieldset>
        <UniversalButton type='submit'>Submit</UniversalButton>
        <button type="button" className='close-button' onClick={onClose}><img className='close-icon' src={closeIcon} alt="Close" /></button>
      </form>
    </div>
  )
}