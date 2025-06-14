"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-xl sm:text-2xl font-bold text-gray-900"
                >
                  B3
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 text-sm lg:text-base"
                >
                  Home
                </Link>
                <Link
                  href="/calendar"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 text-sm lg:text-base"
                >
                  Calendar
                </Link>
                <Link
                  href="/study"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 text-sm lg:text-base"
                >
                  Bible Study
                </Link>
                <Link
                  href="/discussion"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 text-sm lg:text-base"
                >
                  Discussion
                </Link>
                <Link
                  href="/prayer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 text-sm lg:text-base"
                >
                  Prayer Requests
                </Link>
                <a
                  href="https://c3toronto.churchcenter.com/groups/connect-groups/summer-2025-cg-b3-brampton-bible-brunch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm lg:text-base"
                >
                  Join Us
                </a>
              </nav>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`md:hidden ${
                isMobileMenuOpen ? "block" : "hidden"
              } border-t border-gray-200`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/calendar"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Calendar
                </Link>
                <Link
                  href="/study"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Bible Study
                </Link>
                <Link
                  href="/discussion"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Discussion
                </Link>
                <Link
                  href="/prayer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Prayer Requests
                </Link>
                <a
                  href="https://c3toronto.churchcenter.com/groups/connect-groups/summer-2025-cg-b3-brampton-bible-brunch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-2 btn-primary text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="animate-fade-in min-h-screen">{children}</main>

        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  B3: Brampton Bible & Brunch
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Join us for food, faith, and friendship in Brampton. We meet
                  every Saturday for brunch and Bible study.
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/calendar"
                      className="text-gray-600 hover:text-blue-600 text-sm sm:text-base"
                    >
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/discussion"
                      className="text-gray-600 hover:text-blue-600 text-sm sm:text-base"
                    >
                      Discussion
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/prayer"
                      className="text-gray-600 hover:text-blue-600 text-sm sm:text-base"
                    >
                      Prayer Requests
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  Contact
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Have questions? Want to join us?
                  <br />
                  Reach out to us at:
                  <br />
                  <a
                    href="mailto:info@b3brampton.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    info@b3brampton.com
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              <p className="text-center text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} B3: Brampton Bible & Brunch. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
