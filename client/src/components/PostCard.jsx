import React from 'react';
import './PostCard.css';

export const PostCard = ({ post }) => {
  const isReddit = post.source === 'reddit';
  const isYoutube = post.source === 'youtube';

  const handleClick = () => {
    window.open(post.url, '_blank');
  };

  return (
    <div className="post-card" onClick={handleClick}>
      {post.thumbnail && post.thumbnail !== 'self' && (
        <div className="post-thumbnail">
          <img src={post.thumbnail} alt={post.title} />
        </div>
      )}

      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>

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
