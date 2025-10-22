import React from 'react';
import './SourceFilter.css';

export const SourceFilter = ({ onSourceChange, currentSource }) => {
  return (
    <div className="source-filter">
      <button
        className={`filter-btn ${currentSource === null ? 'active' : ''}`}
        onClick={() => onSourceChange(null)}
      >
        All Sources
      </button>
      <button
        className={`filter-btn ${currentSource === 'reddit' ? 'active' : ''}`}
        onClick={() => onSourceChange('reddit')}
      >
        Reddit
      </button>
      <button
        className={`filter-btn ${currentSource === 'youtube' ? 'active' : ''}`}
        onClick={() => onSourceChange('youtube')}
      >
        YouTube
      </button>
      <button
        className={`filter-btn ${currentSource === 'tiktok' ? 'active' : ''}`}
        onClick={() => onSourceChange('tiktok')}
      >
        TikTok
      </button>
      <button
        className={`filter-btn ${currentSource === 'x' ? 'active' : ''}`}
        onClick={() => onSourceChange('x')}
      >
        X
      </button>
      <button
        className={`filter-btn ${currentSource === 'twitch' ? 'active' : ''}`}
        onClick={() => onSourceChange('twitch')}
      >
        Twitch
      </button>
      <button
        className={`filter-btn ${currentSource === 'instagram' ? 'active' : ''}`}
        onClick={() => onSourceChange('instagram')}
      >
        Instagram
      </button>
    </div>
  );
};

export default SourceFilter;
