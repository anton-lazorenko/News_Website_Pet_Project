import './UniversalButton.css'

export function UniversalButton({ className='', onClick, children, theme }) {
  return <button onClick={onClick} className={`btn btn-${theme} ${className}`}>{ children }</button>
}