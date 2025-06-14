"use client";

import { useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
}

export default function Discussion() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "What's your favorite Bible verse and why?",
      content:
        "I'd love to hear about the verses that have impacted your life and why they're meaningful to you.",
      author: "Sarah Johnson",
      date: "2024-03-15",
      likes: 12,
      comments: 5,
    },
    {
      id: 2,
      title: "Tips for daily Bible reading",
      content:
        "Share your strategies for maintaining a consistent Bible reading habit. What works for you?",
      author: "Michael Chen",
      date: "2024-03-14",
      likes: 8,
      comments: 3,
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: Post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: "You",
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      comments: 0,
    };
    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discussion Board</h1>
        <p className="text-xl text-gray-600">
          Join the conversation and share your thoughts on faith, life, and
          everything in between.
        </p>
      </div>

      {/* New Post Form */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Start a Discussion</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              className="input-field"
              placeholder="What would you like to discuss?"
              required
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              id="content"
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
              className="input-field min-h-[100px]"
              placeholder="Share your thoughts..."
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Post Discussion
          </button>
        </form>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.content}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <span className="text-sm text-gray-500">{post.likes}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-700">{post.author}</span>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>{post.comments} comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
