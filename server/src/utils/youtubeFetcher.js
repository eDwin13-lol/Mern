const axios = require('axios');

// Mock YouTube Shorts for development/testing
const MOCK_YOUTUBE_SHORTS = [
  {
    source: 'youtube',
    sourceId: 'youtube_mock1',
    title: 'Mind-blowing optical illusion - Your eyes will deceive you!',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://via.placeholder.com/180x320?text=YT+Short+1',
    author: 'Mind Blower Channel',
    score: 0,
    views: 1250000,
    description: 'Check out this incredible optical illusion that will make you question what you see!',
    metadata: {
      videoId: 'mock1',
      channelId: 'UCxxxxxxx',
      publishedAt: new Date().toISOString(),
    },
  },
  {
    source: 'youtube',
    sourceId: 'youtube_mock2',
    title: 'Top 5 VIRAL TikTok Dances Of 2025',
    url: 'https://www.youtube.com/watch?v=videoId2',
    thumbnail: 'https://via.placeholder.com/180x320?text=YT+Short+2',
    author: 'Dance Central',
    score: 0,
    views: 2150000,
    description: 'The hottest and most trending TikTok dances that took over the internet.',
    metadata: {
      videoId: 'mock2',
      channelId: 'UCyyyyyyy',
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
    },
  },
  {
    source: 'youtube',
    sourceId: 'youtube_mock3',
    title: 'Unbelievable Sports Moments That Will Shock You',
    url: 'https://www.youtube.com/watch?v=videoId3',
    thumbnail: 'https://via.placeholder.com/180x320?text=YT+Short+3',
    author: 'Sports Highlights',
    score: 0,
    views: 3420000,
    description: 'Watch the most incredible and unexpected sports moments ever caught on camera!',
    metadata: {
      videoId: 'mock3',
      channelId: 'UCzzzzzzz',
      publishedAt: new Date(Date.now() - 7200000).toISOString(),
    },
  },
];

/**
 * Fetch YouTube Shorts using YouTube Data API
 * Requires YOUTUBE_API_KEY env variable
 * @param {number} maxResults - max videos to fetch
 * @returns {Promise<Array>} Array of video objects
 */
async function fetchYouTubeShorts(maxResults = 25) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn('⚠ YOUTUBE_API_KEY not set. Using mock YouTube data for development');
    return MOCK_YOUTUBE_SHORTS.slice(0, maxResults);
  }

  try {
    const url = 'https://www.googleapis.com/youtube/v3/search';
    const response = await axios.get(url, {
      params: {
        q: 'shorts',
        part: 'snippet',
        maxResults: maxResults,
        type: 'video',
        videoDuration: 'short',
        key: apiKey,
        order: 'relevance',
      },
      timeout: 10000,
    });

    const videos = response.data.items.map((item) => {
      return {
        source: 'youtube',
        sourceId: `youtube_${item.id.videoId}`,
        title: item.snippet.title,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        thumbnail: item.snippet.thumbnails.medium.url,
        author: item.snippet.channelTitle,
        score: 0,
        description: item.snippet.description,
        metadata: {
          videoId: item.id.videoId,
          channelId: item.snippet.channelId,
          publishedAt: item.snippet.publishedAt,
        },
      };
    });

    console.log(`✓ Fetched ${videos.length} YouTube Shorts`);
    return videos;
  } catch (err) {
    console.error('✗ YouTube fetch error:', err.message);
    // Return mock data as fallback
    console.log('⚠ Using mock YouTube data (API key might be invalid)');
    return MOCK_YOUTUBE_SHORTS.slice(0, maxResults);
  }
}

module.exports = { fetchYouTubeShorts };
