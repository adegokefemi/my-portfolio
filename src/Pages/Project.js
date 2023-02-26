import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroImg2 from '../Components/Hero2/HeroImg2'
import Footer from '../Components/Footer/Footer'
import Workcard from '../Components/Workcard/Workcard'


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS."  text="Some of my most recent works."/>
      <Workcard />
      <Footer />
    </div>
  )
}

export default Project;
