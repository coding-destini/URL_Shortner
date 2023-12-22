// URL schema
const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url