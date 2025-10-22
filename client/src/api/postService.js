import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchPosts = async (skip = 0, limit = 20, source = null) => {
  try {
    const params = { skip, limit };
    if (source) params.source = source;

    const response = await axios.get(`${API_BASE_URL}/posts`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const refreshFeed = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts/refresh`);
    return response.data;
  } catch (error) {
    console.error('Error refreshing feed:', error);
    throw error;
  }
};

export const fetchPostsBySource = async (source, skip = 0, limit = 20) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/source/${source}`, {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts by source:', error);
    throw error;
  }
};
