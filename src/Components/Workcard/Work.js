import React from 'react'
import "./WorkcardStyles.css";
import  Data from "./WorkCadData";
import Workcard from './Workcard';

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {Data.map((item) => (
          <Workcard 
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
            view={item.view}
          />
        ))}
      </div>
    </div>
  )
}

export default Work;
