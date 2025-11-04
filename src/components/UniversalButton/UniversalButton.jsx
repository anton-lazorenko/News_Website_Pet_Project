import './UniversalButton.css'

export function UniversalButton({ onClick, children, theme }) {
  return <button onClick={onClick} className={`btn btn-${theme}`}>{ children }</button>
}