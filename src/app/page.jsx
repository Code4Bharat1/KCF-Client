import React from 'react'
import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import Gallery from '@/components/home/Gallery'
import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'
import CommitteMember from '@/components/home/CommitteMember'
import SupportingMembers from '@/components/home/SupportingMembers'
import About from '@/components/home/AboutUs'
import VisionAndMission from '@/components/home/VisionAndMission'
import OurAchievements from '@/components/home/OurAchievements'

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <VisionAndMission/>
      <OurAchievements/>
      {/* <CommitteMember/>
      <SupportingMembers/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page