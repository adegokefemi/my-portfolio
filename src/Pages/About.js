import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import HeroImg2 from '../Components/Hero2/HeroImg2'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a friendly Full-Stack Developer." />
      <Footer />
    </div>
  )
}

export default About
