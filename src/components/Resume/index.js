import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import './index.css' ;
import html from './SkillsImages/html5.png'
import css from './SkillsImages/css3.png'
import bootstrap from './SkillsImages/bootstrap.png'
import python from './SkillsImages/python-logo.png'
import javascript from './SkillsImages/javascript.png'
import nodejs from './SkillsImages/node-js.png'
import sql from './SkillsImages/mysql.png'
import sqlite from './SkillsImages/sqlite.png'
import mongodb from './SkillsImages/mongodb.png'
import git from './SkillsImages/git.png'
import github from './SkillsImages/github-logo.png'
import react from './SkillsImages/sqlite.png'

const Resume = () => (
  <div className='resume-container'>
     <h1 className='resume-heading'>Resume</h1>
     <div className='education'>
       <h4 className='education-heading'>Education</h4>
       <div className='education-container'>
         <FontAwesomeIcon icon={faGraduationCap} className='fa-graduate-cap' /> 
         <div className='education-discription'>
           <span className='course-name'>Bachelors of Science</span> <br/>
           <span className='graduation-year'>2021 - 2024</span>
           <p className='college-name'>Sri Krishnadevaraya University</p>
         </div>
       </div>
       <div className='education-container'>
         <FontAwesomeIcon icon={faGraduationCap} className='fa-graduate-cap' /> 
         <div className='education-discription'>
           <span className='course-name'>Secondary Education</span> <br/>
           <span className='graduation-year'>2018 - 2020</span>
           <p className='college-name'>Sri Vignan Junior College</p>
         </div>
       </div>
       <div className='education-container'>
         <FontAwesomeIcon icon={faGraduationCap} className='fa-graduate-cap' /> 
         <div className='education-discription'>
           <span className='course-name'>Primary Education</span> <br/>
           <span className='graduation-year'>2017 - 2018</span>
           <p className='college-name'>Jeevan Jyothi English Medium High School</p>
         </div>
       </div>
     </div>
     <div className='education'>
       <h4 className='education-heading'>Experience</h4>
       <div className='education-container'>
         <FontAwesomeIcon icon={faLaptopCode} className='fa-graduate-cap' /> 
         <div className='education-discription'>
           <span className='course-name'>A.K Technologies Pvt Ltd (Intern)</span> <br/>
           <span className='graduation-year'>Jan 2024 - May2024</span>
           <p className='college-name'>As a Full Stack Development Intern, I gained comprehensive experience in developing and maintaining web 
              applications, working on both front-end and back-end components. This internship provided me with valuable hands-on experience, enhancing my skills in full stack development and 
              preparing me for future professional opportunities in the tech industry. 
            </p>
         </div>
       </div>
       <div className='education-container'>
         <FontAwesomeIcon icon={faLaptopCode} className='fa-graduate-cap' /> 
         <div className='education-discription'>
           <span className='course-name'>AR Brands (Intern)</span> <br/>
           <span className='graduation-year'>Sep 2023 - Nov 2023</span>
           <p className='college-name'>During my internship, I developed an e-commerce website from scratch. Utilized HTML, CSS, and React JS to create an interactive shopping platform.Implemented dynamic features to enhance user engagement and boost conversion rates. </p>
         </div>
       </div>
     </div>
     <div className='skills-container'>
        <h4 className='education-heading'>My Skills</h4>
        <div className='my-skills'>
           <div className='skill'>
             <img src={html} alt='htmlimage'/>
           </div>
           <div className='skill'>
             <img src={css} alt='cssimage'/>
           </div>
           <div className='skill'>
             <img src={bootstrap} alt='bootstrapimage'/>
           </div>
           <div className='skill'>
             <img src={python} alt='pythonimage'/>
           </div>
           <div className='skill'>
             <img src={javascript} alt='javascriptimage'/>
           </div>
           <div className='skill'>
             <img src={nodejs} alt='nodejsimage'/>
           </div>
           <div className='skill'>
             <img src={sql} alt='sqlimage'/>
           </div>
           <div className='skill'>
             <img src={sqlite} alt='sqliteimage'/>
           </div>
           <div className='skill'>
             <img src={mongodb} alt='mongodbimage'/>
           </div>
           <div className='skill'>
             <img src={git} alt='gitimage'/>
           </div>
           <div className='skill'>
             <img src={github} alt='githubimage'/>
           </div>
           <div className='skill'>
             <img src={react} alt='reactimage'/>
           </div>
        </div>
     </div>
  </div>
)

export default Resume
