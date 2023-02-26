import "./HeroImgStyles.css";

import React from 'react'

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
       <div className="mask">
            <img className="intro-img" 
            src="https://github.com/tech2etc/React-JS-Crash-Course/blob/main/src/assets/intro-bg.jpg?raw=true" 
            alt="IntroImg"/>
       </div>
       <div className="content">
            <p> Hi, I'm A FULL-STACK.</p>
            <h1> React / Nodejs  Developer.</h1>
            <div>
        <Link className="btn" to="/project">Projects</Link>
        <Link className="btn btn-light" to="/contact">Contact</Link>
       </div>
       </div>
    </div>
  )
}

export default HeroImg
