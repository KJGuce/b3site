import React from "react";

export default function Calendar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-black mb-8">Coming Up at C3</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-black">
                Upcoming Events
              </h2>
              <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors font-medium">
                Add Event
              </button>
            </div>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-4">
                    <div className="text-black font-semibold text-center">
                      <div className="text-sm">JUN</div>
                      <div className="text-2xl">15</div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium text-black">
                      Father's Day BBQ
                    </h3>
                    <p className="text-gray-600 mt-2">All Locations, 9:35 PM</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Join us for a Free Father's Day BBQ after all services at
                      every location. Let's celebrate the dads and father
                      figures in our lives!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-4">
                    <div className="text-black font-semibold text-center">
                      <div className="text-sm">JUN</div>
                      <div className="text-2xl">20</div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium text-black">
                      Men's Overnighter
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Willow Springs Camp, 12:00 AM
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Join us for our FOURTH annual Men's Overnighter. As iron
                      sharpens iron, so one man sharpens another. Together, we
                      will strengthen our faith, forge new relationships, and
                      grow into the men God has called us to be!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-4">
                    <div className="text-black font-semibold text-center">
                      <div className="text-sm">JUL</div>
                      <div className="text-2xl">7</div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium text-black">
                      C3 Kids Camp - Downtown Summer
                    </h3>
                    <p className="text-gray-600 mt-2">Downtown, 8:45 AM</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Downtown Camp will run: July 7th - 11th and July 14th -
                      18th. C3 Kids Camp is the ultimate summer adventure—packed
                      with games, worship, art, outdoor fun, splash pads, and
                      more!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-4">
                    <div className="text-black font-semibold text-center">
                      <div className="text-sm">JUL</div>
                      <div className="text-2xl">9</div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium text-black">ALL IN</h3>
                    <p className="text-gray-600 mt-2">Downtown, 6:30 PM</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Soul-stirring worship and a not-to-be-missed message —
                      this is your invite to a night of divine surprises and
                      church family vibes. Doors Open: 6:30PM, Service Starts:
                      7:00PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-4">
                    <div className="text-black font-semibold text-center">
                      <div className="text-sm">JUL</div>
                      <div className="text-2xl">13</div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-medium text-black">
                      Baptism Sunday
                    </h3>
                    <p className="text-gray-600 mt-2">
                      All Locations, 10:00 AM
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Take a stand and make a declaration in front of your
                      friends and our church family! Baptisms represent our
                      decision to follow Christ for the rest of our lives. No
                      turning back!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Quick Add Event
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="eventTitle"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Event Title
              </label>
              <input
                type="text"
                id="eventTitle"
                className="block w-full border-gray-300 focus:border-black focus:ring-black"
                placeholder="Enter event title"
              />
            </div>
            <div>
              <label
                htmlFor="eventDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="eventDate"
                className="block w-full border-gray-300 focus:border-black focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="eventTime"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Time
              </label>
              <input
                type="time"
                id="eventTime"
                className="block w-full border-gray-300 focus:border-black focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="eventLocation"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="eventLocation"
                className="block w-full border-gray-300 focus:border-black focus:ring-black"
                placeholder="Enter event location"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors font-medium"
            >
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
