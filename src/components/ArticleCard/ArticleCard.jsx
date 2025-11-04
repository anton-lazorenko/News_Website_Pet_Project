import './articleCard.css'
import { UniversalButton } from '../UniversalButton'
import { useState } from 'react'

export function ArticleCard({ article }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="article-card">
      <h4 className='article-title'>{article.title}</h4>

      {article.image_url && (
        <img className="article-image" src={article.image_url} alt={article.title} />
      )}

      {article.creator && (
        <p><span className="creator">{article.creator.join(', ')}</span></p>
      )}

      <p className={open ? 'description-full' : 'description-truncated'}>
        {article.description}
      </p>

      <UniversalButton onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Show'}
      </UniversalButton>
    </div>
  )
}
