'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Post, PostAction } from '@/lib/types';

interface BlogFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; body: string }) => void;
  post?: Post | null;
  action: PostAction;
  isLoading?: boolean;
}

export function BlogForm({ isOpen, onClose, onSubmit, post, action, isLoading }: BlogFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState<{ title?: string; body?: string }>({});

  useEffect(() => {
    if (post && action === PostAction.EDIT) {
      setTitle(post.title);
      setBody(post.body);
    } else {
      setTitle('');
      setBody('');
    }
    setErrors({});
  }, [post, action, isOpen]);

  const validateForm = () => {
    const newErrors: { title?: string; body?: string } = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.trim().length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }
    
    if (!body.trim()) {
      newErrors.body = 'Content is required';
    } else if (body.trim().length < 10) {
      newErrors.body = 'Content must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    onSubmit({
      title: title.trim(),
      body: body.trim()
    });
  };

  const handleClose = () => {
    setTitle('');
    setBody('');
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>
            {action === PostAction.CREATE ? 'Add Blog Post' : 'Edit Blog Post'}
          </DialogTitle>
          <DialogDescription>
            {action === PostAction.CREATE 
              ? 'Create a new blog post to share with your readers.'
              : 'Make changes to your blog post.'
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Post Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your post title"
              className={errors.title ? 'border-red-500' : ''}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="body" className="text-sm font-medium">
              Content
            </label>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your post content here..."
              className={`min-h-[200px] ${errors.body ? 'border-red-500' : ''}`}
            />
            {errors.body && (
              <p className="text-sm text-red-500">{errors.body}</p>
            )}
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading 
                ? (action === PostAction.CREATE ? 'Creating...' : 'Updating...') 
                : (action === PostAction.CREATE ? 'Create Post' : 'Update Post')
              }
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}