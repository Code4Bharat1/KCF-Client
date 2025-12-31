"use client"

import React from 'react'

function VisionAndMission() {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">Vision & Mission</h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the leading platform for the Kokan community, creating a vibrant ecosystem where 
              tradition meets progress, education transforms lives, and collective action drives 
              sustainable social change for generations to come.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To unite the Kokan community by preserving our rich cultural heritage, fostering 
              educational excellence, and creating meaningful social impact through collaborative 
              initiatives that empower every member to thrive and succeed.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default VisionAndMission