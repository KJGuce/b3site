import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                B3 Connect
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link
                href="/discussion"
                className="inline-flex items-center px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
              >
                Discussion Board
              </Link>
              <Link
                href="/prayer"
                className="inline-flex items-center px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
              >
                Prayer Requests
              </Link>
              <Link
                href="/calendar"
                className="inline-flex items-center px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
              >
                Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
