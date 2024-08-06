import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faPenToSquare,faLaptopCode,faLayerGroup, faChartLine} from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './index.css'
const About = () => (
 <div className='about-container'>
     <h1 className='about-heading'>About Me </h1> 
     <p className='about-content'>I'm MERN-Stack Developer from AndhraPradesh, India, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
       <br/> My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
     <div className='my-container'>
        <h1 className='wht-name'>What I'm Doing</h1>
        <div className='about-my-container'>
           <div className='my-cards'>
             <FontAwesomeIcon icon={faPenToSquare} className="fa-card-icon"/>
              <div className='my-card-content'>
                 <h1 className='my-card-heading'>Web Design</h1>
                 <p className='my-card-discription'>The most modern and high-quality design made at a professional level.</p>
              </div>
           </div>
           <div className='my-cards'>
             <FontAwesomeIcon icon={faLaptopCode} className="fa-card-icon"/>
              <div className='my-card-content'>
                 <h1 className='my-card-heading'>Web development</h1>
                 <p className='my-card-discription'>High-quality development of sites at the professional level.</p>
              </div>
           </div>
           <div className='my-cards'>
             <FontAwesomeIcon icon={faLayerGroup} className="fa-card-icon"/>
              <div className='my-card-content'>
                 <h1 className='my-card-heading'>Full-Stack Applications</h1>
                 <p className='my-card-discription'>Develop full-stack applications using the MERN stack by building the front end with React.</p>
              </div>
           </div>
           <div className='my-cards'>
             <FontAwesomeIcon icon={faChartLine} className="fa-card-icon"/>
              <div className='my-card-content'>
                 <h1 className='my-card-heading'>Optimize Performance</h1>
                 <p className='my-card-discription'>Application performance with best practices such as code splitting, lazy loading</p>
              </div>
           </div>
        </div>
     </div>
 </div>
)

export default About