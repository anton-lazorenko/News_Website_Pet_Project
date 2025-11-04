
import './App.css'

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { AsideLeft } from './components/AsideLeft'
import { AsideRight } from './components/AsideRight'
import { apiUrl } from './constants/constants'
import { useState, useEffect } from 'react'

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('latest');



  const fetchNews = async (query) => {
    try {
      const res = await fetch(`${apiUrl}&q=${query}`)
      const data = await res.json()
      setArticles(data.results)
      console.log(data.results)
      console.log(data)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchNews(category)
  }, [category])

  return (
    <>
      <div className='wrapper'>
        <Header setArticles={setArticles} fetchNews={fetchNews} setCategory={setCategory} />
        <div className="main-wrapper">
          <AsideLeft articles={articles} />
          <Main articles={articles} />
          <AsideRight />
        </div>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </>
  )
}

export default App
