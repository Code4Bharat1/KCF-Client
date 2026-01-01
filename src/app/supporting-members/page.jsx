import Footer from '@/components/home/Footer'
import SupportingMembers from '@/components/home/SupportingMembers'
import Navbar from '@/components/home/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <SupportingMembers/>
        <Footer/>
    </div>
  )
}

export default page