"use client";

import { BlogCard } from "@/components/BlogCard";
import { BlogForm } from "@/components/BlogForm";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { LoginForm } from "@/components/LoginForm";
import { NavigationHeader } from "@/components/NavigationHeader";
import { Button } from "@/components/ui/button";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { useApiMutation } from "@/hooks/useApi";
import { mockQuery } from "@/lib/blogMockData";
import { ApiEndpoints, Post, PostAction } from "@/lib/types";
import { useEffect, useState } from "react";

function BlogListingContent() {
  const { isAuthenticated, user, isLoading: authLoading } = useAuth();
  const [posts, setPosts] = useState<Post[]>(mockQuery.posts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [formAction, setFormAction] = useState<PostAction>(PostAction.CREATE);
  const [deletePostId, setDeletePostId] = useState<number | null>(null);

  const { mutate: createPost, isLoading: isCreating } = useApiMutation();
  const { mutate: updatePost, isLoading: isUpdating } = useApiMutation();
  const { mutate: deletePost, isLoading: isDeleting } = useApiMutation();

  // Load posts on mount
  useEffect(() => {
    if (isAuthenticated) {
      // In a real app, you would fetch posts from the API
      // For now, we're using mock data
      setPosts(mockQuery?.posts || []);
    }
  }, [isAuthenticated]);

  const handleAddPost = () => {
    setFormAction(PostAction.CREATE);
    setSelectedPost(null);
    setIsFormOpen(true);
  };

  const handleEditPost = (post: Post) => {
    setFormAction(PostAction.EDIT);
    setSelectedPost(post);
    setIsFormOpen(true);
  };

  const handleDeletePost = (postId: number) => {
    setDeletePostId(postId);
    setIsDeleteDialogOpen(true);
  };

  const handleFormSubmit = async (data: { title: string; body: string }) => {
    try {
      if (formAction === PostAction.CREATE) {
        // Create new post
        const newPost = (await createPost(ApiEndpoints.ADD_POST, {
          method: "POST",
          body: JSON.stringify({
            title: data.title,
            body: data.body,
            userId: user?.id || 1,
          }),
        })) as Post;

        // Add to local state (in real app, refetch from server)
        const postWithMockData = {
          ...newPost,
          tags: ["new"],
          reactions: { likes: 0, dislikes: 0 },
          views: 0,
        };
        setPosts((prev) => [postWithMockData, ...prev]);
      } else if (selectedPost) {
        // Update existing post
        const updatedPost = await updatePost(
          `${ApiEndpoints.POSTS}/${selectedPost.id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              title: data.title,
              body: data.body,
            }),
          }
        );

        // Update local state
        setPosts((prev) =>
          prev.map((post) =>
            post.id === selectedPost.id
              ? { ...post, title: data.title, body: data.body }
              : post
          )
        );
      }

      setIsFormOpen(false);
      setSelectedPost(null);
    } catch (error) {
      console.error("Failed to save post:", error);
    }
  };

  const handleConfirmDelete = async () => {
    if (!deletePostId) return;

    try {
      await deletePost(`${ApiEndpoints.POSTS}/${deletePostId}`, {
        method: "DELETE",
      });

      // Remove from local state
      setPosts((prev) => prev.filter((post) => post.id !== deletePostId));
      setIsDeleteDialogOpen(false);
      setDeletePostId(null);
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600 mt-2">
              Discover and share amazing stories
            </p>
          </div>

          <Button onClick={handleAddPost}>
            <span className="mr-2">+</span>
            Add Blog
          </Button>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No posts found</p>
            <Button onClick={handleAddPost}>Create your first post</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
              />
            ))}
          </div>
        )}

        <BlogForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
          post={selectedPost}
          action={formAction}
          isLoading={isCreating || isUpdating}
        />

        <ConfirmDialog
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onConfirm={handleConfirmDelete}
          title="Delete Post"
          description="Are you sure you want to delete this post? This action cannot be undone."
          confirmText="Delete"
          isLoading={isDeleting}
        />
      </main>
    </div>
  );
}

export default function BlogWebsite() {
  return (
    <AuthProvider>
      <BlogListingContent />
    </AuthProvider>
  );
}
