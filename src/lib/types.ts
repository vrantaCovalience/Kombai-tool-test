// Authentication and API related enums
export enum ApiEndpoints {
  LOGIN = 'https://dummyjson.com/user/login',
  POSTS = 'https://dummyjson.com/posts',
  ADD_POST = 'https://dummyjson.com/posts/add',
  USER_ME = 'https://dummyjson.com/user/me'
}

export enum LoadingState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export enum PostAction {
  CREATE = 'create',
  EDIT = 'edit',
  DELETE = 'delete'
}

// Props types (data passed to components)
export interface PropTypes {
  initialRoute: string;
}

// Store types (global state data)
export interface StoreTypes {
  user: {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
    accessToken: string;
  } | null;
  isAuthenticated: boolean;
}

// Query types (API response data)
export interface QueryTypes {
  posts: Array<{
    id: number;
    title: string;
    body: string;
    tags: readonly string[];
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  }>;
  comments: Array<{
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: {
      id: number;
      username: string;
    };
  }>;
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  accessToken?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
  };
}