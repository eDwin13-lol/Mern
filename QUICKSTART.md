# E-Paatshala MERN App – Quick Start

Your full MERN stack social media aggregator is ready! Here's how to run it:

## 🚀 Quick Setup

### 1. Ensure MongoDB is Running (Docker)
```bash
# If not already running:
docker run -d -p 27017:27017 --name epaatshala-mongo mongo:6.0
```

### 2. Terminal 1: Start Backend Server
```bash
cd /workspaces/Mern/server
npm start
# Server runs on http://localhost:5000
```

### 3. Terminal 2: Start Frontend
```bash
cd /workspaces/Mern/client
npm start
# App opens on http://localhost:3000
```

### 4. Load Data & Test
- Navigate to http://localhost:3000
- Click **"🔄 Refresh Feed"** button
- Scroll down to load infinite feed

---

## 📁 Project Structure at a Glance

```
Mern/
├── server/           # Node.js + Express backend
│   ├── src/
│   │   ├── config/db.js         # MongoDB connection
│   │   ├── models/Post.js       # Post schema
│   │   ├── controllers/         # API logic
│   │   ├── routes/posts.js      # /api/posts endpoints
│   │   └── utils/               # Reddit & YouTube fetchers
│   └── package.json
├── client/           # React 18 frontend
│   ├── src/
│   │   ├── pages/Feed.jsx       # Main infinite scroll page
│   │   ├── components/          # PostCard, SourceFilter
│   │   ├── api/postService.js   # API client
│   │   └── App.jsx
│   └── package.json
└── README.md         # Full documentation
```

---

## 🎯 Key Features Already Built

✅ **Backend (Express + Node.js + MongoDB)**
- `/api/posts` – Paginated feed with filtering
- `/api/posts/refresh` – Fetch from Reddit & YouTube
- `/api/posts/source/:source` – Filter by source

✅ **Frontend (React + Infinite Scroll)**
- Infinite scroll with `react-intersection-observer`
- PostCard component with thumbnail & metadata
- Source filter (All / Reddit / YouTube)
- Refresh button to fetch new data

✅ **Data Fetchers**
- Reddit posts from `reddit.com/r/videos/hot.json`
- YouTube Shorts mock data (ready for real API)
- Automatic deduplication in MongoDB

✅ **Styling**
- Responsive CSS (mobile-friendly)
- Modern card-based UI
- Real-time loading states

---

## 📝 API Quick Reference

### Get Feed
```bash
curl http://localhost:5000/api/posts?skip=0&limit=20&source=reddit
```

### Refresh Data
```bash
curl -X POST http://localhost:5000/api/posts/refresh
```

### Filter by Source
```bash
curl http://localhost:5000/api/posts/source/youtube?skip=0&limit=20
```

---

## 🛠️ Next Steps (Optional Enhancements)

1. **Add Real YouTube API**: Set `YOUTUBE_API_KEY` in `server/.env`
2. **Add User Profiles**: Create `User` model in MongoDB
3. **Add Likes/Comments**: Extend Post schema with interactions
4. **Deploy**: Push to Vercel (frontend) + Railway (backend)

---

## ⚡ Development Tips

- **Restart backend after changes**: Backend requires restart (no hot-reload)
- **Frontend hot-reloads**: Changes to React automatically refresh
- **MongoDB CLI**: Use `mongosh` to inspect data
- **Clear DB**: Delete all posts with `curl -X DELETE http://localhost:5000/api/posts`

---

## 📚 Useful Commands

```bash
# Install all dependencies
npm run install-all

# Start both servers simultaneously (from root)
npm run dev:server  # Terminal 1
npm run dev:client  # Terminal 2

# MongoDB inspect
mongosh
use epaatshala
db.posts.find().limit(5)
db.posts.countDocuments()

# Stop MongoDB container
docker stop epaatshala-mongo
```

---

## ✨ What's Working Right Now

✅ Server running on `http://localhost:5000`
✅ MongoDB connected via Docker
✅ `/api/posts/refresh` fetches 6 sample posts (3 Reddit + 3 YouTube)
✅ `/api/posts` returns posts with pagination
✅ React client ready to start
✅ Infinite scroll logic in place
✅ Source filtering ready
✅ Fully responsive design

**You're all set! Start the client with `npm start` in the `/workspaces/Mern/client` directory and enjoy the infinite feed!** 🎉

---

For full documentation, see `/workspaces/Mern/README.md`
