import './search.css'

import { useState } from 'react'

import { SearchButton } from '../SearchButton'

export function Search({ fetchNews }) {


  const [query, setQuery] = useState('')  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return  
    fetchNews(query)  
  }

  return (
    <form
      className="header-search"
      action="/search"
      method="get"
      role="search"
      onSubmit={handleSubmit}>
      <label
        htmlFor="site-search"
        className="visually-hidden">Search</label>
      <input
        className="input-search"
        type="search"
        id="site-search"
        name="input"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchButton />

    </form>
  
  )
}

  