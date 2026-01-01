"use client"

import React from 'react'

function Events() {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "World Kokani Day Celebration 2025",
      date: "January 6, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Mumbai Convention Center",
      image: "/events/event1.jpg",
      description: "Join us for the annual World Kokani Day celebration with cultural programs, awards, and community gathering.",
      category: "Cultural"
    },
    {
      id: 2,
      title: "Educational Scholarship Distribution",
      date: "February 15, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "KCF Community Hall",
      image: "/events/event2.jpg",
      description: "Annual scholarship distribution ceremony for deserving students from the Kokan community.",
      category: "Education"
    },
    {
      id: 3,
      title: "Youth Development Workshop",
      date: "March 10, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Online & Offline",
      image: "/events/event3.jpg",
      description: "Career guidance and skill development workshop for youth members of our community.",
      category: "Workshop"
    },
    {
      id: 4,
      title: "Community Health Camp",
      date: "April 20, 2025",
      time: "8:00 AM - 2:00 PM",
      location: "Ratnagiri District",
      image: "/events/event4.jpg",
      description: "Free health checkup and medical consultation camp for community members.",
      category: "Health"
    },
    {
      id: 5,
      title: "Cultural Evening & Dinner",
      date: "May 5, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Hotel Grand Konkan",
      image: "/events/event5.jpg",
      description: "Traditional Kokani cultural program followed by community dinner and networking.",
      category: "Cultural"
    },
    {
      id: 6,
      title: "Annual General Meeting",
      date: "June 15, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "KCF Office, Mumbai",
      image: "/events/event6.jpg",
      description: "Annual general meeting to discuss community initiatives and future plans.",
      category: "Meeting"
    }
  ]

  // Generate placeholder
  const getPlaceholder = (title) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&size=400&background=22c55e&color=ffffff&bold=true&length=1`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-36 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Our Events
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us in celebrating our culture, supporting education, and strengthening our community bonds
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Event Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = getPlaceholder(event.title)
                  }}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {event.category}
                </div>
              </div>

              {/* Event Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {event.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">{event.date}</span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">{event.time}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{event.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events