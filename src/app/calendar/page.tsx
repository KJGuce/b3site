"use client";

import React from "react";

export default function Calendar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-12 bg-white">
      <div className="max-w-2xl w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
          Upcoming Gatherings
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Here's what's coming up for B3: Brampton Bible & Brunch. Join us for
          food, faith, and friendship! RSVP for details or to let us know you're
          coming.
        </p>
        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            Next Brunch & Bible Study
          </h2>
          <div className="mb-4">
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Saturday, 10:30am</span>
            </p>
            <p className="text-gray-700 mb-1">
              Brampton (address shared upon RSVP)
            </p>
            <p className="text-gray-700">
              We'll share a meal, read a passage from the Bible, and chat about
              life. Everyone's welcome!
            </p>
          </div>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            RSVP
          </button>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-black mb-4">
            Special Events
          </h2>
          <div className="space-y-6">
            {/* Example event */}
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-base font-bold text-black mb-1">
                Summer Potluck Brunch
              </h3>
              <p className="text-gray-700 mb-2">
                Bring your favorite dish to share! A relaxed morning of food and
                connection. Date TBA.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-base font-bold text-black mb-1">
                Worship & Prayer Night
              </h3>
              <p className="text-gray-700 mb-2">
                An evening to gather, worship, and pray together as a group.
                Details coming soon.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
