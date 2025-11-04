import './footer-section.css'
 
export function FooterSection({ title, items }) {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      <ul className='footer-section-list'>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
