import React, { useEffect, useState } from 'react';
import './VideoPlayer.css';

export const VideoPlayer = ({ post, inView }) => {
  const [playerType, setPlayerType] = useState(null);

  useEffect(() => {
    if (!post || !post.url) return;

    const source = post.source;

    // Determine player type based on source
    if (source === 'youtube') {
      setPlayerType('youtube');
    } else if (source === 'tiktok') {
      setPlayerType('tiktok');
    } else if (source === 'x') {
      setPlayerType('x');
    } else if (source === 'reddit') {
      setPlayerType('reddit');
    } else {
      setPlayerType('native');
    }
  }, [post]);

  // YouTube Player
  if (playerType === 'youtube') {
    const getYouTubeVideoId = (url) => {
      const match = url?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
      return match ? match[1] : null;
    };

    const videoId = getYouTubeVideoId(post.url);
    if (!videoId) return <div className="video-player-error">Invalid YouTube URL</div>;

    return (
      <div className="video-player youtube-player">
        <iframe
          width="100%"
          height="100%"
          src={
            inView
              ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&modestbranding=1`
              : `https://www.youtube.com/embed/${videoId}?mute=1&controls=1&modestbranding=1`
          }
          title={post.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // TikTok Player (Embedded)
  if (playerType === 'tiktok') {
    return (
      <div className="video-player tiktok-player">
        <div className="tiktok-embed-wrapper">
          <blockquote className="tiktok-embed" cite={post.url} data-unique-id={post.metadata?.videoId}>
            <section>
              <a target="_blank" rel="noopener noreferrer" href={post.url}>
                {post.title}
              </a>
            </section>
          </blockquote>
        </div>
      </div>
    );
  }

  // X/Twitter Player (Embedded)
  if (playerType === 'x') {
    return (
      <div className="video-player x-player">
        <div className="x-embed-wrapper">
          <blockquote className="twitter-tweet" data-theme="dark">
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              {post.description || post.title}
            </a>
          </blockquote>
        </div>
      </div>
    );
  }

  // Reddit Player
  if (playerType === 'reddit') {
    return (
      <div className="video-player reddit-player">
        <div className="reddit-embed-wrapper">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reddit-link"
          >
            {post.title}
          </a>
          <p className="reddit-hint">Click to view on Reddit</p>
        </div>
      </div>
    );
  }

  // Fallback with thumbnail and link
  return (
    <div className="video-player fallback-player">
      <div className="fallback-content">
        {post.thumbnail && post.thumbnail !== 'self' ? (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="fallback-thumbnail"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="placeholder-thumbnail">
            <div className="placeholder-icon">▶</div>
          </div>
        )}
        <div className="fallback-overlay">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            Open in {post.source}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
