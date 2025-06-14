"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome to B3
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Join us for food, faith, and friendship in Brampton. We meet every
          Saturday for brunch and Bible study.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/calendar" className="btn-primary">
            View Calendar
          </Link>
          <a
            href="https://c3toronto.churchcenter.com/groups/connect-groups/summer-2025-cg-b3-brampton-bible-brunch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Join Our Group
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="card">
          <div className="text-blue-600 mb-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Bible Study</h3>
          <p className="text-gray-600">
            Deep dive into God's Word together in a welcoming and engaging
            environment.
          </p>
        </div>

        <div className="card">
          <div className="text-blue-600 mb-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Brunch</h3>
          <p className="text-gray-600">
            Enjoy delicious food and meaningful conversations with fellow
            believers.
          </p>
        </div>

        <div className="card">
          <div className="text-blue-600 mb-4">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Community</h3>
          <p className="text-gray-600">
            Build lasting friendships and grow together in faith and fellowship.
          </p>
        </div>
      </div>

      {/* Next Event Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join Us This Saturday
          </h2>
          <p className="text-lg mb-6">
            We meet every Saturday at 10:30 AM for brunch and Bible study. Come
            join us for food, faith, and friendship!
          </p>
          <Link
            href="/calendar"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            View Calendar
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <p className="text-gray-600 mb-4">
              "B3 has been such a blessing in my life. The fellowship and Bible
              study have helped me grow in my faith journey."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                JD
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">Member since 2023</p>
              </div>
            </div>
          </div>
          <div className="card">
            <p className="text-gray-600 mb-4">
              "The community at B3 is amazing. I've made great friends and
              learned so much about God's Word through our Bible studies."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                JS
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-800">Jane Smith</p>
                <p className="text-sm text-gray-500">Member since 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're new to faith or have been walking with God for years,
          you're welcome to join our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://c3toronto.churchcenter.com/groups/connect-groups/summer-2025-cg-b3-brampton-bible-brunch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join Our Group
          </a>
          <Link href="/calendar" className="btn-secondary">
            View Calendar
          </Link>
        </div>
      </div>
    </div>
  );
}
