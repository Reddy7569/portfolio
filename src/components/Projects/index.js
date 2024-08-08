import React from 'react';
import bankingImg from './ProjectImages/banking.jpeg';
import digitaTimer from './ProjectImages/digitaltimer.jpeg';
import emojiGame from './ProjectImages/emojigame.jpeg';
import matchGame from './ProjectImages/matchgame.jpeg';
import naturePhoto from './ProjectImages/naturephoto.jpeg';
import nxtWatch from './ProjectImages/nxtwatch.jpeg';
import passwordManager from './ProjectImages/passwordmanager.jpeg';
import primeVideo from './ProjectImages/primevideo.jpeg' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import './index.css'

const Projects = () => (
    <div className='projects-container'>
       <h1 className='projects-heading'>Projects</h1>
       <p className='projects-content'>See My Works Which Will Amaze You!<br/>We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.</p>
       <div className='project-items'>
          <div className='project-item'>
            <a target='-blank' href='https://reddy7569.github.io/money-manager/' class="image-container">
                    <img src={bankingImg} alt="banking" className='projectimage'/>
                    <div class="icon-overlay">
                        <FontAwesomeIcon icon={faEye} className='fa-eye-icon' />
                    </div>
            </a>
                <h3 className='project-discription-heading'>Money Manager</h3>
                <p className='project-discription'>Web Development</p>
          </div>
          <div className='project-item'>
            <a target='-blank' href='https://reddy7569.github.io/digital-timer/' class="image-container">
                    <img src={digitaTimer} alt="digitaltimer" className='projectimage'/>
                    <div class="icon-overlay">
                        <FontAwesomeIcon icon={faEye} className='fa-eye-icon' />
                    </div>
            </a>
                <h3 className='project-discription-heading'>Digital Timer</h3>
                <p className='project-discription'>Web Development</p>
          </div>
          <div className='project-item'>
            <a target='-blank' href='https://reddy7569.github.io/emoji-game/' class="image-container">
                    <img src={emojiGame} alt="emojigame" className='projectimage'/>
                    <div class="icon-overlay">
                        <FontAwesomeIcon icon={faEye} className='fa-eye-icon' />
                    </div>
            </a>
                <h3 className='project-discription-heading'>Emoji Game</h3>
                <p className='project-discription'>Web Development</p>
          </div>
          <div className='project-item'>
            <a target='-blank' href='https://reddy7569.github.io/match-game/' class="image-container">
                    <img src={matchGame} alt="matchgame" className='projectimage'/>
                    <div class="icon-overlay">
                        <FontAwesomeIcon icon={faEye} className='fa-eye-icon' />
                    </div>
            </a>
                <h3 className='project-discription-heading'>Match Game</h3>
                <p className='project-discription'>Web Development</p>
          </div>
          <div className='project-item'>
            <a target='-blank' href='https://reddy7569.github.io/gallery-app/' class="image-container">
                    <img src={naturePhoto} alt="naturephoto" className='projectimage'/>
                    <div class="icon-overlay">
                        <FontAwesomeIcon icon={faEye} className='fa-eye-icon' />
                    </div>
            </a>
                <h3 className='project-discription-heading'>Nature Photos</h3>
                <p className='project-discription'>Web Development</p>
          </div>
          <div className='project-item'>
            <a target='-blank' href='https://reddy7569.github.io/nxt-watch-app/' class="image-container">
                    <img src={nxtWatch} alt="nxtwatch" className='projectimage'/>
                    <div class="icon-overlay">
                        <FontAwesomeIcon icon={faEye} className='fa-eye-icon' />
                    </div>
            </a>
                <h3 className='project-discription-heading'>Youtube Clone</h3>
                <p className='project-discription'>Web Development</p>
          </div>
          <div className='project-item'>
            <a target='-blank' href='https://reddy7569.github.io/password-manager/' class="image-container">
                    <img src={passwordManager} alt="passwordmanager" className='projectimage'/>
                    <div class="icon-overlay">
                        <FontAwesomeIcon icon={faEye} className='fa-eye-icon' />
                    </div>
            </a>
                <h3 className='project-discription-heading'>Password Manager</h3>
                <p className='project-discription'>Web Development</p>
          </div>
          <div className='project-item'>
            <a target='-blank' href='https://reddy7569.github.io/prime-video/' class="image-container">
                    <img src={primeVideo} alt="emojigame" className='projectimage'/>
                    <div class="icon-overlay">
                        <FontAwesomeIcon icon={faEye} className='fa-eye-icon' />
                    </div>
            </a>
                <h3 className='project-discription-heading'>Prime Clone</h3>
                <p className='project-discription'>Web Development</p>
          </div>
       </div>
    </div>
)
   
   export default Projects