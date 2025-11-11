import Logotype from '../../assets/Logotype.svg' 
import { Link } from 'react-router-dom';
import './logo.css'

export function Logo() {
  return (
     <Link to="/">
       <img className="logo" src={Logotype} alt="Логотип" />
      </Link>  
  )
}