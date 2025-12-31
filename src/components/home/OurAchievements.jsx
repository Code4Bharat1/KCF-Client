"use client"

import React from 'react'

function OurAchievements() {
  const achievements = [
    {
      id: 1,
      title: 'Community Service Initiative',
      description: 'Successfully organized blood donation camps and health awareness programs',
      image: '/achievements/community-service.jpg'
    },
    {
      id: 2,
      title: 'Educational Scholarship Program',
      description: 'Provided scholarships to deserving students from underprivileged backgrounds',
      image: '/achievements/scholarship.jpg'
    },
    {
      id: 3,
      title: 'Cultural Heritage Preservation',
      description: 'Organized cultural events and workshops to preserve Kokan traditions',
      image: '/achievements/cultural-event.jpg'
    },
    {
      id: 4,
      title: 'World Kokani Day Celebration',
      description: 'Annual celebration bringing together the entire Kokan community',
      image: '/achievements/kokani-day.jpg'
    },
    {
      id: 5,
      title: 'Youth Empowerment Programs',
      description: 'Skill development workshops and mentorship programs for youth',
      image: '/achievements/youth-program.jpg'
    },
    {
      id: 6,
      title: 'Social Welfare Projects',
      description: 'Food distribution drives and support for underprivileged families',
      image: '/achievements/welfare.jpg'
    }
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our milestones and the positive impact we've made in the community
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80`
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100 font-medium">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-green-100 font-medium">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-green-100 font-medium">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-green-100 font-medium">Social Initiatives</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurAchievements