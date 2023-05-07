import React from 'react'
import './carousel.css'
import img1 from '../../img/main1.jpg'
import img2 from '../../img/main2.jpg'
import img3 from '../../img/main3.jpg'
import Carousel from 'react-bootstrap/Carousel'

function Slider ({ title, slice }) {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img
          className='d-block w-100 c-img'
          src={img1}
          alt='First slide'
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 c-img'
          src={img2}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 c-img'
          src={img3}
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
