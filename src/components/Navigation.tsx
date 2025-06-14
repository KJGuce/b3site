import React, { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/discussion"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Discussion Board
          </Link>
          <Link
            href="/prayer"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Prayer Requests
          </Link>
          <Link
            href="/calendar"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Calendar
          </Link>
        </div>
      </div>
    </nav>
  );
}
