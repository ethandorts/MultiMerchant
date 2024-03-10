import React from 'react'
import Profile from '../Components/Profile'
import ProductCard from '../Components/ProductCard';
import Bio from '../Components/Bio';
import '../Pages/css/UserPage.css';

const UserPage = () => {
  return (
    <div className="user-page-container">
      <div className="profile-container">
        <Profile className='profile' />
      </div>
      <div className="bio-container">
        <Bio className='bio' />
      </div>
    </div>
  )
}

export default UserPage