import React from 'react'
import './ProfileFrame.css' 


export default function ProfileFrame() {
  return (
    <div className='profile-bar'>
         <div className='profile-bar-inner-d'>
             <div className='profile-bar-inner-d-heading'><h2>Profile</h2></div>
             <div className='profile-bar-inner-d-icons'>
              <div className='profile-bar-inner-d-notification'><img src='/Images/profileNotificationBar.svg'/></div>
              <div className='profile-bar-inner-d-profile'><img src='/Images/profileIcon.svg'/></div>
              <div>

              </div>
             </div>
         </div>
    </div>
  )
}
