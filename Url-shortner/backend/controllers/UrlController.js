const shortid = require('shortid');
const Url = require('../models/Url')
const mongoose = require('mongoose')



// API endpoint to shorten URL
module.exports.shorten =  async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();
  
    // Save to MongoDB
    await Url.create({ originalUrl, shortUrl });
  
    res.json({ originalUrl, shortUrl });
  };
  
  // API endpoint to redirect to original URL
  module.exports.shortUrl = async (req, res) => {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });
  
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  };