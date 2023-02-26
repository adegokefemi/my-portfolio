import React from 'react'
import "./WorkcardStyles.css";
import { NavLink } from "react-router-dom"
import pro1 from "../../assets/Laptop1.jpg"

function Workcard() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1}  alt="Laptop" />
          <h2 className="project-title">Blog</h2>
          <div className='pro-details'>
            <p>Malong blog's</p>
            <div className='pro-btns'>
              <NavLink to="https://malon-blog.netlify.app/" className="btn"> 
                  View
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workcard
