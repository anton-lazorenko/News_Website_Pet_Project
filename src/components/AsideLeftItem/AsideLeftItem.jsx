import { UniversalButton } from '../UniversalButton'
import './AsideLeftItem.css'
 

export function AsideLeftItem({ articles }) { 

  return (
    <div>
      {articles && articles.length > 0 ? (
        articles.map((article) => (
          <div className="aside-left-list-item" key={article.article_id}> 
            <h3 >{article.title}</h3>
             <p className="aside-left-date">{article.pubDate}</p>
            <p>
              {article.description} 
            </p> 
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
