import './main.css'
import { ArticleCard } from '../ArticleCard'
 
export function Main({ articles }) {
 
  return (
    <div className="main-items">
      <h2 className='main-title'>Latest News</h2>
      {/* render first 8 news publications */}
      {articles
        .filter(article => article.language === 'english')
        .slice(0, 8)
        .map((article) => (
          <section key={article.article_id || article.title} className='article-section'>
            <ArticleCard article={article} />
          </section>
        ))}
    </div>
  )
} 