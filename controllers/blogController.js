const mongoose = require('mongoose');
const Blog = require('../model/blog');

const createBlog = async (req, res, next) => {
  const params = {
    title: req.body.title,
    content: req.body.content,
  }
  const result = await Blog.create(params);
  res.status(200).json(result);
}

const listBlog = async (req, res, next) => {
  const result = await Blog.find();
  res.status(200).json(result);
}

module.exports = {
  createBlog,
  listBlog
}