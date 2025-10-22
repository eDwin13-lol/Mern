import React, { useState, useCallback } from 'react';
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
    </div>
  );
};

export default SourceFilter;
