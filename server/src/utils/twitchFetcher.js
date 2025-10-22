/**
 * Twitch Fetcher Module
 * Fetches Twitch streams, videos, and clips with mock fallback
 */

// Mock Twitch data with 20 popular streamers and content
const mockTwitchContent = [
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
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Just Chatting - Q&A Stream',
    url: 'https://twitch.tv/videos/1234567891',
    description: 'Answering viewer questions and discussing gaming trends',
    author: 'StreamKing_Z',
    metadata: {
      videoId: '1234567891',
      type: 'video',
      game: 'Just Chatting',
      duration: '7200',
    },
    views: 98500,
    likes: 6200,
    comments: 2800,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Elden Ring Speedrun Attempts',
    url: 'https://twitch.tv/videos/1234567892',
    description: 'Attempting to beat Elden Ring in record time',
    author: 'SpeedrunnerPro',
    metadata: {
      videoId: '1234567892',
      type: 'video',
      game: 'Elden Ring',
      duration: '4800',
    },
    views: 156000,
    likes: 11200,
    comments: 3400,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Fortnite Creative Mode Build Battle',
    url: 'https://twitch.tv/clips/creative-battle-123',
    description: 'Epic creative mode build battle with viewers',
    author: 'FortniteChamp',
    metadata: {
      clipId: 'creative-battle-123',
      type: 'clip',
      game: 'Fortnite',
      duration: '120',
    },
    views: 234000,
    likes: 18900,
    comments: 5600,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'League of Legends Challenger Rank 1',
    url: 'https://twitch.tv/videos/1234567893',
    description: 'Grinding to Rank 1 on the LoL Challenger ladder',
    author: 'LoL_Master_99',
    metadata: {
      videoId: '1234567893',
      type: 'video',
      game: 'League of Legends',
      duration: '5400',
    },
    views: 187000,
    likes: 14500,
    comments: 4200,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
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
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
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
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
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
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
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
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Palworld Coop Adventure',
    url: 'https://twitch.tv/videos/1234567897',
    description: 'Playing Palworld with friends in cooperative multiplayer',
    author: 'CasualGamingCrew',
    metadata: {
      videoId: '1234567897',
      type: 'video',
      game: 'Palworld',
      duration: '4200',
    },
    views: 112000,
    likes: 7600,
    comments: 1800,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'DOOM Eternal Nightmare Speedrun',
    url: 'https://twitch.tv/clips/doom-speedrun-legendary',
    description: 'Sub-30 minute speedrun of DOOM Eternal on Nightmare difficulty',
    author: 'SpeedrunLegend',
    metadata: {
      clipId: 'doom-speedrun-legendary',
      type: 'clip',
      game: 'DOOM Eternal',
      duration: '1800',
    },
    views: 267000,
    likes: 21300,
    comments: 6800,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Indie Game Developer Interview',
    url: 'https://twitch.tv/videos/1234567898',
    description: 'Interview with indie game developer about game design process',
    author: 'GameDevTalk',
    metadata: {
      videoId: '1234567898',
      type: 'video',
      game: 'Just Chatting',
      duration: '5400',
    },
    views: 76000,
    likes: 5200,
    comments: 1600,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Cyberpunk 2077 Max Settings Showcase',
    url: 'https://twitch.tv/videos/1234567899',
    description: 'Cyberpunk 2077 running at maximum graphics settings and raytracing',
    author: 'PCGaming_Ultra',
    metadata: {
      videoId: '1234567899',
      type: 'video',
      game: 'Cyberpunk 2077',
      duration: '3600',
    },
    views: 198000,
    likes: 15200,
    comments: 4500,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Hollow Knight Speedrun World Record',
    url: 'https://twitch.tv/clips/hollow-knight-wr',
    description: 'New world record speedrun of Hollow Knight by legendary speedrunner',
    author: 'MetroidvaniaKing',
    metadata: {
      clipId: 'hollow-knight-wr',
      type: 'clip',
      game: 'Hollow Knight',
      duration: '1200',
    },
    views: 334000,
    likes: 28600,
    comments: 9200,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Music Production Live Session',
    url: 'https://twitch.tv/videos/1234567900',
    description: 'Live music production session creating an original electronic track',
    author: 'ProducerVibes',
    metadata: {
      videoId: '1234567900',
      type: 'video',
      game: 'Just Chatting',
      duration: '7200',
    },
    views: 54000,
    likes: 4100,
    comments: 1200,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Path of Exile 2 First Impressions',
    url: 'https://twitch.tv/videos/1234567901',
    description: 'Playing Path of Exile 2 beta and sharing early access impressions',
    author: 'ARPGEnthusiast',
    metadata: {
      videoId: '1234567901',
      type: 'video',
      game: 'Path of Exile 2',
      duration: '4800',
    },
    views: 89000,
    likes: 6800,
    comments: 2100,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Pokémon Nuzlocke Challenge',
    url: 'https://twitch.tv/clips/pokemon-nuzlocke-epic',
    description: 'Epic moments from Pokémon Nuzlocke challenge run',
    author: 'NuzlockeChampion',
    metadata: {
      clipId: 'pokemon-nuzlocke-epic',
      type: 'clip',
      game: 'Pokémon Scarlet',
      duration: '900',
    },
    views: 156000,
    likes: 11800,
    comments: 3400,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Starfield Exploration Deep Dive',
    url: 'https://twitch.tv/videos/1234567902',
    description: 'Exploring the vast universe of Starfield and discovering hidden secrets',
    author: 'SpaceExplorer_VR',
    metadata: {
      videoId: '1234567902',
      type: 'video',
      game: 'Starfield',
      duration: '5400',
    },
    views: 142000,
    likes: 10900,
    comments: 3200,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Retro Gaming Marathon 24hr Challenge',
    url: 'https://twitch.tv/videos/1234567903',
    description: 'Playing classic retro games in a 24-hour marathon streaming session',
    author: 'RetroGamingLove',
    metadata: {
      videoId: '1234567903',
      type: 'video',
      game: 'Retro Games',
      duration: '86400',
    },
    views: 201000,
    likes: 18500,
    comments: 5900,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
  {
    source: 'twitch',
    title: 'Silent Hill 2 Remake Horror Playthrough',
    url: 'https://twitch.tv/videos/1234567904',
    description: 'First playthrough of Silent Hill 2 remake with full reactions',
    author: 'HorrorGaming_Freak',
    metadata: {
      videoId: '1234567904',
      type: 'video',
      game: 'Silent Hill 2',
      duration: '6300',
    },
    views: 178000,
    likes: 14200,
    comments: 4100,
    thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/cdn_vod_placeholder.png',
  },
];

/**
 * Fetch Twitch streams/videos/clips
 * @param {number} maxResults - Maximum number of results to return
 * @returns {Promise<Array>} Array of Twitch video objects
 */
async function fetchTwitchContent(maxResults = 15) {
  try {
    // Check if TWITCH_API_KEY is set for real API integration
    if (process.env.TWITCH_API_KEY && process.env.TWITCH_CLIENT_ID) {
      // Real API integration would go here
      // For now, return mock data with warning
      console.log('Note: Using mock Twitch data. Set TWITCH_API_KEY and TWITCH_CLIENT_ID for live streams.');
    }

    // Return shuffled mock data
    const shuffled = [...mockTwitchContent].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, maxResults);
  } catch (error) {
    console.error('Error fetching Twitch content:', error);
    // Return mock data as fallback
    const shuffled = [...mockTwitchContent].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, maxResults);
  }
}

module.exports = {
  fetchTwitchContent,
};
