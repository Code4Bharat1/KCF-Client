"use client"

import React, { useState } from 'react'

function KokanMela() {
  const [copiedField, setCopiedField] = useState(null)

  const sponsorshipBenefits = [
    {
      id: 1,
      icon: "🏪",
      title: "Business Stalls",
    },
    {
      id: 2,
      icon: "🎯",
      title: "Entry & Exit Banners",
    },
    {
      id: 3,
      icon: "📖",
      title: "Souvenir Pages",
    },
    {
      id: 4,
      icon: "📺",
      title: "LED Advertising",
    },
    {
      id: 5,
      icon: "📱",
      title: "Social Media Postings",
    },
    {
      id: 6,
      icon: "✨",
      title: "& Many More",
    }
  ]

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => {
      setCopiedField(null)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-28 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 rounded-full mb-4">
            <span className="text-5xl">🎪</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Kokan Mela Season 4
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
            <div className="flex items-center gap-2 text-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-gray-900">Saturday 31st Jan & Sunday 1st Feb 2026</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold text-gray-900">Richardson & Cruddas</span>
            </div>
          </div>
          <p className="text-gray-600 text-lg">
            Organized by: Kokan Community Forum - World Kokani Day
          </p>
        </div>

        {/* Sponsorship Image Display */}
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Sponsorship Details
            </h2>
            <a
              href="/kokani_support.jpeg"
              download="Kokan_Mela_Sponsorship.jpeg"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          </div>

          {/* Centered Image with Max Width */}
          <div className="flex justify-center">
            <div className="max-w-3xl w-full border-2 border-green-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/kokani_support.jpeg"
                alt="Kokan Mela Sponsorship Details"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x600/22c55e/ffffff?text=Sponsorship+Details"
                }}
              />
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Click the download button above to save this sponsorship details image
          </p>
        </div>

        {/* Sponsorship Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Sponsorship Benefits
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsorshipBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white rounded-xl shadow-lg border border-green-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-sm font-bold text-gray-900">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">1</span>
            Bank Account Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Account Name */}
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Account Name:</p>
              <p className="text-gray-900 font-semibold">Kokan Community Forum World Kokani Day</p>
            </div>

            {/* Account Number */}
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Account Number:</p>
              <div className="flex items-center justify-between gap-2">
                <code className="text-gray-900 font-mono font-semibold">750021101006446</code>
                <button 
                  onClick={() => handleCopy('750021101006446', 'account')}
                  className="text-green-600 hover:text-green-700 relative"
                >
                  {copiedField === 'account' ? (
                    <span className="text-xs font-semibold whitespace-nowrap">Copied!</span>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* IFSC Code */}
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">IFSC Code:</p>
              <div className="flex items-center justify-between gap-2">
                <code className="text-gray-900 font-mono font-semibold">KKBK0KMCB02</code>
                <button 
                  onClick={() => handleCopy('KKBK0KMCB02', 'ifsc')}
                  className="text-green-600 hover:text-green-700 relative"
                >
                  {copiedField === 'ifsc' ? (
                    <span className="text-xs font-semibold whitespace-nowrap">Copied!</span>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Bank Name */}
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Bank Name:</p>
              <p className="text-gray-900 font-semibold">Kotak Mahindra Bank</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">2</span>
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-3 bg-green-50 rounded-lg p-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 mb-1">Email</p>
                <a href="mailto:kokancommunityforumWKD@gmail.com" className="text-green-600 hover:underline text-xs break-all">
                  kokancommunityforumWKD@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 bg-green-50 rounded-lg p-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 mb-1">Sufiya</p>
                <a href="tel:9821199793" className="text-green-600 hover:underline font-mono">9821199793</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 bg-green-50 rounded-lg p-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 mb-1">Musarrat</p>
                <a href="tel:7400106145" className="text-green-600 hover:underline font-mono">7400106145</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 bg-green-50 rounded-lg p-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 mb-1">KCF WKD</p>
                <a href="tel:9820104711" className="text-green-600 hover:underline font-mono">9820104711</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KokanMela