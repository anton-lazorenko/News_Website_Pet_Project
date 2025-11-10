import './main.css'
import { ArticleCard } from '../ArticleCard'

import { useState, useEffect } from 'react'

export function Main({ articles }) {
  const [state, setState] = useState(articles.title)

 
  return (
    <div className="main-items">
      <h2 className='main-title'>Latest News</h2>
      {articles.slice(0, 8).map((article) => (
        <section key={article.article_id || article.title} className='article-section'>
          <ArticleCard article={article} />
        </section>
      ))} 
    </div>
  )
} 