import './header.css'
import { Logo } from '../Logo'
import { Search } from '../Search'
import { CategoriesBar } from '../CategoriesBar/CategoriesBar';
import { Link } from 'react-router-dom';

import { useState } from 'react';


export function Header({ setCategory, fetchNews, modalOpenHandler, theme, setTheme }) {
  //  Create state for burger
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="header-items">
        <Logo />
        <div className={`nav ${isOpen ? "open" : ""}`}>
          <Search fetchNews={fetchNews} />
          <div className='header-buttons'>
            <Link to="/about">
              <button className='about_us-button'>About Us</button>
            </Link>
            <button onClick={modalOpenHandler} className='login-button'>Log In</button>
          </div>
          <button
            className='theme-button'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? '🌙' : '☀️'} 
          </button>
        </div>
        <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      <CategoriesBar setCategory={setCategory} />
    </div>
  )
}



