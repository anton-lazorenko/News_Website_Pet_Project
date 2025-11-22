import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export default function Layout({ modalOpenHandler, setArticles, fetchNews, setCategory }) {
  return (
    <div className="wrapper">
      <Header 
        modalOpenHandler={modalOpenHandler} 
        setArticles={setArticles} 
        fetchNews={fetchNews} 
        setCategory={setCategory} 
      />
      <main>
        <Outlet />  
      </main>
      <Footer />
    </div>
  );
}
