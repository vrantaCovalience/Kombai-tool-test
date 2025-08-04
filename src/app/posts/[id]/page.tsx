'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavigationHeader } from '@/components/NavigationHeader';
import { CommentCard } from '@/components/CommentCard';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { Post, Comment } from '@/lib/types';
import { formatCount } from '@/lib/utils/formatters';
import { mockQuery } from '@/lib/blogMockData';

function SinglePostContent() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const postId = parseInt(params.id as string);

  useEffect(() => {
    if (!isAuthenticated && !authLoading) {
      router.push('/login');
      return;
    }

    if (isAuthenticated) {
      // Simulate API call - in real app, fetch from API
      const foundPost = mockQuery.posts.find(p => p.id === postId);
      const postComments = mockQuery.comments.filter(c => c.postId === postId);
      
      setPost(foundPost || null);
      setComments(postComments);
      setLoading(false);
    }
  }, [postId, isAuthenticated, authLoading, router]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavigationHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavigationHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The post you're looking for doesn't exist.</p>
            <Button onClick={() => router.push('/')}>
              Back to Posts
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => router.push('/')}
            className="mb-4"
          >
            ← Back to Posts
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <CardTitle className="text-3xl font-bold mb-4">
                {post.title}
              </CardTitle>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-6">
                  <span className="flex items-center space-x-1">
                    <span>👍</span>
                    <span>{formatCount(post.reactions.likes)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>👎</span>
                    <span>{formatCount(post.reactions.dislikes)}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>💬</span>
                    <span>{comments.length} comments</span>
                  </span>
                </div>
                <span>{formatCount(post.views)} views</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {post.body}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Comments ({comments.length})
              </h2>
            </div>

            {comments.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500">No comments yet</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Be the first to share your thoughts!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <CommentCard key={comment.id} comment={comment} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SinglePostPage() {
  return (
    <AuthProvider>
      <SinglePostContent />
    </AuthProvider>
  );
}