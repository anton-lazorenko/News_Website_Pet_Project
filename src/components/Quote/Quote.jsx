import './quote.css';
import { useState, useEffect } from 'react';
import { quoteApiUrl, quoteApiKey } from '../../constants/constants';

export function Quote() {
  const [quoteObj, setQuoteObj] = useState(null);  

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(`${quoteApiUrl}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': quoteApiKey
          }
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        console.log(data);

        if (data.length > 0) {
          const random = data[Math.floor(Math.random() * data.length)];
          setQuoteObj(random);  
        }
      } catch (err) {
        console.error(err);
        setQuoteObj({ quote: 'Не удалось загрузить цитату', author: '' });
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className='quote-container'>
      <h2>Quote of the day</h2>
      {quoteObj && (
        <>
          <p className='quote-text'>"{quoteObj.quote}"</p>
          <p className='quote-author'>- {quoteObj.author || 'Unknown'}</p>
        </>
      )}
    </div>
  );
}
