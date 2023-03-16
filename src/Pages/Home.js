
import React from 'react'
import Footer from '../Components/Footer/Footer'
import HeroImg from '../Components/Hero/HeroImg'
import Navbar from '../Components/Navbar/Navbar'
import Work from '../Components/Workcard/Work'

const Home = () => {
  return (
    <div>
      <Navbar />  
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
