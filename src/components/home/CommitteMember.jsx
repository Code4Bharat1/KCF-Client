"use client"

import React, { useState } from 'react'

function CommitteeMember() {
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
              className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
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
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(member.id)}
                    loading="lazy"
                  />
                )}
                
                {/* Position Badge */}
                <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm bg-opacity-95">
                  {member.position}
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
    </div>
  )
}

export default CommitteeMember