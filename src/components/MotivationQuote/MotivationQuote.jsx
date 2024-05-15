import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './MotivationQuote.scss';

const MotivationQuote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const interests = location.state?.interests || [];

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        if (interests.length > 0) {
          const response = await axios.get('https://api.api-ninjas.com/v1/quotes?&X-Api-Key=UxwlSv8VjSIFnFZC9Wvzag==YKfujaB3j5DMPwkb');
          console.log(response.data);
          if (response.data.length > 0) {
            setQuote(response.data[0].quote);
          } else {
            setQuote('No quotes available for this category.');
          }
        } else {
          setQuote('No interests selected.');
        }
      } catch (error) {
        setQuote('Failed to fetch quote.');
        console.error('Error fetching quote:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, [interests]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Motivational Quote',
        text: quote,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <div className="quote">
      {loading ? <p>Loading...</p> : <h1>{quote}</h1>}
      {!loading && quote && (
        <div className="social-share">
          <button onClick={handleShare}>Share</button>
        </div>
      )}
    </div>
  );
};

export default MotivationQuote;