import React from 'react';
import image from "../Assets/pizzaLeft.jpg"
import "../Styles/contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${image})`}}>

        </div>
        <div className='rightSide'>
        <h1> Contact Us</h1>
        <form id="contact-form" method="POST">
          <label >Full Name</label>
          <input type="text" placeholder="Enter full name..."  />
          <label>Email</label>
          <input type="email" placeholder="Enter email..."  />
          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>

        </div>
      
    </div>
  )
}

export default Contact
