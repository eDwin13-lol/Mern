import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import PostCard from '../components/PostCard';
import SourceFilter from '../components/SourceFilter';
import { fetchPosts, fetchPostsBySource, refreshFeed } from '../api/postService';
import './Feed.css';

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const [source, setSource] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const { ref: endRef, inView } = useInView({ threshold: 0.1 });
  const initialFetchDone = useRef(false);

  const LIMIT = 20;

  // Initial load
  useEffect(() => {
    if (!initialFetchDone.current) {
      initialFetchDone.current = true;
      loadInitialPosts();
    }
  }, []);

  // Load more when scroll reaches end
  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMorePosts();
    }
  }, [inView, hasMore, loading]);

  const loadInitialPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPosts(0, LIMIT, source);
      setPosts(data.data);
      setSkip(LIMIT);
      setHasMore(data.pagination.hasMore);
    } catch (err) {
      setError('Failed to load posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePosts = async () => {
    setLoading(true);
    try {
      let data;
      if (source) {
        data = await fetchPostsBySource(source, skip, LIMIT);
      } else {
        data = await fetchPosts(skip, LIMIT, source);
      }

      setPosts((prev) => [...prev, ...data.data]);
      setSkip((prev) => prev + LIMIT);
      setHasMore(data.pagination.hasMore);
    } catch (err) {
      console.error('Error loading more posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSourceChange = (newSource) => {
    setSource(newSource);
    setPosts([]);
    setSkip(0);
    setHasMore(true);
    initialFetchDone.current = false;
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refreshFeed();
      // Reload the feed
      setPosts([]);
      setSkip(0);
      setHasMore(true);
      initialFetchDone.current = false;
      loadInitialPosts();
    } catch (err) {
      setError('Failed to refresh feed');
      console.error(err);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1>E-Paatshala Feed</h1>
        <button
          className="refresh-btn"
          onClick={handleRefresh}
          disabled={refreshing}
        >
          {refreshing ? '⏳ Refreshing...' : '🔄 Refresh Feed'}
        </button>
      </div>

      <SourceFilter currentSource={source} onSourceChange={handleSourceChange} />

      {error && <div className="error-message">{error}</div>}

      <div className="posts-list">
        {posts.length === 0 && !loading && (
          <div className="empty-state">
            <p>No posts available. Try refreshing!</p>
          </div>
        )}

        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      {hasMore && (
        <div ref={endRef} className="load-more-trigger">
          {loading && <div className="spinner">Loading...</div>}
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <div className="end-message">✓ No more posts</div>
      )}
    </div>
  );
};

export default Feed;
