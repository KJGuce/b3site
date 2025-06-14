"use client";

import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 sm:mb-6">
          B3: Brampton Bible & Brunch
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Welcome to B3! We're a C3 Toronto Connect Group gathering in Brampton
          to build friendships, explore faith, and enjoy brunch together.
          Whether you're new to church or looking for community, you're invited
          to join us for good food, great conversation, and spiritual growth.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-2">About</h2>
            <p className="text-gray-700">
              B3 is all about connection—gathering around the table, reading the
              Bible, and sharing life. We believe faith grows best in community,
              and everyone is welcome.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-2">
              What to Expect
            </h2>
            <p className="text-gray-700">
              Each week, we meet for brunch, read a passage from the Bible, and
              chat about life and faith. No pressure, just real people and real
              conversations.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-2">
              When & Where
            </h2>
            <p className="text-gray-700">
              <span className="font-medium">Saturdays, 10:30am</span>
              <br />
              Brampton (exact address shared upon RSVP)
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-base text-gray-500">
            Part of{" "}
            <span className="font-semibold text-black">
              C3 Toronto Connect Groups
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
