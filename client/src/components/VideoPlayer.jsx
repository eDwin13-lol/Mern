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
    } else if (source === 'twitch') {
      setPlayerType('twitch');
    } else if (source === 'instagram') {
      setPlayerType('instagram');
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

  // Twitch Player (Stream/Clip Embed)
  if (playerType === 'twitch') {
    const getTwitchInfo = (url) => {
      // Extract Twitch channel/video ID from various URL formats
      // Formats: twitch.tv/channel, twitch.tv/videos/12345, clips.twitch.tv/ClipName
      const channelMatch = url?.match(/twitch\.tv\/([a-zA-Z0-9_]+)(?:\/|$)/);
      const videoMatch = url?.match(/twitch\.tv\/videos\/(\d+)/);
      const clipMatch = url?.match(/clips\.twitch\.tv\/([a-zA-Z0-9_-]+)/);

      if (clipMatch) {
        return { type: 'clip', id: clipMatch[1] };
      }
      if (videoMatch) {
        return { type: 'video', id: videoMatch[1] };
      }
      if (channelMatch) {
        return { type: 'channel', id: channelMatch[1] };
      }
      return null;
    };

    const twitchInfo = getTwitchInfo(post.url);
    if (!twitchInfo) return <div className="video-player-error">Invalid Twitch URL</div>;

    let embedUrl = '';
    if (twitchInfo.type === 'clip') {
      embedUrl = `https://clips.twitch.tv/embed?clip=${twitchInfo.id}&parent=${window.location.hostname}`;
    } else if (twitchInfo.type === 'video') {
      embedUrl = `https://player.twitch.tv/?video=${twitchInfo.id}&parent=${window.location.hostname}`;
    } else if (twitchInfo.type === 'channel') {
      embedUrl = `https://player.twitch.tv/?channel=${twitchInfo.id}&parent=${window.location.hostname}`;
    }

    return (
      <div className="video-player twitch-player">
        <iframe
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          title={post.title}
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
      </div>
    );
  }

  // Instagram Player (Reel/Post Embed)
  if (playerType === 'instagram') {
    return (
      <div className="video-player instagram-player">
        <div className="instagram-embed-wrapper">
          <blockquote
            className="instagram-media"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: 0,
              width: 'calc(100% - 2px)',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#FFFFFF',
                  lineHeight: 0,
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      flexGrow: 0,
                      height: '40px',
                      marginRight: '14px',
                      width: '40px',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '14px',
                        marginBottom: '6px',
                        width: '100px',
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        flexGrow: 0,
                        height: '14px',
                        width: '60px',
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ padding: '19% 0' }}></div>
                <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 60 60"
                    version="1.1"
                    xmlns="https://www.w3.org/2000/svg"
                    xmlnsXlink="https://www.w3.org/1999/xlink"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60 C535.114,60 530.342,55.228 530.342,49.342 L530.342,9.656 C530.342,3.77 535.114,0 541,0 L556,0 C561.886,0 566.658,3.77 566.658,9.656 L566.658,49.342 C566.658,55.228 561.886,60 556,60 L541,60 Z M541,54.276 C560.133,54.276 566.658,47.594 566.658,9.656 C566.658,9.656 566.658,9.445 566.658,9.656 L566.658,49.342 C566.658,52.286 564.514,54.276 561.669,54.276 L541,54.276 Z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 600, lineHeight: '17px', textDecoration: 'none' }}>
                    View this post on Instagram
                  </div>
                </div>
              </a>
            </div>
          </blockquote>
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
