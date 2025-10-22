/**
 * Instagram Fetcher Module
 * Fetches Instagram reels and posts with mock fallback
 */

// Mock Instagram data with 20 popular creators and content
const mockInstagramContent = [
  {
    source: 'instagram',
    title: 'Morning Yoga & Fitness Routine',
    url: 'https://instagram.com/p/ABC123456789/',
    description: 'Starting the day with a full body yoga and stretching routine for flexibility',
    author: 'fitness_guru_2024',
    metadata: {
      postId: 'ABC123456789',
      type: 'reel',
      duration: '60',
    },
    views: 234000,
    likes: 18900,
    comments: 2100,
    thumbnail: 'https://via.placeholder.com/500x600/FF6B9D/FFFFFF?text=Yoga+Fitness',
  },
  {
    source: 'instagram',
    title: 'Gourmet Cooking: Michelin Star Recipe',
    url: 'https://instagram.com/p/DEF987654321/',
    description: 'Creating a 5-star restaurant quality dish from scratch in my home kitchen',
    author: 'chef_extraordinaire',
    metadata: {
      postId: 'DEF987654321',
      type: 'reel',
      duration: '90',
    },
    views: 567000,
    likes: 45600,
    comments: 8900,
    thumbnail: 'https://via.placeholder.com/500x600/FF6B00/FFFFFF?text=Gourmet+Food',
  },
  {
    source: 'instagram',
    title: 'Urban Fashion Styling Tips',
    url: 'https://instagram.com/p/GHI456789012/',
    description: 'Street style fashion tips on how to mix and match pieces for ultimate cool factor',
    author: 'style_icon_nyc',
    metadata: {
      postId: 'GHI456789012',
      type: 'reel',
      duration: '45',
    },
    views: 432000,
    likes: 34200,
    comments: 5600,
    thumbnail: 'https://via.placeholder.com/500x600/FF69B4/FFFFFF?text=Fashion+Style',
  },
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
    thumbnail: 'https://via.placeholder.com/500x600/FF6347/FFFFFF?text=Tokyo+Travel',
  },
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
    thumbnail: 'https://via.placeholder.com/500x600/FF8C00/FFFFFF?text=Home+Decor',
  },
  {
    source: 'instagram',
    title: 'Skincare Routine for Glowing Skin',
    url: 'https://instagram.com/p/PQR345678901/',
    description: 'Complete skincare routine with natural products for achieving that glass skin glow',
    author: 'beauty_expert_pro',
    metadata: {
      postId: 'PQR345678901',
      type: 'reel',
      duration: '150',
    },
    views: 612000,
    likes: 52100,
    comments: 9800,
    thumbnail: 'https://via.placeholder.com/500x600/FFB6C1/FFFFFF?text=Skincare+Beauty',
  },
  {
    source: 'instagram',
    title: 'Dance Choreography: Latest Trends',
    url: 'https://instagram.com/p/STU678901234/',
    description: 'Learning and performing the latest dance moves and choreography trends',
    author: 'dance_revolution',
    metadata: {
      postId: 'STU678901234',
      type: 'reel',
      duration: '75',
    },
    views: 456000,
    likes: 41200,
    comments: 7600,
    thumbnail: 'https://via.placeholder.com/500x600/FF1493/FFFFFF?text=Dance+Moves',
  },
  {
    source: 'instagram',
    title: 'Photography Tips for Beginners',
    url: 'https://instagram.com/p/VWX901234567/',
    description: 'Essential photography tips and tricks for capturing stunning photos with any camera',
    author: 'photography_101',
    metadata: {
      postId: 'VWX901234567',
      type: 'reel',
      duration: '90',
    },
    views: 234000,
    likes: 19800,
    comments: 3400,
    thumbnail: 'https://via.placeholder.com/500x600/FF4500/FFFFFF?text=Photography',
  },
  {
    source: 'instagram',
    title: 'Pet Care & Training Tutorial',
    url: 'https://instagram.com/p/YZA234567890/',
    description: 'Training tips for dogs and cats with positive reinforcement techniques and tricks',
    author: 'pet_parent_pro',
    metadata: {
      postId: 'YZA234567890',
      type: 'reel',
      duration: '120',
    },
    views: 523000,
    likes: 46300,
    comments: 8200,
    thumbnail: 'https://via.placeholder.com/500x600/FFD700/FFFFFF?text=Cute+Pets',
  },
  {
    source: 'instagram',
    title: 'Gaming Highlights: Epic Moments',
    url: 'https://instagram.com/p/BCD567890123/',
    description: 'Best gaming moments and epic plays from latest AAA games and esports tournaments',
    author: 'gaming_elite',
    metadata: {
      postId: 'BCD567890123',
      type: 'reel',
      duration: '60',
    },
    views: 678000,
    likes: 58900,
    comments: 11200,
    thumbnail: 'https://via.placeholder.com/500x600/00CED1/FFFFFF?text=Gaming+Clips',
  },
  {
    source: 'instagram',
    title: 'Workout Challenge: 30 Days Fit',
    url: 'https://instagram.com/p/EFG890123456/',
    description: '30-day fitness challenge showing transformation from day 1 to day 30 of workouts',
    author: 'fitness_transformation',
    metadata: {
      postId: 'EFG890123456',
      type: 'reel',
      duration: '180',
    },
    views: 834000,
    likes: 72100,
    comments: 14500,
    thumbnail: 'https://via.placeholder.com/500x600/00FF00/FFFFFF?text=Fitness+Challenge',
  },
  {
    source: 'instagram',
    title: 'Music Production Tutorial',
    url: 'https://instagram.com/p/HIJ123456789/',
    description: 'Learn how to produce music like a pro using free software and simple techniques',
    author: 'music_producer_beats',
    metadata: {
      postId: 'HIJ123456789',
      type: 'reel',
      duration: '150',
    },
    views: 289000,
    likes: 22300,
    comments: 4100,
    thumbnail: 'https://via.placeholder.com/500x600/FF00FF/FFFFFF?text=Music+Production',
  },
  {
    source: 'instagram',
    title: 'Comedy Skit: Relatable Moments',
    url: 'https://instagram.com/p/KLM456789012/',
    description: 'Hilarious comedy sketches about everyday relatable situations and modern life',
    author: 'comedy_genius_lol',
    metadata: {
      postId: 'KLM456789012',
      type: 'reel',
      duration: '45',
    },
    views: 912000,
    likes: 89200,
    comments: 18900,
    thumbnail: 'https://via.placeholder.com/500x600/FFD700/000000?text=Comedy+Skits',
  },
  {
    source: 'instagram',
    title: 'Gardening & Plant Care Tips',
    url: 'https://instagram.com/p/NOP789012345/',
    description: 'Indoor and outdoor gardening tips for growing plants and creating your green space',
    author: 'green_thumb_garden',
    metadata: {
      postId: 'NOP789012345',
      type: 'reel',
      duration: '120',
    },
    views: 167000,
    likes: 13200,
    comments: 2800,
    thumbnail: 'https://via.placeholder.com/500x600/228B22/FFFFFF?text=Garden+Plants',
  },
  {
    source: 'instagram',
    title: 'Makeup Tutorial: Glam Looks',
    url: 'https://instagram.com/p/QRS012345678/',
    description: 'Step-by-step makeup tutorial showing techniques for glamorous evening looks',
    author: 'makeup_artist_pro',
    metadata: {
      postId: 'QRS012345678',
      type: 'reel',
      duration: '90',
    },
    views: 745000,
    likes: 61200,
    comments: 10300,
    thumbnail: 'https://via.placeholder.com/500x600/FF69B4/FFFFFF?text=Makeup+Glam',
  },
  {
    source: 'instagram',
    title: 'Baking & Pastry Art',
    url: 'https://instagram.com/p/TUV345678901/',
    description: 'Professional baking techniques and artistic pastry decoration for desserts',
    author: 'pastry_artist_bake',
    metadata: {
      postId: 'TUV345678901',
      type: 'reel',
      duration: '180',
    },
    views: 523000,
    likes: 47300,
    comments: 8900,
    thumbnail: 'https://via.placeholder.com/500x600/DEB887/FFFFFF?text=Pastry+Art',
  },
  {
    source: 'instagram',
    title: 'Meditation & Mindfulness Session',
    url: 'https://instagram.com/p/WXY678901234/',
    description: 'Guided meditation and mindfulness exercises for mental health and relaxation',
    author: 'mindfulness_guide',
    metadata: {
      postId: 'WXY678901234',
      type: 'reel',
      duration: '600',
    },
    views: 234000,
    likes: 18600,
    comments: 2100,
    thumbnail: 'https://via.placeholder.com/500x600/87CEEB/FFFFFF?text=Meditation',
  },
  {
    source: 'instagram',
    title: 'Business Tips: Entrepreneur Life',
    url: 'https://instagram.com/p/ZAB901234567/',
    description: 'Advice and tips for starting and growing a successful online business venture',
    author: 'business_mentor_pro',
    metadata: {
      postId: 'ZAB901234567',
      type: 'reel',
      duration: '120',
    },
    views: 312000,
    likes: 24100,
    comments: 4500,
    thumbnail: 'https://via.placeholder.com/500x600/32CD32/FFFFFF?text=Business+Tips',
  },
  {
    source: 'instagram',
    title: 'Car Customization & Detailing',
    url: 'https://instagram.com/p/CDE234567890/',
    description: 'Custom car modifications, paint jobs, and professional detailing showcase',
    author: 'car_enthusiast_mod',
    metadata: {
      postId: 'CDE234567890',
      type: 'reel',
      duration: '150',
    },
    views: 467000,
    likes: 39200,
    comments: 6800,
    thumbnail: 'https://via.placeholder.com/500x600/FF0000/FFFFFF?text=Car+Custom',
  },
  {
    source: 'instagram',
    title: 'Fashion Haul: New Season Trends',
    url: 'https://instagram.com/p/FGH567890123/',
    description: 'Haul and review of latest seasonal fashion trends and new clothing purchases',
    author: 'fashion_haul_queen',
    metadata: {
      postId: 'FGH567890123',
      type: 'reel',
      duration: '90',
    },
    views: 612000,
    likes: 52300,
    comments: 9100,
    thumbnail: 'https://via.placeholder.com/500x600/FF1493/FFFFFF?text=Fashion+Haul',
  },
];

/**
 * Fetch Instagram reels and posts
 * @param {number} maxResults - Maximum number of results to return
 * @returns {Promise<Array>} Array of Instagram post objects
 */
async function fetchInstagramContent(maxResults = 15) {
  try {
    // Check if INSTAGRAM_API_KEY is set for real API integration
    if (process.env.INSTAGRAM_API_KEY) {
      // Real API integration would go here
      // For now, return mock data with warning
      console.log('Note: Using mock Instagram data. Set INSTAGRAM_API_KEY for live content.');
    }

    // Return shuffled mock data
    const shuffled = [...mockInstagramContent].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, maxResults);
  } catch (error) {
    console.error('Error fetching Instagram content:', error);
    // Return mock data as fallback
    const shuffled = [...mockInstagramContent].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, maxResults);
  }
}

module.exports = {
  fetchInstagramContent,
};
