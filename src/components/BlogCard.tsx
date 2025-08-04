'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/lib/types';
import { formatPostContent, formatCount } from '@/lib/utils/formatters';
import { useAuth } from '@/contexts/AuthContext';

interface BlogCardProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (postId: number) => void;
}

export function BlogCard({ post, onEdit, onDelete }: BlogCardProps) {
  const { user } = useAuth();
  const isOwner = user?.id === post.userId;

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="flex-grow">
        <div className="flex items-start justify-between">
          <div className="flex-grow">
            <CardTitle className="text-lg mb-2 line-clamp-2">
              <Link 
                href={`/posts/${post.id}`}
                className="hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground mb-3">
              {formatPostContent(post.body, 120)}
            </CardDescription>
          </div>
          
          {isOwner && (
            <div className="flex space-x-1 ml-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(post)}
                className="h-8 w-8 p-0"
              >
                <span className="sr-only">Edit</span>
                ✏️
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(post.id)}
                className="h-8 w-8 p-0 text-destructive hover:text-destructive"
              >
                <span className="sr-only">Delete</span>
                🗑️
              </Button>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
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
              <span>Comments</span>
            </span>
          </div>
          <span>{formatCount(post.views)} views</span>
        </div>
      </CardContent>
    </Card>
  );
}