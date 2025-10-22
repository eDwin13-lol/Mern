const axios = require('axios');

// Real X (Twitter) posts for development/testing - Popular tweets
const MOCK_X_TWEETS = [
  {
    source: 'x',
    sourceId: 'x_1234567890',
    title: 'Breaking news about technology innovation',
    url: 'https://twitter.com/elonmusk/status/1234567890',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764532/elon_normal.jpg',
    author: 'Elon Musk',
    score: 0,
    views: 5200000,
    description: 'Exciting announcement about new technology and innovation in the industry.',
    metadata: {
      tweetId: '1234567890',
      authorId: '44196397',
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      likes: 425000,
      retweets: 189000,
      replies: 67000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567891',
    title: 'Tech industry insights and future predictions',
    url: 'https://twitter.com/tim_cook/status/1234567891',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764533/tim_normal.jpg',
    author: 'Tim Cook',
    score: 0,
    views: 3100000,
    description: 'Insights into the future of technology and digital innovation.',
    metadata: {
      tweetId: '1234567891',
      authorId: '15358099',
      publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      likes: 287000,
      retweets: 145000,
      replies: 52000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567892',
    title: 'Climate change awareness and environmental action',
    url: 'https://twitter.com/GretaThunberg/status/1234567892',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764534/greta_normal.jpg',
    author: 'Greta Thunberg',
    score: 0,
    views: 4800000,
    description: 'Important message about climate action and environmental sustainability.',
    metadata: {
      tweetId: '1234567892',
      authorId: '1180586497',
      publishedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
      likes: 567000,
      retweets: 234000,
      replies: 89000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567893',
    title: 'Space exploration and NASA updates',
    url: 'https://twitter.com/nasa/status/1234567893',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764535/nasa_normal.jpg',
    author: 'NASA',
    score: 0,
    views: 3900000,
    description: 'Latest updates from NASA about space exploration missions.',
    metadata: {
      tweetId: '1234567893',
      authorId: '11348282',
      publishedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
      likes: 312000,
      retweets: 156000,
      replies: 43000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567894',
    title: 'Sports highlights and game recaps',
    url: 'https://twitter.com/espn/status/1234567894',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764536/espn_normal.jpg',
    author: 'ESPN',
    score: 0,
    views: 4200000,
    description: 'Latest sports highlights and game recaps from around the world.',
    metadata: {
      tweetId: '1234567894',
      authorId: '20215994',
      publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
      likes: 234000,
      retweets: 178000,
      replies: 51000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567895',
    title: 'Business and entrepreneurship advice',
    url: 'https://twitter.com/billgates/status/1234567895',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764537/billgates_normal.jpg',
    author: 'Bill Gates',
    score: 0,
    views: 3600000,
    description: 'Thoughts on business, entrepreneurship, and global development.',
    metadata: {
      tweetId: '1234567895',
      authorId: '50393960',
      publishedAt: new Date(Date.now() - 86400000 * 6).toISOString(),
      likes: 298000,
      retweets: 145000,
      replies: 67000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567896',
    title: 'Entertainment and movie news',
    url: 'https://twitter.com/Marvel/status/1234567896',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764538/marvel_normal.jpg',
    author: 'Marvel Studios',
    score: 0,
    views: 2800000,
    description: 'Latest news and updates from Marvel Studios about upcoming films.',
    metadata: {
      tweetId: '1234567896',
      authorId: '557750891',
      publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
      likes: 189000,
      retweets: 123000,
      replies: 45000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567897',
    title: 'Music news and artist announcements',
    url: 'https://twitter.com/spotify/status/1234567897',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764539/spotify_normal.jpg',
    author: 'Spotify',
    score: 0,
    views: 3100000,
    description: 'New music releases and artist announcements on Spotify.',
    metadata: {
      tweetId: '1234567897',
      authorId: '368751891',
      publishedAt: new Date(Date.now() - 86400000 * 8).toISOString(),
      likes: 267000,
      retweets: 134000,
      replies: 52000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567898',
    title: 'Political news and policy updates',
    url: 'https://twitter.com/CNN/status/1234567898',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764540/cnn_normal.jpg',
    author: 'CNN',
    score: 0,
    views: 4600000,
    description: 'Breaking political news and policy updates from around the world.',
    metadata: {
      tweetId: '1234567898',
      authorId: '759251',
      publishedAt: new Date(Date.now() - 86400000 * 9).toISOString(),
      likes: 456000,
      retweets: 234000,
      replies: 123000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567899',
    title: 'Science and research breakthroughs',
    url: 'https://twitter.com/NatGeo/status/1234567899',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764541/natgeo_normal.jpg',
    author: 'National Geographic',
    score: 0,
    views: 3400000,
    description: 'Latest science and research breakthroughs from around the world.',
    metadata: {
      tweetId: '1234567899',
      authorId: '17876687',
      publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
      likes: 323000,
      retweets: 178000,
      replies: 67000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567900',
    title: 'Fashion and lifestyle trends',
    url: 'https://twitter.com/Vogue/status/1234567900',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764542/vogue_normal.jpg',
    author: 'Vogue',
    score: 0,
    views: 2900000,
    description: 'Latest fashion trends and lifestyle tips from Vogue.',
    metadata: {
      tweetId: '1234567900',
      authorId: '76891111',
      publishedAt: new Date(Date.now() - 86400000 * 11).toISOString(),
      likes: 198000,
      retweets: 98000,
      replies: 34000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567901',
    title: 'Gaming news and esports updates',
    url: 'https://twitter.com/PlayStationUK/status/1234567901',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764543/playstation_normal.jpg',
    author: 'PlayStation UK',
    score: 0,
    views: 3200000,
    description: 'Latest gaming news and esports updates from PlayStation.',
    metadata: {
      tweetId: '1234567901',
      authorId: '265218091',
      publishedAt: new Date(Date.now() - 86400000 * 12).toISOString(),
      likes: 267000,
      retweets: 145000,
      replies: 56000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567902',
    title: 'Travel and adventure inspiration',
    url: 'https://twitter.com/lonelyplanet/status/1234567902',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764544/lonelyplanet_normal.jpg',
    author: 'Lonely Planet',
    score: 0,
    views: 2600000,
    description: 'Travel inspiration and adventure tips from Lonely Planet.',
    metadata: {
      tweetId: '1234567902',
      authorId: '16141549',
      publishedAt: new Date(Date.now() - 86400000 * 13).toISOString(),
      likes: 156000,
      retweets: 89000,
      replies: 28000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567903',
    title: 'Food and cooking recipes',
    url: 'https://twitter.com/GordonRamsay/status/1234567903',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764545/gordonramsay_normal.jpg',
    author: 'Gordon Ramsay',
    score: 0,
    views: 3700000,
    description: 'Cooking recipes and culinary tips from Chef Gordon Ramsay.',
    metadata: {
      tweetId: '1234567903',
      authorId: '78930071',
      publishedAt: new Date(Date.now() - 86400000 * 14).toISOString(),
      likes: 289000,
      retweets: 156000,
      replies: 67000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567904',
    title: 'Fitness and health tips',
    url: 'https://twitter.com/ArianaGrande/status/1234567904',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764546/arianagrande_normal.jpg',
    author: 'Ariana Grande',
    score: 0,
    views: 4100000,
    description: 'Fitness and health tips from Ariana Grande.',
    metadata: {
      tweetId: '1234567904',
      authorId: '162619788',
      publishedAt: new Date(Date.now() - 86400000 * 15).toISOString(),
      likes: 334000,
      retweets: 167000,
      replies: 56000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567905',
    title: 'Education and learning resources',
    url: 'https://twitter.com/Khan_Academy/status/1234567905',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764547/khan_normal.jpg',
    author: 'Khan Academy',
    score: 0,
    views: 2400000,
    description: 'Educational resources and learning tips from Khan Academy.',
    metadata: {
      tweetId: '1234567905',
      authorId: '238447919',
      publishedAt: new Date(Date.now() - 86400000 * 16).toISOString(),
      likes: 145000,
      retweets: 78000,
      replies: 23000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567906',
    title: 'Cryptocurrency and blockchain news',
    url: 'https://twitter.com/chainalysis/status/1234567906',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764548/chainalysis_normal.jpg',
    author: 'Chainalysis',
    score: 0,
    views: 2800000,
    description: 'Latest cryptocurrency and blockchain news from Chainalysis.',
    metadata: {
      tweetId: '1234567906',
      authorId: '807094563',
      publishedAt: new Date(Date.now() - 86400000 * 17).toISOString(),
      likes: 213000,
      retweets: 123000,
      replies: 45000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567907',
    title: 'AI and machine learning updates',
    url: 'https://twitter.com/OpenAI/status/1234567907',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764549/openai_normal.jpg',
    author: 'OpenAI',
    score: 0,
    views: 3600000,
    description: 'Latest AI and machine learning updates from OpenAI.',
    metadata: {
      tweetId: '1234567907',
      authorId: '1589191',
      publishedAt: new Date(Date.now() - 86400000 * 18).toISOString(),
      likes: 412000,
      retweets: 201000,
      replies: 78000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567908',
    title: 'Startup and venture capital news',
    url: 'https://twitter.com/TechCrunch/status/1234567908',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764550/techcrunch_normal.jpg',
    author: 'TechCrunch',
    score: 0,
    views: 2900000,
    description: 'Startup and venture capital news from TechCrunch.',
    metadata: {
      tweetId: '1234567908',
      authorId: '16621286',
      publishedAt: new Date(Date.now() - 86400000 * 19).toISOString(),
      likes: 267000,
      retweets: 145000,
      replies: 52000,
    },
  },
  {
    source: 'x',
    sourceId: 'x_1234567909',
    title: 'Social impact and nonprofits',
    url: 'https://twitter.com/UNICEF/status/1234567909',
    thumbnail: 'https://pbs.twimg.com/profile_images/1445764551/unicef_normal.jpg',
    author: 'UNICEF',
    score: 0,
    views: 2100000,
    description: 'Social impact and nonprofit initiatives from UNICEF.',
    metadata: {
      tweetId: '1234567909',
      authorId: '612473',
      publishedAt: new Date(Date.now() - 86400000 * 20).toISOString(),
      likes: 189000,
      retweets: 112000,
      replies: 34000,
    },
  },
];

/**
 * Fetch X (Twitter) posts using X API v2
 * Requires X_API_KEY env variable
 * @param {number} maxResults - max tweets to fetch
 * @returns {Promise<Array>} Array of tweet objects
 */
async function fetchXPosts(maxResults = 20) {
  const apiKey = process.env.X_API_KEY;

  if (!apiKey) {
    console.warn('⚠ X_API_KEY not set. Using mock X data for development');
    return MOCK_X_TWEETS.slice(0, maxResults);
  }

  try {
    const url = 'https://api.twitter.com/2/tweets/search/recent';
    const response = await axios.get(url, {
      params: {
        query: 'trending OR viral -is:retweet',
        max_results: maxResults,
        'tweet.fields': 'public_metrics,created_at,author_id',
        'user.fields': 'name,username,profile_image_url',
        expansions: 'author_id',
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      timeout: 10000,
    });

    const users = {};
    if (response.data.includes?.users) {
      response.data.includes.users.forEach(user => {
        users[user.id] = user;
      });
    }

    const tweets = response.data.data.map((tweet) => {
      const author = users[tweet.author_id] || {};
      return {
        source: 'x',
        sourceId: `x_${tweet.id}`,
        title: tweet.text.substring(0, 100),
        url: `https://twitter.com/${author.username}/status/${tweet.id}`,
        thumbnail: author.profile_image_url || 'https://pbs.twimg.com/profile_images/default.jpg',
        author: author.name || 'Unknown',
        score: 0,
        views: tweet.public_metrics?.impression_count || 0,
        description: tweet.text,
        metadata: {
          tweetId: tweet.id,
          authorId: tweet.author_id,
          publishedAt: tweet.created_at,
          likes: tweet.public_metrics?.like_count || 0,
          retweets: tweet.public_metrics?.retweet_count || 0,
          replies: tweet.public_metrics?.reply_count || 0,
        },
      };
    });

    console.log(`✓ Fetched ${tweets.length} X posts`);
    return tweets;
  } catch (err) {
    console.error('✗ X fetch error:', err.message);
    // Return mock data as fallback
    console.log('⚠ Using mock X data (API key might be invalid)');
    return MOCK_X_TWEETS.slice(0, maxResults);
  }
}

module.exports = { fetchXPosts };
