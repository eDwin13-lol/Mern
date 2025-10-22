# Edgram – MERN Social Media Aggregator

A full-stack MERN application that aggregates Reddit posts and YouTube Shorts into a single endless-scrolling feed. Perfect for a semester assignment showcasing modern web development practices.

## 🎯 Features

- **Infinite Scroll**: Seamlessly load more posts as you scroll
- **Multi-source Feed**: Aggregate Reddit & YouTube Shorts in one place
- **Source Filtering**: Toggle between Reddit, YouTube, or view all
- **Auto-refresh**: Fetch new content from sources on-demand
- **Responsive Design**: Mobile-friendly infinite scroll interface
- **MongoDB Persistence**: Store posts efficiently with duplicate prevention
- **RESTful API**: Clean API endpoints for the frontend

## 🏗️ Tech Stack

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- Axios (API calls)
- CORS, dotenv

**Frontend:**
- React 18
- React Intersection Observer (infinite scroll)
- Axios
- CSS3 (responsive design)

**Database:**
- MongoDB (local or remote)

## 📦 Project Structure

```
Mern/
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # MongoDB connection
│   │   ├── models/
│   │   │   └── Post.js            # Post schema
│   │   ├── controllers/
│   │   │   └── postController.js  # API logic
│   │   ├── routes/
│   │   │   └── posts.js           # API routes
│   │   ├── utils/
│   │   │   ├── redditFetcher.js   # Reddit data fetcher
│   │   │   └── youtubeFetcher.js  # YouTube data fetcher
│   │   └── index.js               # Server entry point
│   ├── package.json
│   └── .env.example
│
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── postService.js     # API client
│   │   ├── components/
│   │   │   ├── PostCard.jsx       # Post display component
│   │   │   └── SourceFilter.jsx   # Filter buttons
│   │   ├── pages/
│   │   │   └── Feed.jsx           # Main infinite scroll page
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── styles/
│   ├── package.json
│   └── .env.example
│
├── package.json                    # Root scripts
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** v16+
- **npm** or **yarn**
- **MongoDB** running locally (or remote connection string)

### Installation

1. **Clone & Setup**
   ```bash
   cd /workspaces/Mern
   npm run install-all
   ```

2. **Configure Environment**

   **Server** (`server/.env`):
   ```bash
   cp server/.env.example server/.env
   # Edit server/.env:
   MONGO_URI=mongodb://localhost:27017/epaatshala
   PORT=5000
   YOUTUBE_API_KEY=your_youtube_api_key_here  # Optional
   NODE_ENV=development
   ```

   **Client** (`client/.env`):
   ```bash
   echo "REACT_APP_API_URL=http://localhost:5000/api" > client/.env
   ```

3. **Start MongoDB** (if local)
   ```bash
   sudo systemctl start mongod
   sudo systemctl status mongod
   ```

4. **Run the Application**

   **Terminal 1 - Backend:**
   ```bash
   npm run dev:server
   # Server runs on http://localhost:5000
   ```

   **Terminal 2 - Frontend:**
   ```bash
   npm run dev:client
   # Client runs on http://localhost:3000
   ```

5. **Refresh the Feed**
   - Click "🔄 Refresh Feed" button to fetch data from Reddit/YouTube
   - Wait a few seconds for data to load
   - Scroll down to trigger infinite scroll

## 📡 API Endpoints

### `GET /api/posts`
Get paginated feed with optional filtering.

**Query Parameters:**
- `skip` (default: 0) - Offset
- `limit` (default: 20) - Results per page (max 50)
- `source` (optional: "reddit" | "youtube") - Filter by source

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "source": "reddit",
      "title": "...",
      "url": "...",
      "thumbnail": "...",
      "author": "...",
      "score": 1000,
      "createdAt": "2025-10-22T..."
    }
  ],
  "pagination": {
    "skip": 0,
    "limit": 20,
    "total": 150,
    "hasMore": true
  }
}
```

### `POST /api/posts/refresh`
Refresh feed by fetching from Reddit & YouTube sources.

**Response:**
```json
{
  "success": true,
  "message": "Refresh complete. Inserted 15 new posts.",
  "totalFetched": 50,
  "inserted": 15
}
```

### `GET /api/posts/source/:source`
Get posts by specific source.

**Parameters:**
- `source`: "reddit" or "youtube"

**Query Parameters:**
- `skip`, `limit` (same as `/api/posts`)

## 🔑 YouTube API Setup (Optional but Recommended)

To fetch real YouTube Shorts:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the **YouTube Data API v3**
4. Create an **API Key** credential
5. Add to `server/.env`:
   ```env
   YOUTUBE_API_KEY=your_api_key_here
   ```

Without it, YouTube fetcher will log a warning and return empty.

## 🛠️ Development

### Run Individual Services

```bash
# Server only
cd server && npm run dev

# Client only
cd client && npm start

# Production build
cd client && npm run build
```

### MongoDB Commands

```bash
# Connect to MongoDB shell
mongosh

# Inside shell:
use epaatshala
db.posts.find().limit(5)  # View sample posts
db.posts.countDocuments()  # Total posts
db.posts.deleteMany({})    # Clear all (dev only)
```

## 📝 Example Usage Flow

1. **Start both servers** (backend on 5000, frontend on 3000)
2. **Visit http://localhost:3000** in browser
3. **Click "🔄 Refresh Feed"** to fetch Reddit & YouTube data
4. **Scroll down** to load more posts infinitely
5. **Filter by source** using buttons: "All Sources", "🔥 Reddit", "▶ YouTube"

## 🐛 Troubleshooting

**MongoDB Connection Failed:**
```bash
# Start MongoDB service
sudo systemctl start mongod
sudo systemctl status mongod

# Or if using Docker
docker run -d -p 27017:27017 --name mongodb mongo:6.0
```

**API CORS Error:**
- Ensure server is running on `http://localhost:5000`
- Check `client/.env` has `REACT_APP_API_URL=http://localhost:5000/api`

**No Posts Appearing:**
1. Click "🔄 Refresh Feed" to trigger fetchers
2. Check server console for fetcher logs
3. For YouTube: ensure `YOUTUBE_API_KEY` is set

**YouTube Fetch Not Working:**
- YouTube requires API key. Add to `server/.env` or set `YOUTUBE_API_KEY=your_key`
- Get key from [Google Cloud Console](https://console.cloud.google.com/)

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB with Mongoose](https://mongoosejs.com/)
- [React Hooks Guide](https://react.dev/reference/react)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)
- [Reddit API](https://www.reddit.com/dev/api/)
- [YouTube Data API](https://developers.google.com/youtube/v3)

## 📄 License

MIT

---

**Built for E-Paatshala Assignment** – Happy Coding! 🚀
