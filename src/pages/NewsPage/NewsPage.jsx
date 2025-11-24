import './NewsPage.css'

import { useLocation } from 'react-router-dom';

export function NewsPage() {
  const { state } = useLocation();
  
  // retrieve article from Link
  const article = state?.article; 

  if (!article) return <p>No news found</p>;

  return (
    <div className="article-card">
      <h4 className="article-title">{article.title}</h4>
      {article.image_url && (
        <img className="article-image" src={article.image_url} alt={article.title} />
      )}
      {article.creator && (
        <p className="creator">{article.creator.join(', ')}</p>
      )}
      <p className="description">{article.description}</p>
    </div>
  );
}
