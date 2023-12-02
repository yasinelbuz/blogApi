const express = require('express');
const postsController = require('../controllers/postsController');

const router = express.Router();

router
    .route('/')
    .get(postsController.getAllPosts)
    .post(postsController.createPosts);

router
    .route('/:id')
    .get(postsController.getPost)
    .patch(postsController.updatePost)
    .delete(postsController.deletePost);

module.exports = router;
