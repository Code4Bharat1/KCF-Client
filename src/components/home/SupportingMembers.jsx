"use client"

import React, { useState } from 'react'

function SupportingMembers() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Sample supporting members data
  const supportingMembers = [
    {
      id: 1,
      name: "Mr. Suresh Kulkarni",
      image: "/supportingMembers/member1.jpg",
      qualification: "B.Com, Business Owner",
      position: "Patron",
      description: "Mr. Suresh Kulkarni has been a generous supporter of the Kokan Community Forum. His contributions have enabled many educational initiatives and have made a significant impact on students' lives."
    },
    {
      id: 2,
      name: "Mrs. Meera Joshi",
      image: "/supportingMembers/member2.jpg",
      qualification: "Social Worker",
      position: "Advisory Member",
      description: "Mrs. Meera Joshi actively participates in community development programs and provides valuable guidance for various social welfare activities organized by the forum."
    },
    {
      id: 3,
      name: "Dr. Abhijit Kamat",
      image: "/supportingMembers/member3.jpg",
      qualification: "MBBS, General Physician",
      position: "Health Advisor",
      description: "Dr. Abhijit Kamat supports health awareness programs and provides free medical consultations during community health camps organized by the forum."
    },
    {
      id: 4,
      name: "Mr. Prakash Rane",
      image: "/supportingMembers/member4.jpg",
      qualification: "Engineer, Entrepreneur",
      position: "Technical Advisor",
      description: "Mr. Prakash Rane offers technical guidance and mentorship to students pursuing engineering and technology careers, helping them navigate their professional paths."
    },
    {
      id: 5,
      name: "Mrs. Kavita Prabhu",
      image: "/supportingMembers/member5.jpg",
      qualification: "M.A. in Psychology",
      position: "Counselor",
      description: "Mrs. Kavita Prabhu provides counseling services to students and families, helping them overcome challenges and achieve their educational and personal goals."
    },
    {
      id: 6,
      name: "Mr. Ramesh Sawant",
      image: "/supportingMembers/member6.jpg",
      qualification: "Retired Teacher",
      position: "Education Mentor",
      description: "Mr. Ramesh Sawant dedicates his time to mentoring students and helping them excel in their academic pursuits. His vast teaching experience benefits countless students."
    },
    {
      id: 7,
      name: "Mrs. Shubhangi Naik",
      image: "/supportingMembers/member7.jpg",
      qualification: "Arts Graduate, Community Leader",
      position: "Cultural Coordinator",
      description: "Mrs. Shubhangi Naik organizes cultural events and programs that celebrate Konkan heritage while fostering unity and community spirit among members."
    },
    {
      id: 8,
      name: "Mr. Ganesh Deshmukh",
      image: "/supportingMembers/member8.jpg",
      qualification: "CA, Financial Consultant",
      position: "Financial Advisor",
      description: "Mr. Ganesh Deshmukh provides financial planning advice and helps the forum maintain transparency in all monetary transactions and scholarship distributions."
    },
    {
      id: 9,
      name: "Dr. Pooja Bhatt",
      image: "/supportingMembers/member9.jpg",
      qualification: "Ph.D. in Literature",
      position: "Academic Advisor",
      description: "Dr. Pooja Bhatt guides students in higher education pursuits and research opportunities, helping them achieve academic excellence and pursue their scholarly ambitions."
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

  // Generate placeholder with initials
  const getPlaceholder = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=22c55e&color=ffffff&bold=true&length=2`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-45 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Our Supporting Members
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our valued supporters who contribute their time, expertise, and resources to strengthen our community
          </p>
        </div>

        {/* Supporting Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportingMembers.map((member) => (
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
                    e.target.onerror = null
                    e.target.src = getPlaceholder(member.name)
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
                    e.target.onerror = null
                    e.target.src = getPlaceholder(selectedMember.name)
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

export default SupportingMembers