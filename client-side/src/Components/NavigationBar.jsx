import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Components/css/NavigationBarStyle.css';
import Logo from '../assets/TradeMarket.png';
import { FaShoppingBasket } from 'react-icons/fa';
import { RiAccountCircleLine } from "react-icons/ri";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Logout } from '../Redux/authenticationSlice.js';
import { useDispatch } from 'react-redux'
import { useUserLogoutMutation } from '../Redux/UsersSlice.js';
import DropDownMenu from './DropDownMenu';

const NavigationBar = () => {
  const dispatch = useDispatch(); // Corrected assignment of useDispatch
  const [UserLogout] = useUserLogoutMutation();
  
  const { FirstName, Surname } = useSelector((state) => state.authentication.UserInformation || {});

  const LogoutHandler = async () => {
    try {
        await UserLogout(); 
        dispatch(Logout()); 
        document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; 
    } catch (error) {
        console.error('Logout failed:', error);
    }
  };

  return (
    <header>
      <Navbar expand="lg" style={{ paddingLeft: '20px', paddingRight: '80px' }}>
        <Navbar.Brand href="/" style={{ marginLeft: '20px' }}>
          <img src={Logo} alt="Your Logo" height="80" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Nav className="ms-auto d-flex flex-row align-items-center custom-nav">
          {FirstName && Surname ? ( 
            <Nav.Link className='mr-2 text-white'>
               {FirstName} {Surname} 
               <RiAccountCircleLine className='icon' style={{ fontSize: '32px', marginLeft: '5px', color: 'white'}} />
               <Button variant="danger" style={{ fontSize: '18px', marginLeft: '5px', color: 'white'}} onClick={LogoutHandler} type="submit">Logout</Button>
            </Nav.Link>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link className='mr-2 text-white'>
                Login
                <RiAccountCircleLine className='icon' style={{ fontSize: '32px', marginLeft: '5px', color: 'white'}}  />
              </Nav.Link>
            </LinkContainer>
          )}
          <LinkContainer to="/basket">
            <Nav.Link>
              <FaShoppingBasket className='icon' style={{ fontSize: '32px', color: 'white' }} />
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <DropDownMenu />
      </Navbar>
    </header>
  );
}

export default NavigationBar;
