import "./HeroImgStyles.css";

import React from 'react'

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
       <div className="mask">
            <img className="intro-img" 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" 
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
