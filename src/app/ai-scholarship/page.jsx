import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import Ai_Scholarship from '@/components/programs/Ai_Scholarship'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <Ai_Scholarship/>
        <Footer/>
    </div>
  )
}

export default page