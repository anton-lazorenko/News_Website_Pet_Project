import './articleCard.css'
import { UniversalButton } from '../UniversalButton'
import { Link } from 'react-router-dom';

export function ArticleCard({ article }) {

  return (
    <div className="article-card">
      <h4 className='article-title'>{article.title}</h4>

      {article.image_url && (
        <img className="article-image" src={article.image_url} alt={article.title} />
      )}

      {article.creator && (
        <p><span className="creator">{article.creator.join(', ')}</span></p>
      )}
      <p className='description'>
        {article.description}
      </p>
      <Link className="read-link" to={`/news/${article.title}`} state={{ article }}>
        <UniversalButton theme="read">Read</UniversalButton>
      </Link> 
    </div>
  )
}
