"use client"

import React from 'react'

function Volunteers() {
  // Sample volunteers data
  const volunteers = [
    {
      id: 1,
      name: "Mr. Rohan Sawant",
      image: "/volunteers/volunteer1.jpg",
      role: "Event Coordinator"
    },
    {
      id: 2,
      name: "Mrs. Neha Patil",
      image: "/volunteers/volunteer2.jpg",
      role: "Education Support"
    },
    {
      id: 3,
      name: "Mr. Kiran Naik",
      image: "/volunteers/volunteer3.jpg",
      role: "Community Outreach"
    },
    {
      id: 4,
      name: "Dr. Meera Deshmukh",
      image: "/volunteers/volunteer4.jpg",
      role: "Health Services"
    },
    {
      id: 5,
      name: "Mr. Prakash Kulkarni",
      image: "/volunteers/volunteer5.jpg",
      role: "Youth Development"
    },
    {
      id: 6,
      name: "Mrs. Shalini Rane",
      image: "/volunteers/volunteer6.jpg",
      role: "Cultural Programs"
    },
    {
      id: 7,
      name: "Mr. Aditya Joshi",
      image: "/volunteers/volunteer7.jpg",
      role: "Social Media"
    },
    {
      id: 8,
      name: "Ms. Priyanka Kamat",
      image: "/volunteers/volunteer8.jpg",
      role: "Volunteer Coordinator"
    },
    {
      id: 9,
      name: "Mr. Sandesh Prabhu",
      image: "/volunteers/volunteer9.jpg",
      role: "Technical Support"
    }
  ]

  // Generate placeholder
  const getPlaceholder = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=22c55e&color=ffffff&bold=true&length=2`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-43 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 blur-sm pointer-events-none select-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Our Dedicated Volunteers
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the amazing people who dedicate their time and effort to serve our community
          </p>
        </div>

        {/* Volunteers Grid - Blurred */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 blur-sm pointer-events-none select-none">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Volunteer Image */}
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-50 overflow-hidden">
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = getPlaceholder(volunteer.name)
                  }}
                />
              </div>

              {/* Volunteer Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {volunteer.name}
                </h3>

                <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{volunteer.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thank You Message - Blurred */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg border border-green-100 p-8 blur-sm pointer-events-none select-none">
          <svg className="w-16 h-16 mx-auto text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Join Our Volunteer Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Become part of our dedicated team and help make a positive impact in the Kokan community. Your time and skills can make a real difference!
          </p>
        </div>

        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center max-w-2xl mx-4 border-2 border-green-200">
            {/* Icon */}
            <div className="mb-6">
              <svg className="w-24 h-24 mx-auto text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Coming Soon Text */}
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              We're currently updating our volunteer profiles
            </p>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Our dedicated volunteer team page is being refreshed with new information. Check back soon to meet the amazing people making a difference in our community.
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteers
