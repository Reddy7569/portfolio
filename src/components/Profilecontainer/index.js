import React from 'react';
import myImage from './my_image.png';
import './index.css'
const Profile_container = () => (
    <div className='profile-container'>
            <div className='img-container'>
                <img src={myImage} alt='Profile' className='image'/>
            </div>
            <div>
                <h1 className='profile-name'>Lakshmikanth</h1>
                <p className='profile-description'>Web Developer</p>
            </div>
    </div>
)

export default Profile_container
        
