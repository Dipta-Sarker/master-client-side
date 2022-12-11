import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import react from '../../Images/react.png';
import node from '../../Images/node.png';
import bootstrap from '../../Images/bootstrap.jpg';
const Home = () => {
    return (
        <Carousel className='mt-5 w-75 mx-auto'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={react}
            style={{width:'100%'}}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={node}
            style={{width:'100%'}}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bootstrap}
            style={{width:'100%'}}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default Home;