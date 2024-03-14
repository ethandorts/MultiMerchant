import React from 'react'
import Profile from '../Components/Profile'
import ProductCard from '../Components/ProductCard';
import Bio from '../Components/Bio';
import '../Pages/css/UserPage.css';
import { Row, Col } from 'react-bootstrap';

const UserPage = () => {
  return (
    <div className="user-page-container">
      <div className="profile-container">
        <Profile className='profile' />
      </div>
      <div className='container mt-3'>
        <h1>Listed Items</h1>
        <Row className='mt-3'>
          <Col sm={12} md={6} lg={4} xl={3} >
            <ProductCard />
            <ProductCard />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default UserPage