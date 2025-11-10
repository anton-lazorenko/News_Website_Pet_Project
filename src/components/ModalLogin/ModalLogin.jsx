import './ModalLogin.css'

import googleIcon from '../../assets/google.svg'
import closeIcon from '../../assets/close-icon.svg'

export function ModalLogin({ onClose, onRegisterClick }) {

  return (
    <div className='modal-login'>
      <form className='modal-form' aria-labelledby="login-title">
        <h2 className='modal-title' id="login-title">log in to your account</h2>
        <fieldset>
          <legend></legend>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
          />

          <button className='enter-button' type="submit">Enter</button>
        </fieldset>

        <div role="separator" aria-orientation="horizontal"></div>

        <button
          className='enter-with-google-button'
          type="button"
          aria-label="Войти с помощью Google"
        >
          <img className='googleIcon' src={googleIcon} alt="googleIcon" />
          Continue with Google
        </button>


        <a href="#" onClick={(e) => {
          e.preventDefault();
          onRegisterClick();
        }}>
          Register
        </a>

      </form>
      <button type="button" className='close-button' onClick={onClose}><img className='close-icon' src={closeIcon} alt="Close" /></button>
    </div>
  )
}