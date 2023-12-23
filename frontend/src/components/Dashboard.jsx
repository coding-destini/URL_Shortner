import React, { useState } from 'react';
import './dashboard.css';
import axios from 'axios';
import useAuthentication from './Auth/useAuthetication';
import toast from 'react-hot-toast';

const Dashboard = () => {
  useAuthentication();
  const [urlInput, setUrlInput] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShortenUrl = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post('https://urlshortner-hr2j.onrender.com/url/shorten', { originalUrl: urlInput }, {
        headers: {
          Authorization: token,
        },
      });

      const { shortUrl } = response.data;
      setShortenedUrl(shortUrl);
      toast('Good Job ! Link Shorted Successfully ', {
        icon: '👏',
      });
    } catch (error) {
      console.error('Shorten URL failed:', error);
    }
  };


  return (
    <div className="container">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <label htmlFor="urlInput">Enter URL:</label>
        <input
          type="url"
          id="urlInput"
          name="urlInput"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          required
        />
        <button type="button" onClick={handleShortenUrl}>
          Shorten URL
        </button>
        {shortenedUrl && (
          <p id="shortenedUrl">
            Shortened URL: <span id="output"><a href={`http://localhost:3000/url/${shortenedUrl}`} target="_blank" rel="noopener noreferrer">{`http://localhost:3000/${shortenedUrl}`}</a></span>
          </p>

        )}
      </div>
    </div>
  );
};

export default Dashboard;
