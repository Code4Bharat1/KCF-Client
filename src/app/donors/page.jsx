import Donors from '@/components/donors/Donors'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <Donors/>
        <Footer/>
    </div>
  )
}

export default page