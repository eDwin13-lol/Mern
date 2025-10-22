const express = require('express');
const router = express.Router();
const {
  getFeed,
  refreshFeed,
  getPostsBySource,
} = require('../controllers/postController');

/**
 * GET /api/posts - Get paginated feed
 * Query: skip, limit, source (optional)
 */
router.get('/', getFeed);

/**
 * POST /api/posts/refresh - Refresh feed from Reddit & YouTube
 */
router.post('/refresh', refreshFeed);

/**
 * GET /api/posts/source/:source - Get posts by source
 * Params: source (reddit or youtube)
 * Query: skip, limit
 */
router.get('/source/:source', getPostsBySource);

module.exports = router;
