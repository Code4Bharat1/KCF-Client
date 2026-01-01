import Footer from '@/components/home/Footer'
import Volunteers from '@/components/volunteers/Volunteers'
import Navbar from '@/components/home/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <Volunteers/>
        <Footer/>

    </div>
  )
}

export default page