
import './App.css'

import { Header } from './components/Header'

import { Footer } from './components/Footer'
import { ModalLogin } from './components/ModalLogin'
import { Register } from './components/Register'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { FaqPage } from './pages/FaqPage';

import { apiUrl } from './constants/constants'
import { useState, useEffect } from 'react'

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('latest');
  const [activeModal, setActiveModal] = useState(null); 

  const fetchNews = async (query) => {
    try {
      const res = await fetch(`${apiUrl}&q=${query}`)
      const data = await res.json()
      setArticles(data.results)
      console.log(data.results)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchNews(category)
  }, [category])

  const openLogin = () => setActiveModal('login');
  const openRegister = () => setActiveModal('register');
  const closeModal = () => setActiveModal(null);
  return (
    <Router>
      <div className='wrapper'>
        <Header modalOpenHandler={openLogin} setArticles={setArticles} fetchNews={fetchNews} setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<HomePage articles={articles} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>

      {activeModal === 'login' && (
        <ModalLogin onClose={closeModal} onRegisterClick={openRegister} />
      )}
      {activeModal === 'register' && (
        <Register onClose={closeModal} />
      )}
    </Router>
  )
}

export default App
