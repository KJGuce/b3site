"use client";

import { useState } from "react";

interface PrayerRequest {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  isAnonymous: boolean;
  prayerCount: number;
}

export default function Prayer() {
  const [requests, setRequests] = useState<PrayerRequest[]>([
    {
      id: 1,
      title: "Prayer for healing",
      content: "Please pray for my recovery from surgery next week.",
      author: "Anonymous",
      date: "2024-03-15",
      isAnonymous: true,
      prayerCount: 8,
    },
    {
      id: 2,
      title: "Family situation",
      content:
        "Praying for wisdom and guidance in a difficult family situation.",
      author: "John Smith",
      date: "2024-03-14",
      isAnonymous: false,
      prayerCount: 5,
    },
  ]);

  const [newRequest, setNewRequest] = useState({
    title: "",
    content: "",
    isAnonymous: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const request: PrayerRequest = {
      id: requests.length + 1,
      title: newRequest.title,
      content: newRequest.content,
      author: newRequest.isAnonymous ? "Anonymous" : "You",
      date: new Date().toISOString().split("T")[0],
      isAnonymous: newRequest.isAnonymous,
      prayerCount: 0,
    };
    setRequests([request, ...requests]);
    setNewRequest({ title: "", content: "", isAnonymous: false });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Prayer Requests</h1>
        <p className="text-xl text-gray-600">
          Share your prayer needs and join others in lifting up their requests
          to God.
        </p>
      </div>

      {/* New Request Form */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Share a Prayer Request</h2>
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
              value={newRequest.title}
              onChange={(e) =>
                setNewRequest({ ...newRequest, title: e.target.value })
              }
              className="input-field"
              placeholder="Brief description of your prayer need"
              required
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Details
            </label>
            <textarea
              id="content"
              value={newRequest.content}
              onChange={(e) =>
                setNewRequest({ ...newRequest, content: e.target.value })
              }
              className="input-field min-h-[100px]"
              placeholder="Share as much or as little as you're comfortable with..."
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="anonymous"
              checked={newRequest.isAnonymous}
              onChange={(e) =>
                setNewRequest({ ...newRequest, isAnonymous: e.target.checked })
              }
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="anonymous"
              className="ml-2 block text-sm text-gray-700"
            >
              Share anonymously
            </label>
          </div>
          <button type="submit" className="btn-primary">
            Submit Prayer Request
          </button>
        </form>
      </div>

      {/* Prayer Requests List */}
      <div className="space-y-6">
        {requests.map((request) => (
          <div
            key={request.id}
            className="card hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {request.title}
                </h3>
                <p className="text-gray-600">{request.content}</p>
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
                <span className="text-sm text-gray-500">
                  {request.prayerCount} praying
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-700">
                  {request.author}
                </span>
                <span>{request.date}</span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                I'm praying
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Prayer Guidelines */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          Prayer Guidelines
        </h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            All prayer requests are confidential and will be treated with
            respect
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            You can choose to share anonymously
          </li>
          <li className="flex items-start">
            <svg
              className="w-5 h-5 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Our community will pray for each request
          </li>
        </ul>
      </div>
    </div>
  );
}
