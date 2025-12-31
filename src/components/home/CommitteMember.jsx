"use client"

import React, { useState } from 'react'

function CommitteeMember() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Sample committee members data
  const committeeMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      image: "/committeeMember/committeeMember1.jpg",
      qualification: "Ph.D. in Computer Science",
      position: "President",
      description: "Dr. Rajesh Kumar has been leading the Kokan Community Forum for over 5 years. He is dedicated to promoting education and social welfare in the Konkan region. His vision has helped thousands of students achieve their dreams."
    },
    {
      id: 2,
      name: "Mrs. Priya Sharma",
      image: "/committee/member2.jpg",
      qualification: "MBA, M.A. in Social Work",
      position: "Vice President",
      description: "Mrs. Priya Sharma brings extensive experience in community development and has been instrumental in organizing various educational programs and scholarship initiatives for underprivileged students."
    },
    {
      id: 3,
      name: "Mr. Anil Desai",
      image: "/committee/member3.jpg",
      qualification: "B.Com, CA",
      position: "Treasurer",
      description: "Mr. Anil Desai manages all financial operations of the forum with transparency and integrity. His financial expertise ensures that every donation reaches the right beneficiaries."
    },
    {
      id: 4,
      name: "Dr. Sunita Patil",
      image: "/committee/member4.jpg",
      qualification: "M.D., MBBS",
      position: "Secretary",
      description: "Dr. Sunita Patil coordinates all activities and maintains records of the forum. She has been actively involved in health awareness campaigns across Konkan villages."
    },
    {
      id: 5,
      name: "Mr. Vikram Naik",
      image: "/committee/member5.jpg",
      qualification: "B.Tech, MBA",
      position: "Joint Secretary",
      description: "Mr. Vikram Naik assists in organizing events and programs. He specializes in youth engagement and has launched several skill development initiatives."
    },
    {
      id: 6,
      name: "Mrs. Anjali Sawant",
      image: "/committee/member6.jpg",
      qualification: "M.A. in Education",
      position: "Education Coordinator",
      description: "Mrs. Anjali Sawant oversees all educational programs and scholarship distributions. Her passion for education has helped shape the future of many young students."
    }
  ]

  const openModal = (member) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedMember(null), 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-28 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Our Committee Members
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the dedicated individuals working tirelessly for the betterment of our community
          </p>
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => openModal(member)}
              className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Member Image */}
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-50 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400/22c55e/ffffff?text=" + member.name.charAt(0)
                  }}
                />
                {/* Position Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {member.position}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-green-600 font-semibold mb-2">
                  {member.qualification}
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Click to view details
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div
          className={`fixed inset-0 bg-white/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scrollbar-hide ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Modal Header with Image */}
            <div className="relative">
              <div className="h-64 bg-gradient-to-br from-green-100 to-green-50">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400/22c55e/ffffff?text=" + selectedMember.name.charAt(0)
                  }}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Position Badge */}
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {selectedMember.position}
              </div>

              {/* Name */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedMember.name}
              </h2>

              {/* Qualification */}
              <p className="text-green-600 font-semibold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                {selectedMember.qualification}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedMember.description}
                </p>
              </div>

              {/* Close Button */}
              <div className="mt-8">
                <button 
                  onClick={closeModal}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Hide Style */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default CommitteeMember