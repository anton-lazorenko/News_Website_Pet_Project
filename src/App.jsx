import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import { ModalLogin } from './components/ModalLogin';
import { Register } from './components/Register';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop.js';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactsPage } from './pages/ContactsPage';
import { BlogPage } from './pages/BlogPage';
import { EventsPage } from './pages/EventsPage';
import { NewsPage } from './pages/NewsPage';

import { apiUrl } from './constants/constants';
import { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('latest');
  const [activeModal, setActiveModal] = useState(null);
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'light';
});

 
useEffect(() => {
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  }
}, []);
 
useEffect(() => {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}, [theme]);


  // fetch request to News API
  const fetchNews = async (query, language = 'en') => {
    try {
      const res = await fetch(`${apiUrl}&q=${query}&language=${language}`);
      const data = await res.json();
      setArticles(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const openLogin = () => setActiveModal('login');
  const openRegister = () => setActiveModal('register');
  const closeModal = () => setActiveModal(null);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              modalOpenHandler={openLogin}
              setArticles={setArticles}
              articles={articles}
              fetchNews={fetchNews}
              setCategory={setCategory}
              theme={theme}          
              setTheme={setTheme}
            />
          }
        >
          <Route index element={<HomePage articles={articles} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="news/:title" element={<NewsPage />} /> 
        </Route>
      </Routes>
      {/* modal windows */}
      {activeModal === 'login' && <ModalLogin onClose={closeModal} onRegisterClick={openRegister} />}
      {activeModal === 'register' && <Register onClose={closeModal} />}
    </Router>
  );
}

export default App;
