import Logotype from '../../assets/Logotype.svg'
import './logo.css'

export function Logo() {
  return (
    <a href="#">
      <img className="logo" src={Logotype} alt="Логотип" />
    </a>
  )
}