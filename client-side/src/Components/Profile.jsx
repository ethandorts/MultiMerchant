import React from 'react';
import Logo from '../assets/StripWeathersCars.png';
import '../Components/css/Profile.css';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { Form } from 'react-bootstrap';

const Profile = () => {
    const profile = {
        username: 'ethandorts',
        image: '',
        itemsForSale: 32,
        followers: 78,
        reviews: 6,
        biography: 'Hello you see there'
    };

    return (
        <>
        <div>
            <div className='user-profile'>
                <div className='container-logo'>
                    <img className='logo' src={Logo} alt="Logo" />
                </div>
                <h2 className='profile-username'>{profile.username}</h2>
                <button className='btn btn-primary btn-block profile-top-buttons'> Follow </button>
                <button className='btn btn-primary btn-block profile-top-buttons'> Message </button>
                <HiOutlineDotsHorizontal className='more' />
            </div>

            <div className='profile-info'>
                <div>
                    Items For Sale: <b>{profile.itemsForSale}</b>
                    &nbsp;&nbsp; 
                    Followers: <b>{profile.followers}</b>
                    &nbsp;&nbsp; 
                    Reviews: <b>{profile.reviews}</b>
                    &nbsp;&nbsp; 
                </div>
            </div>
            <div className='bio'>
            Everybody loves clothes. Do you wanto buy mine?
            </div>
            </div>
        </>
    );
};

export default Profile;
