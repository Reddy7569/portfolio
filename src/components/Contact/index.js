import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import './index.css';

const Contact = () => (
  <div className='contact-container'>
    <h1 className='contact-heading'>Contact</h1>
    <iframe className='address-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30953.7783110175!2d78.1413126990951!3d14.123020992500441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3cef4f144ae5d%3A0x358dec2a622ff177!2sKadiri%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1722880888635!5m2!1sen!2sin" title='address'  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
