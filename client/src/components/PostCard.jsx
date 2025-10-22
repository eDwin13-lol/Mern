import React, { useState } from 'react';
import './PostCard.css';

export const PostCard = ({ post }) => {
  const isReddit = post.source === 'reddit';
  const isYoutube = post.source === 'youtube';
  const [showFullSize, setShowFullSize] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const match = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const youtubeVideoId = isYoutube ? getYouTubeVideoId(post.url) : null;

  const handleTitleClick = (e) => {
    e.stopPropagation();
    window.open(post.url, '_blank');
  };

  if (showFullSize && isYoutube && youtubeVideoId) {
    return (
      <div className="post-card-fullscreen">
        <button 
          className="close-fullscreen"
          onClick={() => setShowFullSize(false)}
        >
          ✕ Close
        </button>
        <div className="youtube-embed-fullscreen">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=1`}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className="post-card">
      {/* Video Embed Section */}
      {isYoutube && youtubeVideoId ? (
        <div 
          className="post-video-embed"
          onClick={(e) => {
            e.stopPropagation();
            setShowFullSize(true);
          }}
        >
          <div className="youtube-embed-container">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&modestbranding=1`}
              title={post.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="expand-overlay">
            <button className="expand-btn">⛶ Expand</button>
          </div>
        </div>
      ) : post.thumbnail && post.thumbnail !== 'self' ? (
        <div className="post-thumbnail">
          <img src={post.thumbnail} alt={post.title} />
        </div>
      ) : null}

      <div className="post-content">
        <h3 className="post-title" onClick={handleTitleClick}>
          {post.title}
        </h3>

        {post.description && (
          <p className="post-description">{post.description.substring(0, 150)}...</p>
        )}

        <div className="post-footer">
          <span className={`source-badge ${post.source}`}>
            {isReddit && '🔥 Reddit'}
            {isYoutube && '▶ YouTube'}
          </span>

          <div className="post-stats">
            {isReddit && (
              <span className="stat">
                👍 {(post.score / 1000).toFixed(1)}k
              </span>
            )}
            {isYoutube && (
              <span className="stat">
                👀 {(post.views / 1000).toFixed(1)}k views
              </span>
            )}
          </div>

          <span className="post-author">by {post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
