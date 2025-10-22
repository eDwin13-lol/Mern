const axios = require('axios');

const REDDIT_BASE_URL = 'https://www.reddit.com';

// Mock data for development/testing
const MOCK_REDDIT_POSTS = [
  {
    source: 'reddit',
    sourceId: 'reddit_mock1',
    title: 'Amazing new physics discovery changes everything',
    url: 'https://reddit.com/r/videos/comments/amazing',
    thumbnail: 'https://via.placeholder.com/100?text=Reddit1',
    author: 'ScienceBot',
    score: 25430,
    description: 'Scientists have discovered a new particle that could revolutionize our understanding of the universe.',
    metadata: {
      subreddit: 'videos',
      comments: 3421,
      createdUtc: Math.floor(Date.now() / 1000),
    },
  },
  {
    source: 'reddit',
    sourceId: 'reddit_mock2',
    title: 'Epic skateboard trick compilation',
    url: 'https://reddit.com/r/videos/comments/skateboard',
    thumbnail: 'https://via.placeholder.com/100?text=Reddit2',
    author: 'TrickMaster',
    score: 18900,
    description: 'Watch these insane skateboard tricks that will blow your mind!',
    metadata: {
      subreddit: 'videos',
      comments: 2156,
      createdUtc: Math.floor(Date.now() / 1000) - 3600,
    },
  },
  {
    source: 'reddit',
    sourceId: 'reddit_mock3',
    title: 'Cute dog fails compilation',
    url: 'https://reddit.com/r/videos/comments/dogs',
    thumbnail: 'https://via.placeholder.com/100?text=Reddit3',
    author: 'DogLover',
    score: 45621,
    description: 'Hilarious moments of dogs failing at simple tasks!',
    metadata: {
      subreddit: 'videos',
      comments: 5234,
      createdUtc: Math.floor(Date.now() / 1000) - 7200,
    },
  },
];

/**
 * Fetch hot posts from Reddit (no auth required - uses public JSON API)
 * @param {string} subreddit - subreddit name (e.g., 'videos', 'Damnthatsinteresting')
 * @param {number} limit - number of posts to fetch (max 100)
 * @returns {Promise<Array>} Array of posts
 */
async function fetchRedditPosts(subreddit = 'videos', limit = 25) {
  try {
    const url = `${REDDIT_BASE_URL}/r/${subreddit}/hot.json?limit=${limit}`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      },
      timeout: 10000,
    });

    const posts = response.data.data.children.map((item) => {
      const post = item.data;
      return {
        source: 'reddit',
        sourceId: `reddit_${post.id}`,
        title: post.title,
        url: post.url,
        thumbnail: post.thumbnail,
        author: post.author,
        score: post.score,
        description: post.selftext,
        metadata: {
          subreddit: post.subreddit,
          comments: post.num_comments,
          createdUtc: post.created_utc,
        },
      };
    });

    console.log(`✓ Fetched ${posts.length} Reddit posts from r/${subreddit}`);
    return posts;
  } catch (err) {
    console.error('✗ Reddit fetch error:', err.message);
    // Return mock data in development/fallback
    console.log('⚠ Using mock Reddit data for development');
    return MOCK_REDDIT_POSTS.slice(0, limit);
  }
}

module.exports = { fetchRedditPosts };
