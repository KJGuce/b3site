import React from "react";

export default function PrayerRequests() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-black mb-8">Prayer Requests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-black">
              Submit Prayer Request
            </h2>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="block w-full border-gray-300 focus:border-black focus:ring-black"
                placeholder="Brief title for your prayer request"
              />
            </div>
            <div>
              <label
                htmlFor="request"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Prayer Request
              </label>
              <textarea
                id="request"
                rows={4}
                className="block w-full border-gray-300 focus:border-black focus:ring-black"
                placeholder="Share your prayer request here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
            >
              Submit Request
            </button>
          </form>
        </div>

        <div className="bg-white border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Recent Prayer Requests
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-black">
                Prayer for Business Growth
              </h3>
              <p className="text-gray-600 mt-2">
                Please pray for wisdom and guidance as we expand our business
                operations.
              </p>
              <div className="mt-3 text-sm text-gray-500 flex items-center space-x-4">
                <span>Posted by Sarah Johnson</span>
                <span>•</span>
                <span>1 day ago</span>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-black">
                Family Health Concerns
              </h3>
              <p className="text-gray-600 mt-2">
                Praying for healing and strength during this challenging time.
              </p>
              <div className="mt-3 text-sm text-gray-500 flex items-center space-x-4">
                <span>Posted by Michael Brown</span>
                <span>•</span>
                <span>2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
