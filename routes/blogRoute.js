const router = require("express").Router();
const blogController = require('../controllers/blogController');

router.route('/create')
    .post([], blogController.createBlog);

router.route('/list')
    .get([], blogController.listBlog);

module.exports = router;