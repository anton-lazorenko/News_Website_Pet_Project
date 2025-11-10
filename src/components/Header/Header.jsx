import './header.css'
import { Logo } from '../Logo'
import { Search } from '../Search'
import { CategoriesBar } from '../CategoriesBar/CategoriesBar';
import { UniversalButton } from '../UniversalButton';



export function Header({ setCategory, fetchNews, modalOpenHandler }) {

  return (
    <div className="header__wrapper">
      <div className="header__items">
        <Logo />
        <Search fetchNews={fetchNews} />
        <div>
        <button onClick={modalOpenHandler} className='loginButton'>Log In</button>
        </div>
      </div>
      <CategoriesBar setCategory={setCategory} />
    </div>

  )
}



