import { useEffect } from 'react'

import './categoriesBar.css'

export function CategoriesBar({ setCategory, navigate }) { 

    const handleClick = (cat) => {
    setCategory(cat) 
    navigate('/')     // navigate to HomePage
  }

  useEffect(() => {
    const el = document.querySelector('.categories-bar');
    if (!el) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        const scrollSpeed = 5.5;
        el.scrollLeft += e.deltaY * scrollSpeed; 
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="categories-bar">
      <button onClick={() => handleClick('All')}>All news</button>
      <button onClick={() => handleClick('Politics')}>Politics</button>
      <button onClick={() => handleClick('Technology')}>Technology</button>
      <button onClick={() => handleClick('Sports')}>Sports</button>
      <button onClick={() => handleClick('Entertainment')}>Entertainment</button>
      <button onClick={() => handleClick('World')}>World</button>
      <button onClick={() => handleClick('Business')}>Business</button>
      <button onClick={() => handleClick('Science')}>Science</button>
      <button onClick={() => handleClick('Weather')}>Weather</button>
      <button onClick={() => handleClick('Society')}>Society</button>
      <button onClick={() => handleClick('Health')}>Health</button>
      <button onClick={() => handleClick('Gaming')}>Gaming</button>
      <button onClick={() => handleClick('Travel')}>Travel</button>
      <button onClick={() => handleClick('Culture')}>Culture</button>
      <button onClick={() => handleClick('Economic')}>Economic</button>
      <button onClick={() => handleClick('Education')}>Education</button>
      <button onClick={() => handleClick('Environment')}>Environment</button>
      <button onClick={() => handleClick('Fashion')}>Fashion</button>
      <button onClick={() => handleClick('Food')}>Food</button>
      <button onClick={() => handleClick('Law')}>Law</button>
      <button onClick={() => handleClick('Music')}>Music</button>
      <button onClick={() => handleClick('Opinion')}>Opinion</button>
    </div>
  )
}