import React from 'react'

import './Home.css'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

const Page = () => {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
            <Navbar />
            <div className="Home-one">
                
            </div>
            <Footer />
      </div>
    </div>
  )
}

export default Page