import React from 'react';
import Profilecontainer  from '../Profilecontainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobile,faCalendarDays,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.css';

const Header = () => (
    <div id='header-container'>
        <Profilecontainer/>
        <hr />
        <div className='details-container'>
           <div className='detail-container'>
              <div className='detail-icon-container'>
                 <FontAwesomeIcon icon={faEnvelope} fade className='fa-icon'/>
              </div>
              <div className='detail-content'>
                <h4 className='detail-heading'>EMAIL</h4>
                <a href='mailto:lakshmikanthreddy51@gmail.com' className='tag-name'>lakshmikanthreddy51@gmail.com</a>
              </div>
           </div>
           <div className='detail-container'>
              <div className='detail-icon-container'>
              <FontAwesomeIcon icon={faMobile} fade className='fa-icon'/>
              </div>
              <div className='detail-content'>
                <h4 className='detail-heading'>PHONE</h4>
                <a href='callto:+917569540148' className='tag-name'>+917569540148</a>
              </div>
           </div>
           <div className='detail-container'>
              <div className='detail-icon-container'>
              <FontAwesomeIcon icon={faCalendarDays} fade  className='fa-icon'/>
              </div>
              <div className='detail-content'>
                <h4 className='detail-heading'>BIRTHDAY</h4>
                <a href='#date' className='tag-name'>NOV 22, 2002</a>
              </div>
           </div>
           <div className='detail-container'>
              <div className='detail-icon-container'>
              <FontAwesomeIcon icon={faLocationDot} fade className='fa-icon'/>
              </div>
              <div className='detail-content'>
                <h4 className='detail-heading'>LOCATION</h4>
                <a href='#location' className='tag-name'>Bangalore, Karnataka, India</a>
              </div>
           </div>
        </div>
        <hr className='rsp-hr'/>
        <div className='icon-container'>
            <a  href='https://github.com/Reddy7569/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='fa-brand'/></a>
            <a  href='https://www.linkedin.com/in/lakshmikanth-reddy-b637a3255/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='fa-brand'/></a>
        </div>
    </div>
)

export default Header;
