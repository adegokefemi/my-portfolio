import "./AboutContentStyles.css";
import myPics from "../../assets/Pics.jpg"

import React from 'react'
import { Link } from "react-router-dom";

function AboutContent() {
  return (
    <div className="about">
        <img className="image" src={myPics} alt="myPics" />
        <div className="left">
            <h1>Hi, I'm Femi Adegoke.</h1>
            <p>I'm a React Front-End and Nodejs Back-end developer. I create responsive, secure websites.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://media.istockphoto.com/id/1389287506/photo/react-inscription-against-laptop-and-code-background.jpg?b=1&s=170667a&w=0&k=20&c=Is3S4Nph9dmkWwdjmAIa2gBEOUcr_RK-BkgJSiJNsC8=" 
                    className="img"
                    alt="react" 
                    />
                </div>
                <div className="img-stack bottom">
                    <img src="https://media.istockphoto.com/id/519044380/photo/word-node-js-on-wood-planks.jpg?s=612x612&w=0&k=20&c=6DfDTAe-HvpQqgUAJPHQEL3Pm3IcCXCJqIKWPQkLfrQ=" 
                    className="img"
                    alt="Nodejs" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;
