import './index.css';
import Profilecontainer  from '../Profilecontainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobile,faCalendarDays,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                <a href='mailto:lakshmikanthreddy51@gmail.com' className='tag-name'>lkreddy7569@gmail.com</a>
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
                <a href='#location' className='tag-name'>AndhraPradesh,India</a>
              </div>
           </div>
        </div>
        <hr className='rsp-hr'/>
        <div className='icon-container'>
            <FontAwesomeIcon icon={faFacebook} className='fa-brand'/>
            <FontAwesomeIcon icon={faTwitter} className='fa-brand'/>
            <FontAwesomeIcon icon={faInstagram}  className='fa-brand'/>
        </div>
    </div>
)

export default Header;
