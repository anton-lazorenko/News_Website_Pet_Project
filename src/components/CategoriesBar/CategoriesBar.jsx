import { useEffect } from 'react'

import './categoriesBar.css'

export function CategoriesBar({ setCategory }) {

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
      <button onClick={() => setCategory('All')}>All news</button>
      <button onClick={() => setCategory('Politics')}>Politics</button>
      <button onClick={() => setCategory('Technology')}>Technology</button>
      <button onClick={() => setCategory('Sports')}>Sports</button>
      <button onClick={() => setCategory('Entertainment')}>Entertainment</button>
      <button onClick={() => setCategory('World')}>World</button>
      <button onClick={() => setCategory('Business')}>Business</button>
      <button onClick={() => setCategory('Science')}>Science</button>
      <button onClick={() => setCategory('Weather')}>Weather</button>
      <button onClick={() => setCategory('Society')}>Society</button>
      <button onClick={() => setCategory('Health')}>Health</button>
      <button onClick={() => setCategory('Gaming')}>Gaming</button>
      <button onClick={() => setCategory('Travel')}>Travel</button>
      <button onClick={() => setCategory('Culture')}>Culture</button>
      <button onClick={() => setCategory('Economic')}>Economic</button>
      <button onClick={() => setCategory('Education')}>Education</button>
      <button onClick={() => setCategory('Environment')}>Environment</button>
      <button onClick={() => setCategory('Fashion')}>Fashion</button>
      <button onClick={() => setCategory('Food')}>Food</button>
      <button onClick={() => setCategory('Law')}>Law</button>
      <button onClick={() => setCategory('Music')}>Music</button>
      <button onClick={() => setCategory('Opinion')}>Opinion</button>
    </div>
  )
}