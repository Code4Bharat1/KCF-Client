"use client"

import React from 'react'

function Donors() {
  // Sample donors data
  const donors = [
    {
      id: 1,
      name: "Mr. Rahul Patil",
      image: "/donors/donor1.jpg",
      amount: "₹1,00,000"
    },
    {
      id: 2,
      name: "Mrs. Sunita Desai",
      image: "/donors/donor2.jpg",
      amount: "₹75,000"
    },
    {
      id: 3,
      name: "Mr. Amit Kulkarni",
      image: "/donors/donor3.jpg",
      amount: "₹50,000"
    },
    {
      id: 4,
      name: "Dr. Priya Naik",
      image: "/donors/donor4.jpg",
      amount: "₹50,000"
    },
    {
      id: 5,
      name: "Mr. Suresh Sawant",
      image: "/donors/donor5.jpg",
      amount: "₹25,000"
    },
    {
      id: 6,
      name: "Mrs. Kavita Rane",
      image: "/donors/donor6.jpg",
      amount: "₹25,000"
    },
    {
      id: 7,
      name: "Mr. Vijay Kamat",
      image: "/donors/donor7.jpg",
      amount: "₹10,000"
    },
    {
      id: 8,
      name: "Mrs. Anjali Joshi",
      image: "/donors/donor8.jpg",
      amount: "₹10,000"
    },
    {
      id: 9,
      name: "Mr. Ganesh Prabhu",
      image: "/donors/donor9.jpg",
      amount: "₹10,000"
    }
  ]

  // Generate placeholder
  const getPlaceholder = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=22c55e&color=ffffff&bold=true&length=2`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-43 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Our Generous Donors
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Thank you to our supporters who make our community initiatives possible
          </p>
        </div>

        {/* Donors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor) => (
            <div
              key={donor.id}
              className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Donor Image */}
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-50 overflow-hidden">
                <img
                  src={donor.image}
                  alt={donor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = getPlaceholder(donor.name)
                  }}
                />
              </div>

              {/* Donor Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {donor.name}
                </h3>

                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{donor.amount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thank You Message */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg border border-green-100 p-8">
          <svg className="w-16 h-16 mx-auto text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your Support Makes a Difference
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every contribution helps us provide educational scholarships, organize community events, and support social welfare initiatives for the Kokan community.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Donors