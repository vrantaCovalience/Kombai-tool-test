'use client';

import { useState, useEffect } from 'react';
import { Post, PostsApiResponse, ApiEndpoints } from '@/lib/types';

interface UsePostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  total: number;
  refetch: () => void;
}

export function usePosts(): UsePostsState {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(ApiEndpoints.POSTS);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: PostsApiResponse = await response.json();
      setPosts(data.posts);
      setTotal(data.total);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch posts');
      setPosts([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    total,
    refetch: fetchPosts
  };
}