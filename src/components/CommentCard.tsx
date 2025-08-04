'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Comment } from '@/lib/types';
import { formatCount } from '@/lib/utils/formatters';

interface CommentCardProps {
  comment: Comment;
}

export function CommentCard({ comment }: CommentCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://i.pravatar.cc/150?img=${comment.user.id}`} />
            <AvatarFallback>
              {comment.user.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-grow">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-medium">@{comment.user.username}</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">
              {comment.body}
            </p>
            
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span className="flex items-center space-x-1">
                <span>👍</span>
                <span>{formatCount(comment.likes)}</span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}