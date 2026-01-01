import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import Events from '@/components/events/Events'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <Events/>
        <Footer/>
    </div>
  )
}

export default page