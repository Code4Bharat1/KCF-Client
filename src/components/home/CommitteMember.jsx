"use client"

import React, { useState } from 'react'

function CommitteeMember() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState({})

  // Sample committee members data
  const committeeMembers = [
    {
      id: 1,
      name: "Mr.Salman A S Kardame",
      image: "/committeeMember/Mr.Salman.png",
      qualification: "Ph.D. in Computer Science",
      position: "President",
      description: "Dr. Rajesh Kumar has been leading the Kokan Community Forum for over 5 years. He is dedicated to promoting education and social welfare in the Konkan region. His vision has helped thousands of students achieve their dreams."
    },
    {
      id: 2,
      name: "Mr. Alimiya Hamza Dalvi",
      image: "/committeeMember/Mr.Alimiya.png",
      qualification: "MBA, M.A. in Social Work",
      position: "Vice President",
      description: "Mrs. Priya Sharma brings extensive experience in community development and has been instrumental in organizing various educational programs and scholarship initiatives for underprivileged students."
    },
    {
      id: 3,
      name: "Mrs. Sufiya Hanif",
      image: "/committeeMember/Mrs.Sufiya.png",
      qualification: "B.Com, CA",
      position: "Treasurer",
      description: "Mr. Anil Desai manages all financial operations of the forum with transparency and integrity. His financial expertise ensures that every donation reaches the right beneficiaries."
    },
    {
      id: 4,
      name: "Mr.Sajjad Khatib",
      image: "/committeeMember/Mr.Sajjad.jpeg",
      qualification: "M.D., MBBS",
      position: "Secretary",
      description: "Dr. Sunita Patil coordinates all activities and maintains records of the forum. She has been actively involved in health awareness campaigns across Konkan villages."
    },
    {
      id: 5,
      name: "Mrs.Musarrat Khatib",
      image: "/committeeMember/Mrs.Musarrat.png",
      qualification: "B.Tech, MBA",
      position: "Joint Secretary",
      description: "Mr. Vikram Naik assists in organizing events and programs. He specializes in youth engagement and has launched several skill development initiatives."
    },
    {
      id: 6,
      name: "Mohammed Irfan Kazi",
      image: "/committeeMember/Mohammed.jpeg",
      qualification: "M.A. in Education",
      position: "Education Coordinator",
      description: "Mrs. Anjali Sawant oversees all educational programs and scholarship distributions. Her passion for education has helped shape the future of many young students."
    },
    {
      id: 7,
      name: "Dr Nargis Atiq Shaikh(Kardekar)",
      image: "/committeeMember/Dr Nargis Atiq Shaikh(Kardekar).jpeg",
      qualification: "B.Tech, MBA",
      position: "Joint Secretary",
      description: "Mr. Vikram Naik assists in organizing events and programs. He specializes in youth engagement and has launched several skill development initiatives."
    },
    {
      id: 8,
      name: "Umair Anis Ibji",
      image: "/committeeMember/Umair Anis Ibji.png",
      qualification: "B.Tech, MBA",
      position: "Joint Secretary",
      description: "Mr. Vikram Naik assists in organizing events and programs. He specializes in youth engagement and has launched several skill development initiatives."
    },
    {
      id: 9,
      name: "Hanif Husain Parkar",
      image: "/committeeMember/Hanif Husain Parkar.png",
      qualification: "B.Sc, M.Sc",
      position: "Joint Secretary",
      description: "Mr. Rahul Sharma supports coordination of internal activities and assists in managing student-focused programs. He is actively involved in planning workshops and community engagement initiatives."
    },
    {
      id: 10,
      name: "Atique Kasu",
      image: "/committeeMember/Atique Kasu.png",
      qualification: "B.Sc, M.Sc",
      position: "Joint Secretary",
      description: "Mr. Rahul Sharma supports coordination of internal activities and assists in managing student-focused programs. He is actively involved in planning workshops and community engagement initiatives."
    }
  ]

  const openModal = (member) => {
    setSelectedMember(member)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
    setTimeout(() => setSelectedMember(null), 300)
  }

  // Generate placeholder with initials
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  const handleImageError = (memberId) => {
    setImageErrors(prev => ({ ...prev, [memberId]: true }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-28 sm:pt-32 md:pt-36 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Our Committee Members
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Meet the dedicated individuals working tirelessly for the betterment of our community
          </p>
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => openModal(member)}
              className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Member Image Container - Fixed aspect ratio */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-green-100 to-green-50 overflow-hidden">
                {imageErrors[member.id] ? (
                  // Fallback placeholder
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
                    <div className="text-white text-5xl font-bold mb-2">
                      {getInitials(member.name)}
                    </div>
                    <div className="text-white text-sm font-medium opacity-90 px-4 text-center">
                      {member.name}
                    </div>
                  </div>
                ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(member.id)}
                    loading="lazy"
                  />
                )}
                
                {/* Position Badge */}
                <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm bg-opacity-95">
                  {member.position}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="text-sm font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                  {member.name}
                </h3>
                <p className="text-sm text-green-600 font-semibold mb-2 line-clamp-1">
                  {member.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative">
              <div className="aspect-[16/10] bg-gradient-to-br from-green-100 to-green-50 overflow-hidden">
                {imageErrors[selectedMember.id] ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
                    <div className="text-white text-7xl font-bold mb-4">
                      {getInitials(selectedMember.name)}
                    </div>
                    <div className="text-white text-xl font-semibold">
                      {selectedMember.name}
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-center"
                    onError={() => handleImageError(selectedMember.id)}
                  />
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:bg-white transition-all hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Position Badge */}
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {selectedMember.position}
              </div>

              {/* Name */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
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
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  About
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedMember.description}
                </p>
              </div>

              {/* Close Button */}
              <div className="mt-8">
                <button 
                  onClick={closeModal}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommitteeMember
