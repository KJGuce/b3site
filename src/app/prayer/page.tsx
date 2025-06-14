"use client";

import React from "react";

export default function Prayer() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-12 bg-white">
      <div className="max-w-2xl w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
          Prayer Requests
        </h1>
        <p className="text-gray-700 text-center mb-8">
          We believe in the power of prayer and supporting each other. Share a
          prayer request or let us know how we can pray for you this week.
          Everything shared here is treated with care and respect.
        </p>
        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            Share a Prayer Request
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name (optional)"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            />
            <textarea
              placeholder="How can we pray for you?"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-black mb-4">
            Recent Prayer Requests
          </h2>
          <div className="space-y-6">
            {/* Example prayer request */}
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-base font-bold text-black mb-1">
                For my family
              </h3>
              <p className="text-gray-700 mb-2">
                Please pray for peace and unity in our home.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-base font-bold text-black mb-1">
                Guidance for a new job
              </h3>
              <p className="text-gray-700 mb-2">
                Trusting God for direction and provision in this season.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
