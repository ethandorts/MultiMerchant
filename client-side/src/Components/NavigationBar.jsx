import React from 'react';
import '../Components/css/NavigationBarStyle.css';
import Logo from '../assets/TradeMarket.png';
import { FaShoppingBasket } from 'react-icons/fa';
import { RiAccountCircleLine } from "react-icons/ri";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { LinkContainer } from 'react-router-bootstrap'; 
import DropDownMenu from './DropDownMenu';



const NavigationBar = () => {
  return (
    <header>
      <Navbar expand="lg" style={{ paddingLeft: '20px', paddingRight: '80px' }}> 
        <Navbar.Brand href="#" style={{ marginLeft: '20px' }}> 
          <img src={Logo} alt="Your Logo" height="80" className="d-inline-block align-top" /> 
        </Navbar.Brand>
        <DropDownMenu />
        <Nav className="ms-auto d-flex flex-row align-items-center custom-nav"> 
          <LinkContainer to="/account">
            <Nav.Link className='mr-2'>
              Login
              <RiAccountCircleLine className='icon' style={{ fontSize: '32px', marginLeft: '5px', color: 'white'}}  />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/basket">
            <Nav.Link>
            <FaShoppingBasket className='icon' style={{ fontSize: '32px', color: 'white' }} /> 
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
