import React from 'react'
import "./WorkcardStyles.css";
import { NavLink } from "react-router-dom"


function Workcard(props) {
  return (
    <div className="project-card">
          <img src={props.img}  alt="Laptop" />
          <h2 className="project-title">{props.title}</h2>
          <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
              <NavLink to={props.view} className="btn"> 
                  View
              </NavLink>
            </div>
          </div>
        </div>
  )
}

export default Workcard
