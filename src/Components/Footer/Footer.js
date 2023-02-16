import  "./FooterStyles.css";

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} 
                style={{ color: "#fff",  marginRight: "20px"}}/>
                 <div>
                    <p>Mainland,</p>
                    <p>Ikeja, Lagos.</p>
                 </div>
            </div>
            <div className="phone">
            <h4>
                <FaPhone size={20} 
                style={{ color: "#fff",   marginRight: "20px"}}/>
                080-626-467-61
            </h4>
        </div>
        <div className="mail">
            <h4>
                <FaMailBulk size={20} 
                style={{ color: "#fff",   marginRight: "20px"}}/>
                adegokefemi95@gmail.com
            </h4>
        </div>
        </div>
        <div className="right">
            <h4>DevFemolas.</h4>
            <p>I'm a react frontend developer and you can reach 
            out to me for your aesthetic and responsive design.</p>
            <div className="social">
                <FaLinkedin size={30} 
                style={{ color: "#fff",  
                marginRight: "20px"}}
                />
                <FaFacebook size={30} 
                style={{ color: "#fff",  
                marginRight: "20px"}}
                />
                <FaTwitter size={30} 
                style={{ color: "#fff", 
                marginRight: "20px"}}
                 />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
