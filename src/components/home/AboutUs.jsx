"use client"

import React from 'react'

function AboutUs() {
  return (
    <div id='aboutus' className="bg-white">
      {/* About Us Section - Text Left, Image Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">About Us</h2>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Kokan Community Forum</h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Kokan Community Forum (KCF) is a vibrant organization dedicated to uniting the Kokan community, 
                preserving our rich cultural heritage, and empowering members through education and social service.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Since our inception, we have been working tirelessly to create a strong network of support and growth 
                for all community members. Our mission is to foster unity, promote education, and drive meaningful 
                social impact through collaborative initiatives.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in strengthening bonds, preserving our culture, and creating opportunities for every 
                member to thrive and succeed. Join us in building a better future for the Kokan community.
              </p>

              {/* Optional: Core Values List */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Our Core Values:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Unity:</strong> Bringing together the Kokan community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Education:</strong> Empowering youth through scholarships and mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700"><strong>Social Service:</strong> Making positive impact through community initiatives</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image.png"
                  alt="Kokan Community Forum"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs