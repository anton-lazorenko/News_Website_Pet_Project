
import './App.css'

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { AsideLeft } from './components/AsideLeft'
import { AsideRight } from './components/AsideRight'
import { ModalLogin } from './components/ModalLogin'
import { Register } from './components/Register'

import { apiUrl } from './constants/constants'
import { useState, useEffect } from 'react'

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('latest');
  const [activeModal, setActiveModal] = useState(null); // 'login' или 'register'


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
    <>
      <div className='wrapper'>
        <Header modalOpenHandler={openLogin} setArticles={setArticles} fetchNews={fetchNews} setCategory={setCategory} /> 
        <div className="main-wrapper">
          <AsideLeft articles={articles} />
          <Main articles={articles} />
          <AsideRight />
        </div>
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
    </>
  )
}

export default App
