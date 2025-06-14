import React from "react";

export default function DiscussionBoard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-black mb-8">Discussion Board</h1>

      <div className="bg-white border border-gray-200 p-8 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-black">
            Recent Discussions
          </h2>
          <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors font-medium">
            New Discussion
          </button>
        </div>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-medium text-black">
              Business Networking Event
            </h3>
            <p className="text-gray-600 mt-2">
              Join us for our monthly networking event at the community center.
            </p>
            <div className="mt-3 text-sm text-gray-500 flex items-center space-x-4">
              <span>Posted by John Doe</span>
              <span>•</span>
              <span>2 hours ago</span>
              <span>•</span>
              <span className="text-black">5 replies</span>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-medium text-black">
              Marketing Strategy Discussion
            </h3>
            <p className="text-gray-600 mt-2">
              Let's discuss effective marketing strategies for small businesses.
            </p>
            <div className="mt-3 text-sm text-gray-500 flex items-center space-x-4">
              <span>Posted by Jane Smith</span>
              <span>•</span>
              <span>1 day ago</span>
              <span>•</span>
              <span className="text-black">12 replies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
