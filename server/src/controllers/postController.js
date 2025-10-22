const Post = require('../models/Post');
const { fetchRedditPosts } = require('../utils/redditFetcher');
const { fetchYouTubeShorts } = require('../utils/youtubeFetcher');
const { fetchTikTokVideos } = require('../utils/tiktokFetcher');
const { fetchXPosts } = require('../utils/xFetcher');
const { fetchTwitchContent } = require('../utils/twitchFetcher');
const { fetchInstagramContent } = require('../utils/instagramFetcher');

/**
 * Get paginated feed
 * Query params: skip, limit, source (optional: 'reddit', 'youtube', 'tiktok', or 'x')
 */
async function getFeed(req, res) {
  try {
    const { skip = 0, limit = 20, source } = req.query;
    const skipNum = parseInt(skip, 10);
    const limitNum = Math.min(parseInt(limit, 10), 50); // Cap at 50

    let query = {};
    if (source && ['reddit', 'youtube', 'tiktok', 'x', 'twitch', 'instagram'].includes(source)) {
      query.source = source;
    }

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .skip(skipNum)
      .limit(limitNum)
      .lean();

    const total = await Post.countDocuments(query);

    res.json({
      success: true,
      data: posts,
      pagination: {
        skip: skipNum,
        limit: limitNum,
        total,
        hasMore: skipNum + limitNum < total,
      },
    });
  } catch (err) {
    console.error('Error fetching feed:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

/**
 * Refresh feed - fetch new posts from Reddit and YouTube
 */
async function refreshFeed(req, res) {
  try {
    console.log('Starting feed refresh...');

    // Fetch from all sources
    const redditPosts = await fetchRedditPosts('videos', 12);
    const youTubePosts = await fetchYouTubeShorts(12);
    const tikTokVideos = await fetchTikTokVideos(12);
    const xPosts = await fetchXPosts(12);
    const twitchContent = await fetchTwitchContent(12);
    const instagramContent = await fetchInstagramContent(12);

    const allPosts = [...redditPosts, ...youTubePosts, ...tikTokVideos, ...xPosts, ...twitchContent, ...instagramContent];

    // Insert posts, skipping duplicates
    let inserted = 0;
    for (const post of allPosts) {
      const exists = await Post.findOne({ sourceId: post.sourceId });
      if (!exists) {
        await Post.create(post);
        inserted++;
      }
    }

    res.json({
      success: true,
      message: `Refresh complete. Inserted ${inserted} new posts from Reddit, YouTube, TikTok, X, Twitch, and Instagram.`,
      totalFetched: allPosts.length,
      inserted,
    });
  } catch (err) {
    console.error('Error refreshing feed:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

/**
 * Get posts by source
 */
async function getPostsBySource(req, res) {
  try {
    const { source } = req.params;
    const { skip = 0, limit = 20 } = req.query;

    if (!['reddit', 'youtube'].includes(source)) {
      return res.status(400).json({ success: false, error: 'Invalid source' });
    }

    const skipNum = parseInt(skip, 10);
    const limitNum = Math.min(parseInt(limit, 10), 50);

    const posts = await Post.find({ source })
      .sort({ createdAt: -1 })
      .skip(skipNum)
      .limit(limitNum)
      .lean();

    const total = await Post.countDocuments({ source });

    res.json({
      success: true,
      source,
      data: posts,
      pagination: {
        skip: skipNum,
        limit: limitNum,
        total,
        hasMore: skipNum + limitNum < total,
      },
    });
  } catch (err) {
    console.error('Error fetching posts by source:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  getFeed,
  refreshFeed,
  getPostsBySource,
};
