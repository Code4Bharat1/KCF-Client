"use client"

import React, { useState, useEffect } from 'react'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      id: 1,
      image: '/images/hero/heroimage2.jpeg',
      title: 'Welcome to Kokan Community Forum',
      subtitle: 'Building stronger bonds through unity, education, and social service'
      // ❌ no change
    },
    {
      id: 2,
      image: '/images/hero/heroimage1.jpeg',
      title: 'Empowering Through Education',
      subtitle: 'Scholarships and mentorship programs for our youth',
      imgTransform: 'translateY(100px)' // ✅ ONLY THIS IMAGE MOVES DOWN
    },
    {
      id: 3,
      image: '/images/hero/heroimage3.jpeg',
      title: 'Making Social Impact',
      subtitle: 'Community service initiatives that make a difference'
      // ❌ no change
    }
  ]

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh', marginTop: '0' }}>
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              transform: slide.imgTransform || 'none' // ✅ SAFE DEFAULT
              
            }}
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop&q=80'
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>


          {/* Text Overlay */}
          <div className="absolute bottom-20 left-0 right-0 px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl">
              <h1
                className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                {slide.title}
              </h1>

              <p
                className={`text-base md:text-xl lg:text-2xl text-white/95 transition-all duration-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows — UNCHANGED */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators — UNCHANGED */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
