"use client";

import React from "react";

export default function Discussion() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-12 bg-white">
      <div className="max-w-2xl w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
          Group Chat
        </h1>
        <p className="text-gray-700 text-center mb-8">
          This is a safe space to share thoughts, questions, and encouragement
          as we journey together in faith, friendship, and brunch! Feel free to
          start a conversation or join in.
        </p>
        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            Start a New Discussion
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Title or topic..."
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
            <textarea
              placeholder="What's on your mind?"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Post
            </button>
          </form>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-black mb-4">
            Recent Conversations
          </h2>
          <div className="space-y-6">
            {/* Example discussion item */}
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-base font-bold text-black mb-1">
                What's your go-to brunch dish?
              </h3>
              <p className="text-gray-700 mb-2">
                Let's share our favorite brunch recipes or places in Brampton!
              </p>
              <span className="text-xs text-gray-400">2 replies</span>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-base font-bold text-black mb-1">
                How can we pray for you this week?
              </h3>
              <p className="text-gray-700 mb-2">
                Share any needs or praise reports—let's support each other in
                prayer.
              </p>
              <span className="text-xs text-gray-400">3 replies</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
