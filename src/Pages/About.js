import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import HeroImg2 from '../Components/Hero2/HeroImg2';
import AboutContent from '../Components/AboutContent/AboutContent';
import Footer from '../Components/Footer/Footer';


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="ABOUT." text="I'm a friendly Full-Stack Developer, web3 enthusiast." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
