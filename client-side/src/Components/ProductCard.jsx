import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Components/css/ProductCard.css';
import Image from '../assets/santa.png';

const ProductCard = () => {
  return (
    <Card>
      <Link to={'/product'}>
      <img
          src={Image}
          className='card-img-top'  
        />
      </Link>
      <Card.Body>
        <Row>
          <Col>
        <Link to={'/product'}>
          <Card.Title> Black Jacket </Card.Title>
        </Link>
        <Card.Text>
          £25.00
        </Card.Text>
        </Col>
        <Col className='d-flex justify-content-end'>
        <Button variant='primary'>Add To Basket</Button>
        </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ProductCard