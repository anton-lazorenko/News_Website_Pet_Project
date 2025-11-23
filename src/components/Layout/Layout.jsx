import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

export default function Layout({ modalOpenHandler, setArticles, fetchNews, setCategory, theme, setTheme }) {
  return (
    <>
      <div className={`wrapper ${theme}`}>
        <Header
          modalOpenHandler={modalOpenHandler}
          setArticles={setArticles}
          fetchNews={fetchNews}
          setCategory={setCategory}
          theme={theme}     
          setTheme={setTheme}
        />
        <main>
          <Outlet />
        </main>
      </div>
      <div className='footer-wrapper'><Footer /></div>
    </>
  );
}
