import { Carousel } from 'react-bootstrap'
import React from 'react'
import Logo from '../assets/TradeMarket.png';
import Nike from '../assets/nike.jpg';
import Nike2 from '../assets/nike2.jpg';
import Nike3 from '../assets/nike3.jpg';

const ImageCarousel = () => {
  return (
    <Carousel fluid style={{margin:0}}>
        <Carousel.Item>
            <img src={Nike3} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={Nike} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'cover' }}/>
        </Carousel.Item>
        <Carousel.Item>
            <img src={Nike2} className="d-block w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
        </Carousel.Item>
    </Carousel>
  )
}

export default ImageCarousel