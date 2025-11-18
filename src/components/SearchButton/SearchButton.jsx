import './search-button.css'
import searchIcon from '../../assets/search-icon.svg'

export function SearchButton() {
  return <button className="search-button" type="submit"> <img className='search-icon' src={searchIcon} alt="search" /></button>
}