"use client"

import React, { useState } from 'react'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryImages = [
    {
      id: 1,
      src: '/images/event1.jpg',
      title: 'Community Gathering 2024',
      category: 'events',
      description: 'Annual community meeting'
    },
    {
      id: 2,
      src: '/images/education1.jpg',
      title: 'Educational Workshop',
      category: 'education',
      description: 'Student scholarship program'
    },
    {
      id: 3,
      src: '/images/social1.jpg',
      title: 'Social Service Drive',
      category: 'social',
      description: 'Community service initiative'
    },
    {
      id: 4,
      src: '/images/event2.jpg',
      title: 'Cultural Festival',
      category: 'events',
      description: 'Traditional Kokan celebration'
    },
    {
      id: 5,
      src: '/images/education2.jpg',
      title: 'Youth Development',
      category: 'education',
      description: 'Career guidance session'
    },
    {
      id: 6,
      src: '/images/social2.jpg',
      title: 'Health Camp',
      category: 'social',
      description: 'Free medical checkup camp'
    },
    {
      id: 7,
      src: '/images/event3.jpg',
      title: 'Unity March',
      category: 'events',
      description: 'Community unity celebration'
    },
    {
      id: 8,
      src: '/images/education3.jpg',
      title: 'Skill Development',
      category: 'education',
      description: 'Technical training program'
    },
    {
      id: 9,
      src: '/images/social3.jpg',
      title: 'Food Distribution',
      category: 'social',
      description: 'Helping underprivileged families'
    }
  ]

  const categories = [
    { id: 'all', name: 'All', icon: '🖼️' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'social', name: 'Social Work', icon: '🤝' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id='gallery' className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Capturing moments of unity, education, and social service in our community
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-200 scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/22c55e/white?text=KCF+Image'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-green-700 shadow-md">
                  {categories.find(cat => cat.id === image.category)?.icon} {image.category}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-1 drop-shadow-lg">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {image.description}
                </p>
              </div>

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-all duration-300 hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              View More Photos
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
