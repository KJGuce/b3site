"use client";

import React, { useState } from "react";

export default function Calendar() {
  const [view, setView] = useState("calendar"); // "calendar" or "list"
  const [currentDate, setCurrentDate] = useState(new Date());

  // Helper function to create a date object without time
  const createDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  // Updated events data including C3 Toronto events and recurring B3 events
  const events = [
    {
      id: 1,
      title: "B3 Brunch & Bible Study",
      date: "2025-06-14",
      time: "10:30 AM",
      location: "Brampton (address shared upon RSVP)",
      description: "Join us for a meal, Bible study, and fellowship.",
    },
    {
      id: 2,
      title: "B3 Brunch & Bible Study",
      date: "2025-06-21",
      time: "10:30 AM",
      location: "Brampton (address shared upon RSVP)",
      description: "Join us for a meal, Bible study, and fellowship.",
    },
    {
      id: 3,
      title: "B3 Brunch & Bible Study",
      date: "2025-06-28",
      time: "10:30 AM",
      location: "Brampton (address shared upon RSVP)",
      description: "Join us for a meal, Bible study, and fellowship.",
    },
    {
      id: 4,
      title: "B3 Brunch & Bible Study",
      date: "2025-07-05",
      time: "10:30 AM",
      location: "Brampton (address shared upon RSVP)",
      description: "Join us for a meal, Bible study, and fellowship.",
    },
    {
      id: 5,
      title: "B3 Brunch & Bible Study",
      date: "2025-07-12",
      time: "10:30 AM",
      location: "Brampton (address shared upon RSVP)",
      description: "Join us for a meal, Bible study, and fellowship.",
    },
    {
      id: 6,
      title: "B3 Brunch & Bible Study",
      date: "2025-07-19",
      time: "10:30 AM",
      location: "Brampton (address shared upon RSVP)",
      description: "Join us for a meal, Bible study, and fellowship.",
    },
    {
      id: 7,
      title: "B3 Brunch & Bible Study",
      date: "2025-07-26",
      time: "10:30 AM",
      location: "Brampton (address shared upon RSVP)",
      description: "Join us for a meal, Bible study, and fellowship.",
    },
    {
      id: 8,
      title: "Father's Day BBQ",
      date: "2025-06-15",
      time: "9:35 PM",
      location: "All Locations",
      description:
        "Join us for a Free Father's Day BBQ after all services at every location. Let's celebrate the dads and father figures in our lives!",
    },
    {
      id: 9,
      title: "Men's Overnighter",
      date: "2025-06-20",
      time: "12:00 AM",
      location:
        "Willow Springs Camp, 4408 Bethesda Road, Whitchurch-Stouffville, ON L4A 3Z8",
      description:
        "Join us for our FOURTH annual Men's Overnighter. As iron sharpens iron, so one man sharpens another. Together, we will strengthen our faith, forge new relationships, and grow into the men God has called us to be!",
    },
    {
      id: 10,
      title: "C3 Kids Camp - Downtown Summer",
      date: "2025-07-07",
      time: "8:45 AM",
      location: "Downtown",
      description:
        "Downtown Camp will run: July 7th - 11th and July 14th - 18th. C3 Kids Camp is the ultimate summer adventure—packed with games, worship, art, outdoor fun, splash pads, and more!",
    },
    {
      id: 11,
      title: "ALL IN",
      date: "2025-07-09",
      time: "6:30 PM",
      location: "Downtown",
      description:
        "Soul-stirring worship and a not-to-be-missed message — this is your invite to a night of divine surprises and church family vibes. Doors Open: 6:30PM, Service Starts: 7:00PM",
    },
    {
      id: 12,
      title: "Baptism Sunday",
      date: "2025-07-13",
      time: "10:00 AM",
      location: "All Locations",
      description:
        "Take a stand and make a declaration in front of your friends and our church family! Baptisms represent our decision to follow Christ for the rest of our lives. No turning back!",
    },
    {
      id: 13,
      title: "C3 Conference 2025",
      date: "2025-09-25",
      time: "12:00 AM",
      location: "TBA",
      description:
        "Come expectant for an encounter with God as we unify together across our cities for a few days where Heaven will meet earth! Sept 25- Sept 27",
    },
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  // Function to render the visual calendar
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const monthName = getMonthName(currentDate);

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-6 mb-8 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigateMonth("prev")}
            className="px-2 sm:px-3 py-1 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm sm:text-base"
          >
            ←
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {monthName}
          </h2>
          <button
            onClick={() => navigateMonth("next")}
            className="px-2 sm:px-3 py-1 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm sm:text-base"
          >
            →
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-blue-600 text-xs sm:text-sm"
            >
              {day}
            </div>
          ))}
          {/* Empty cells for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div
              key={`empty-${i}`}
              className="border border-gray-200 p-1 sm:p-2 text-center bg-gray-50"
            />
          ))}
          {/* Days of the month */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const currentMonthEvents = events.filter((event) => {
              const eventDate = createDate(event.date);
              return (
                eventDate.getDate() === day &&
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear()
              );
            });
            return (
              <div
                key={i}
                className="border border-gray-200 p-1 sm:p-2 text-center min-h-[60px] sm:min-h-[80px] hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="font-medium text-sm sm:text-base text-gray-700">
                  {day}
                </div>
                {currentMonthEvents.length > 0 && (
                  <div className="mt-1 text-[10px] sm:text-xs">
                    {currentMonthEvents.map((event) => (
                      <div
                        key={event.id}
                        className="truncate bg-gradient-to-r from-blue-500 to-blue-600 text-white px-1 py-0.5 rounded-full mb-1"
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Function to render the list view
  const renderListView = () => {
    // Sort events by date
    const sortedEvents = [...events].sort(
      (a, b) => createDate(a.date).getTime() - createDate(b.date).getTime()
    );

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-8 shadow-lg">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
          Upcoming Events
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-4 sm:p-6 hover:border-blue-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {" at "}
                    {event.time}
                  </p>
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {event.location}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
          <button
            onClick={() => setView("calendar")}
            className={`px-4 py-2 text-sm sm:text-base rounded-md transition-colors duration-200 ${
              view === "calendar"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 text-sm sm:text-base rounded-md transition-colors duration-200 ${
              view === "list"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            List View
          </button>
        </div>
      </div>

      {/* Calendar or List View */}
      {view === "calendar" ? renderCalendar() : renderListView()}
    </div>
  );
}
