'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
}

export function ErrorMessage({ 
  title = "Something went wrong",
  message, 
  onRetry, 
  onAction,
  actionLabel = "Take Action",
  className = "" 
}: ErrorMessageProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600 mb-8">{message}</p>
      <div className="space-x-4">
        {onRetry && (
          <Button onClick={onRetry} variant="outline">
            Try Again
          </Button>
        )}
        {onAction && (
          <Button onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}