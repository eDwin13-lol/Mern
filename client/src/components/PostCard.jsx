import React from 'react';
import { useInView } from 'react-intersection-observer';
import VideoPlayer from './VideoPlayer';
import './PostCard.css';

export const PostCard = ({ post }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const handleTitleClick = (e) => {
    e.stopPropagation();
    window.open(post.url, '_blank');
  };

  return (
    <div className="post-card" ref={ref}>
      {/* Video Player Section */}
      <div className="post-video-embed">
        <VideoPlayer post={post} inView={inView} />
      </div>

      <div className="post-content">
        <h3 className="post-title" onClick={handleTitleClick}>
          {post.title}
        </h3>

        {post.description && (
          <p className="post-description">{post.description.substring(0, 150)}...</p>
        )}

        <div className="post-footer">
          <span className={`source-badge ${post.source}`}>
            {post.source.charAt(0).toUpperCase() + post.source.slice(1)}
          </span>

          <div className="post-stats">
            {post.views && (
              <span className="stat">
                {(post.views / 1000).toFixed(1)}k views
              </span>
            )}
            {post.score && (
              <span className="stat">
                {(post.score / 1000).toFixed(1)}k score
              </span>
            )}
            {post.likes && (
              <span className="stat">
                {(post.likes / 1000).toFixed(1)}k likes
              </span>
            )}
            {post.comments && (
              <span className="stat">
                {(post.comments / 1000).toFixed(1)}k comments
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
