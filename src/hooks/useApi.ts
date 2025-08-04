'use client';

import { useState, useEffect } from 'react';
import { ApiEndpoints, LoadingState } from '@/lib/types';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'An error occurred'
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}

export function useApiMutation<T, U = any>() {
  const [state, setState] = useState<ApiState<T> & { isLoading: boolean }>({
    data: null,
    loading: false,
    isLoading: false,
    error: null
  });

  const mutate = async (url: string, options: RequestInit): Promise<T> => {
    try {
      setState(prev => ({ ...prev, isLoading: true, loading: true, error: null }));
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setState({ data, loading: false, isLoading: false, error: null });
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState({
        data: null,
        loading: false,
        isLoading: false,
        error: errorMessage
      });
      throw error;
    }
  };

  return { ...state, mutate };
}