const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.model('Blog', blogSchema);