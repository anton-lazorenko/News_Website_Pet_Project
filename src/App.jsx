import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import { ModalLogin } from './components/ModalLogin';
import { Register } from './components/Register';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactsPage } from './pages/ContactsPage';
import { BlogPage } from './pages/BlogPage';
import { EventsPage } from './pages/EventsPage';

import { apiUrl } from './constants/constants';
import { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('latest');
  const [activeModal, setActiveModal] = useState(null);

  const fetchNews = async (query) => {
    try {
      const res = await fetch(`${apiUrl}&q=${query}`);
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
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout 
              modalOpenHandler={openLogin}
              setArticles={setArticles}
              fetchNews={fetchNews}
              setCategory={setCategory}
            />
          }
        >
          {/* вложенные маршруты */}
          <Route index element={<HomePage articles={articles} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="events" element={<EventsPage />} />
        </Route>
      </Routes>

      {/* модалки вне Layout, чтобы перекрывали всё */}
      {activeModal === 'login' && <ModalLogin onClose={closeModal} onRegisterClick={openRegister} />}
      {activeModal === 'register' && <Register onClose={closeModal} />}
    </Router>
  );
}

export default App;
