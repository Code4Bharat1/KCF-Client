import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import AchieversAward from '@/components/programs/AchieversAward'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <AchieversAward/>
        <Footer/>
    </div>
  )
}

export default page