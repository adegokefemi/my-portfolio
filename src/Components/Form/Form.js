import "./FormStyles.css";

import React from 'react'

const Form = () => {
 const onClick = (e) => {
    e.preventDefault()
 }

  return (
    <div className="form">
      <form onClick={onClick}>
        <label>Your Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="text"/>
        <label>Subject</label>
        <input type="text"/>
        <label>Your Mesage</label>
        <textarea rows="6" placeholder="Type your message here."></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
