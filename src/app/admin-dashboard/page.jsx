import React from 'react'
import AdminDashboard from '@/components/admin/AdminDashboard'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'

function page() {
  return (
    <div>
        <Navbar/>
        <AdminDashboard/>
        <Footer/>
    </div>
  )
}

export default page