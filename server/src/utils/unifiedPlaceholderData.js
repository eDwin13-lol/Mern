/**
 * Unified Placeholder Data Module
 * Combines all platform content (Reddit, YouTube, TikTok, X, Twitch, Instagram)
 * in random order for testing and demo purposes
 */

// Unified content pool with all platforms mixed together
const unifiedPlaceholderData = [
  // X/Twitter - Elon Musk
  {
    source: 'x',
    title: 'Excited about Mars colonization progress',
    url: 'https://twitter.com/elonmusk/status/1234567890',
    description: 'SpaceX just achieved another milestone in reusable rocket technology',
    author: 'Elon Musk',
    metadata: {
      tweetId: '1234567890',
      type: 'tweet',
    },
    views: 2100000,
    likes: 523000,
    comments: 89000,
  },
  // YouTube - Rick Astley
  {
    source: 'youtube',
    title: 'Rick Astley - Never Gonna Give You Up',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Official music video for the classic 1987 hit "Never Gonna Give You Up"',
    author: 'Rick Astley',
    metadata: {
      videoId: 'dQw4w9WgXcQ',
      type: 'video',
    },
    views: 1400000000,
    likes: 12500000,
    comments: 2300000,
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  // TikTok - Charli D'Amelio
  {
    source: 'tiktok',
    title: 'New dance challenge trending',
    url: 'https://www.tiktok.com/@charlidamelio/video/1234567890',
    description: 'The viral dance that took over TikTok this week',
    author: 'charlidamelio',
    metadata: {
      videoId: '1234567890',
      type: 'reel',
      duration: '45',
    },
    views: 58000000,
    likes: 12300000,
    comments: 4200000,
  },
  // Instagram - Fashion Influencer
  {
    source: 'instagram',
    title: 'Urban Fashion Styling Tips',
    url: 'https://instagram.com/p/ABC123456789/',
    description: 'Street style fashion tips on how to mix and match pieces for ultimate cool factor',
    author: 'style_icon_nyc',
    metadata: {
      postId: 'ABC123456789',
      type: 'reel',
      duration: '45',
    },
    views: 432000,
    likes: 34200,
    comments: 5600,
  },
  // Twitch - Gaming
  {
    source: 'twitch',
    title: 'Valorant Competitive Stream',
    url: 'https://twitch.tv/videos/1234567890',
    description: 'High-ranked Valorant competitive gameplay with pro tips',
    author: 'ProGamer_X',
    metadata: {
      videoId: '1234567890',
      type: 'video',
      game: 'Valorant',
      duration: '3600',
    },
    views: 125000,
    likes: 8500,
    comments: 1200,
  },
  // Reddit - Gaming Discussion
  {
    source: 'reddit',
    title: 'Best gaming setups of 2024',
    url: 'https://reddit.com/r/gaming/comments/abc123/',
    description: 'Community showcase of high-end gaming rigs and accessories',
    author: 'tech_enthusiast_42',
    metadata: {
      postId: 'abc123',
      type: 'discussion',
    },
    views: 245000,
    likes: 18900,
    comments: 3400,
    thumbnail: 'https://via.placeholder.com/500x300',
  },
  // YouTube - PSY Gangnam Style
  {
    source: 'youtube',
    title: 'PSY - GANGNAM STYLE',
    url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    description: 'Gangnam Style by South Korean rapper PSY',
    author: 'PSY',
    metadata: {
      videoId: '9bZkp7q19f0',
      type: 'video',
    },
    views: 4600000000,
    likes: 28300000,
    comments: 5600000,
    thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg',
  },
  // TikTok - Addison Rae
  {
    source: 'tiktok',
    title: 'Daily life vlog compilation',
    url: 'https://www.tiktok.com/@addisonre/video/9876543210',
    description: 'Behind the scenes of content creation life',
    author: 'addisonre',
    metadata: {
      videoId: '9876543210',
      type: 'reel',
      duration: '60',
    },
    views: 42300000,
    likes: 8900000,
    comments: 1800000,
  },
  // Instagram - Fitness Creator
  {
    source: 'instagram',
    title: 'Morning Yoga & Fitness Routine',
    url: 'https://instagram.com/p/DEF987654321/',
    description: 'Starting the day with a full body yoga and stretching routine for flexibility',
    author: 'fitness_guru_2024',
    metadata: {
      postId: 'DEF987654321',
      type: 'reel',
      duration: '60',
    },
    views: 234000,
    likes: 18900,
    comments: 2100,
  },
  // Twitch - Minecraft Creative
  {
    source: 'twitch',
    title: 'Minecraft Creative Building',
    url: 'https://twitch.tv/videos/1234567894',
    description: 'Building an elaborate fantasy castle in creative mode',
    author: 'BlockMaster_Build',
    metadata: {
      videoId: '1234567894',
      type: 'video',
      game: 'Minecraft',
      duration: '3600',
    },
    views: 145000,
    likes: 9800,
    comments: 2100,
  },
  // X/Twitter - NASA
  {
    source: 'x',
    title: 'Historic Mars Rover Discovery',
    url: 'https://twitter.com/nasa/status/9876543210',
    description: 'New geological formations discovered on Mars surface',
    author: 'NASA',
    metadata: {
      tweetId: '9876543210',
      type: 'tweet',
    },
    views: 3200000,
    likes: 456000,
    comments: 123000,
  },
  // Reddit - Tech News
  {
    source: 'reddit',
    title: 'Apple announces new breakthrough in AI',
    url: 'https://reddit.com/r/technology/comments/xyz789/',
    description: 'Revolutionary neural chip could change computing forever',
    author: 'tech_news_bot',
    metadata: {
      postId: 'xyz789',
      type: 'news',
    },
    views: 567000,
    likes: 34200,
    comments: 8900,
    thumbnail: 'https://via.placeholder.com/500x300',
  },
  // YouTube - Ed Sheeran
  {
    source: 'youtube',
    title: 'Ed Sheeran - Shape of You',
    url: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    description: 'Official music video from Ed Sheeran\'s album ÷',
    author: 'Ed Sheeran',
    metadata: {
      videoId: 'JGwWNGJdvx8',
      type: 'video',
    },
    views: 3100000000,
    likes: 18900000,
    comments: 3400000,
    thumbnail: 'https://i.ytimg.com/vi/JGwWNGJdvx8/maxresdefault.jpg',
  },
  // TikTok - Will Smith
  {
    source: 'tiktok',
    title: 'Fresh Prince Reunion Surprise',
    url: 'https://www.tiktok.com/@willsmith/video/5432109876',
    description: 'Unexpected reunion with Fresh Prince cast members',
    author: 'willsmith',
    metadata: {
      videoId: '5432109876',
      type: 'reel',
      duration: '120',
    },
    views: 72400000,
    likes: 15600000,
    comments: 2800000,
  },
  // Instagram - Gourmet Cooking
  {
    source: 'instagram',
    title: 'Gourmet Cooking: Michelin Star Recipe',
    url: 'https://instagram.com/p/GHI456789012/',
    description: 'Creating a 5-star restaurant quality dish from scratch in my home kitchen',
    author: 'chef_extraordinaire',
    metadata: {
      postId: 'GHI456789012',
      type: 'reel',
      duration: '90',
    },
    views: 567000,
    likes: 45600,
    comments: 8900,
  },
  // Twitch - Apex Legends Tournament
  {
    source: 'twitch',
    title: 'Apex Legends Tournament Final',
    url: 'https://twitch.tv/videos/1234567895',
    description: 'Final round of professional Apex Legends esports tournament',
    author: 'EsportsCentral',
    metadata: {
      videoId: '1234567895',
      type: 'video',
      game: 'Apex Legends',
      duration: '7200',
    },
    views: 456000,
    likes: 32100,
    comments: 8900,
  },
  // Reddit - Funny Videos
  {
    source: 'reddit',
    title: 'Hilarious pet compilation that will make you laugh',
    url: 'https://reddit.com/r/funny/comments/def456/',
    description: 'Funny animal moments caught on camera',
    author: 'pet_lover_99',
    metadata: {
      postId: 'def456',
      type: 'video',
    },
    views: 892000,
    likes: 67800,
    comments: 12300,
    thumbnail: 'https://via.placeholder.com/500x300',
  },
  // YouTube - BTS Dynamite
  {
    source: 'youtube',
    title: 'BTS - Dynamite',
    url: 'https://www.youtube.com/watch?v=gdZLi9oWNZg',
    description: 'Official music video for BTS hit single Dynamite',
    author: 'BTS official',
    metadata: {
      videoId: 'gdZLi9oWNZg',
      type: 'video',
    },
    views: 1800000000,
    likes: 15200000,
    comments: 2100000,
    thumbnail: 'https://i.ytimg.com/vi/gdZLi9oWNZg/maxresdefault.jpg',
  },
  // TikTok - Cristiano Ronaldo
  {
    source: 'tiktok',
    title: 'Football training session with CR7',
    url: 'https://www.tiktok.com/@cristiano/video/7654321098',
    description: 'Behind the scenes training footage and fitness tips',
    author: 'cristiano',
    metadata: {
      videoId: '7654321098',
      type: 'reel',
      duration: '75',
    },
    views: 89300000,
    likes: 23100000,
    comments: 5600000,
  },
  // Instagram - Travel Vlog
  {
    source: 'instagram',
    title: 'Travel Vlog: Hidden Gems in Tokyo',
    url: 'https://instagram.com/p/JKL789012345/',
    description: 'Exploring hidden cafes, temples, and street food spots in Tokyo that tourists miss',
    author: 'wanderlust_nomad',
    metadata: {
      postId: 'JKL789012345',
      type: 'reel',
      duration: '180',
    },
    views: 789000,
    likes: 62300,
    comments: 12100,
  },
  // Twitch - GTA 6 Early Access
  {
    source: 'twitch',
    title: 'GTA 6 Early Access Gameplay',
    url: 'https://twitch.tv/videos/1234567896',
    description: 'First look at GTA 6 with exclusive early access footage',
    author: 'GamingNews_HD',
    metadata: {
      videoId: '1234567896',
      type: 'video',
      game: 'Grand Theft Auto VI',
      duration: '6000',
    },
    views: 523000,
    likes: 38900,
    comments: 11200,
  },
  // X/Twitter - OpenAI
  {
    source: 'x',
    title: 'GPT-5 breakthrough announced',
    url: 'https://twitter.com/openai/status/5432109876',
    description: 'Next generation language model with unprecedented capabilities',
    author: 'OpenAI',
    metadata: {
      tweetId: '5432109876',
      type: 'tweet',
    },
    views: 4500000,
    likes: 678000,
    comments: 145000,
  },
  // Reddit - DIY Projects
  {
    source: 'reddit',
    title: 'Built my own PC from scratch - Here\'s how',
    url: 'https://reddit.com/r/buildapc/comments/ghi789/',
    description: 'Step-by-step guide to building a custom gaming PC',
    author: 'pc_builder_pro',
    metadata: {
      postId: 'ghi789',
      type: 'guide',
    },
    views: 345000,
    likes: 28900,
    comments: 4200,
    thumbnail: 'https://via.placeholder.com/500x300',
  },
  // YouTube - Taylor Swift
  {
    source: 'youtube',
    title: 'Taylor Swift - Blank Space',
    url: 'https://www.youtube.com/watch?v=e-IWRmpefzE',
    description: 'Music video for Blank Space from 1989 album',
    author: 'Taylor Swift',
    metadata: {
      videoId: 'e-IWRmpefzE',
      type: 'video',
    },
    views: 3200000000,
    likes: 21100000,
    comments: 4800000,
    thumbnail: 'https://i.ytimg.com/vi/e-IWRmpefzE/maxresdefault.jpg',
  },
  // TikTok - The Rock
  {
    source: 'tiktok',
    title: 'Morning workout routine motivation',
    url: 'https://www.tiktok.com/@therock/video/8765432109',
    description: 'Intense workout session to motivate your fitness journey',
    author: 'therock',
    metadata: {
      videoId: '8765432109',
      type: 'reel',
      duration: '120',
    },
    views: 126000000,
    likes: 34200000,
    comments: 6700000,
  },
  // Instagram - DIY Home Decoration
  {
    source: 'instagram',
    title: 'DIY Home Decoration Ideas',
    url: 'https://instagram.com/p/MNO012345678/',
    description: 'Transform your space with these budget-friendly DIY home decoration projects',
    author: 'home_decor_diy',
    metadata: {
      postId: 'MNO012345678',
      type: 'reel',
      duration: '120',
    },
    views: 345000,
    likes: 28900,
    comments: 4200,
  },
  // Twitch - Taiko no Tatsujin
  {
    source: 'twitch',
    title: 'Taiko no Tatsujin Ranked Challenge',
    url: 'https://twitch.tv/clips/taiko-challenge-999',
    description: 'Attempting perfect scores on Taiko no Tatsujin extreme mode',
    author: 'RhythmGamer_Pro',
    metadata: {
      clipId: 'taiko-challenge-999',
      type: 'clip',
      game: 'Taiko no Tatsujin',
      duration: '180',
    },
    views: 89000,
    likes: 6700,
    comments: 1400,
  },
  // X/Twitter - CNN
  {
    source: 'x',
    title: 'Breaking News: Historic Climate Agreement Signed',
    url: 'https://twitter.com/CNN/status/7654321098',
    description: 'World leaders reach unprecedented climate action accord',
    author: 'CNN',
    metadata: {
      tweetId: '7654321098',
      type: 'tweet',
    },
    views: 2800000,
    likes: 398000,
    comments: 89000,
  },
  // Reddit - Movie Reviews
  {
    source: 'reddit',
    title: 'Avatar 3 is a visual masterpiece - Full review',
    url: 'https://reddit.com/r/movies/comments/jkl234/',
    description: 'Detailed analysis of the latest Avatar film',
    author: 'movie_critic_elite',
    metadata: {
      postId: 'jkl234',
      type: 'review',
    },
    views: 456000,
    likes: 32100,
    comments: 8900,
    thumbnail: 'https://via.placeholder.com/500x300',
  },
];

/**
 * Get randomized unified placeholder data
 * @param {number} limit - Number of items to return
 * @returns {Array} Shuffled array of mixed platform content
 */
function getRandomizedPlaceholderData(limit = 20) {
  const shuffled = [...unifiedPlaceholderData]
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
  
  return shuffled;
}

/**
 * Get all placeholder data
 * @returns {Array} Complete unified placeholder data
 */
function getAllPlaceholderData() {
  return unifiedPlaceholderData;
}

/**
 * Get placeholder data by source
 * @param {string} source - Platform name (reddit, youtube, tiktok, x, twitch, instagram)
 * @param {number} limit - Number of items to return
 * @returns {Array} Filtered placeholder data for specified source
 */
function getPlaceholderDataBySource(source, limit = 10) {
  return unifiedPlaceholderData
    .filter(item => item.source === source)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}

/**
 * Get statistics about placeholder data
 * @returns {Object} Statistics including platform distribution
 */
function getPlaceholderDataStats() {
  const stats = {
    total: unifiedPlaceholderData.length,
    byPlatform: {},
    averageViews: 0,
    averageLikes: 0,
  };

  let totalViews = 0;
  let totalLikes = 0;

  unifiedPlaceholderData.forEach(item => {
    const source = item.source;
    stats.byPlatform[source] = (stats.byPlatform[source] || 0) + 1;
    totalViews += item.views || 0;
    totalLikes += item.likes || 0;
  });

  stats.averageViews = Math.round(totalViews / stats.total);
  stats.averageLikes = Math.round(totalLikes / stats.total);

  return stats;
}

module.exports = {
  unifiedPlaceholderData,
  getRandomizedPlaceholderData,
  getAllPlaceholderData,
  getPlaceholderDataBySource,
  getPlaceholderDataStats,
};
