import './footer-section.css'
import { Link } from 'react-router-dom';

export function FooterSection({ title, items }) {
  return (
    <div className="footer-section">
      <h4 className="footer-section-title">{title}</h4>
      <ul className="footer-section-list">
        {items.map((item, index) => (
          <li key={index} className="footer-section-item">
            {typeof item === 'object' && item.path ? (
              <Link to={item.path} className="footer-link">
                {item.name}
              </Link>
            ) : (
              <span className='footer-link-text'>{item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
