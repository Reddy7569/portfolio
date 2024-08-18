import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import './index.css';

const Contact = () => (
  <div className='contact-container'>
    <h1 className='contact-heading'>Contact</h1>
    <iframe className='address-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5665935963!2d77.46612605279887!3d12.954280236241711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1723951125873!5m2!1sen!2sin"title='address'  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <h3 className='contact-content'>Contact Form</h3>
    <div className='user-fields'>
        <input placeholder='Full name'type='text' className='user-input'/>
        <input placeholder='Email Address' type='text' className='user-input'/>
        <textarea placeholder='Your Message' className='user-message'/>
    </div>
    <div className='contact-btn'>
     <button className='submit-btn'> <FontAwesomeIcon icon={faPaperPlane} className='paper-icon'/>Send Message</button>
    </div>
  </div>
);

export default Contact;
