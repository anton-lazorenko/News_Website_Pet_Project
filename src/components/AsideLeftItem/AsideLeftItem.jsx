import './AsideLeftItem.css'
 

export function AsideLeftItem({ articles }) { 

  return (
    <div className='aside-left-items'>
      {articles && articles.length > 0 ? (
        articles
        .filter(article => article.description && article.description.length <= 500)
        .map((article) => (
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
