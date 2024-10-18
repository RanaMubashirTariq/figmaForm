import React from 'react'
import './SideNavigationBar.css'


export default function SideNavigationBar() {
  return (
    <div className='side-navbar'>
        <div className='side-navbar-inner-d'>
            <div className='navbar-logo'><img src="/Images/navbar-Logo.svg" /></div>
             <div className='navbar-menu-d'>
                         <div className='menu-list-d'>
                            <div className='menu-inner-list-d'>
                                <img src='/Images/deshBoardIcon.svg'/>
                                <p>Dashboard</p>
                            </div>
                         </div>
                         <div className='menu-list-d'>
                            <div className='menu-inner-list-d'>
                                <img src='/Images/tradingIcon.svg'/>
                                <p>Ownership & Trading</p>
                            </div>
                         </div>
                         <div className='menu-list-d'>
                            <div className='menu-inner-list-d'>
                                <img src='/Images/mangementIcon.svg'/>
                                <p>Portfolio Management</p>
                            </div>
                         </div>
                         <div className='menu-list-d'>
                            <div className='menu-inner-list-d'>
                                <img src='/Images/claimingIcon.svg'/>
                                <p>Claiming ROIs</p>
                            </div>
                         </div>
                         <div className='menu-list-profile-d'>
                            <div className='menu-inner-list-d'>

                                <img src='/Images/profileIcon.svg'/>
                                <div className='profile-para-d'><p>Profile</p></div>
                            </div>
                         </div>
             </div>
        </div>
    </div>
  )
}
