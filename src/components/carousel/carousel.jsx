import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import useFetch from '../../hooks/useFetch'
import './carousel.css'
import React from 'react'

function Slider ({ title, slice }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const url = 'https://cougar.onrender.com/product/v1'
  const data = useFetch(url, 'GET')
  if (data) {
    console.log(data)
  }

  return (
    <>
      <h2>{title}</h2>

      {!data
        ? 'load'
        : <>

          <Carousel responsive={responsive} infinite autoPlay>

            {data.slice(slice, slice + 20).map((x) => {
              return (
                <React.Fragment key={x._id}>
                  <div className='c-item'>
                    <img src={x.imgUrls[0]} alt='' />
                    <div className='c-info'>
                      <h5>{x.nombre}</h5>
                      <p>$ {x.precio}</p>
                    </div>

                  </div>
                </React.Fragment>
              )
            })}

          </Carousel>;
        </>}

    </>
  )
}

export default Slider
