import React, { useState } from 'react'
import Gallery from '../gallery/gallery'
import './details.css'
import truck from '../../icons/truck-moving.png'
import clock from '../../icons/time-forward.png'
import cart from '../../icons/shopping-cart.png'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Slider from '../carousel/carousel'

function Details () {
  const { id } = useParams()

  const url = 'https://cougar.onrender.com/product/v1'
  const data = useFetch(url, 'GET')
  let found
  if (data) {
    found = data.find((x) => x._id === id)
    console.log(found)
  }

  const [cantidad, setCatidad] = useState(0)

  function cantidadAdd () {
    setCatidad(cantidad + 1)
  }
  function cantidadSubstract () {
    if (cantidad > 0) {
      setCatidad(cantidad - 1)
    }
  }

  return (
    <>
      {!found
        ? 'load'
        : <>

          <div id='details'>

            <Gallery imgs={found.imgUrls} />

            <div className='info'>
              <h4>{found.nombre}</h4>
              <div className='item'>

                <h5 id='precio'>$ {found.precio}</h5>

              </div>

              <div className='item'>
                <p className='topic'>Tallas:</p>
                <div className='tallas'>
                  {found.tallas.map((x) => {
                    return (
                      <React.Fragment key={x}>

                        <p>{x}</p>

                      </React.Fragment>

                    )
                  })}

                </div>

              </div>
              <div className='item'>
                <p className='topic'>Colores:</p>
                <div>
                  {found.colores.map((x) => {
                    return (
                      <React.Fragment key={x}>

                        <div className='color-detail' style={{ backgroundColor: x }}> </div>

                      </React.Fragment>

                    )
                  })}
                </div>

              </div>
              <div className='quantity'>
                <p className='topic'>Cantidad</p>
                <div className='box'>
                  <div className='quantity-selector'>
                    <p onClick={() => cantidadSubstract()}>-</p><p>{cantidad}</p><p onClick={() => cantidadAdd()}>+</p>
                  </div>
                  <div id='total'>| {cantidad * 3000}</div>

                </div>
              </div>
              <div className='delivery-info'>
                <div>
                  <img className='info-icons' src={truck} alt='' />
                  <h5>Costos de envio</h5>
                  <p>
                    Envío gratuito a partir de 25 euros.
                  </p>
                </div>
                <div>
                  <img className='info-icons' src={clock} alt='' />
                  <h5>Tiempos de entrega</h5>
                  <p>
                    1-2 Dias
                  </p>
                </div>
              </div>

              <p className='add-cart'><img src={cart} alt='' /> Agregar al carrito</p>
            </div>

          </div>
          <div id='details-description'>
            <h3>Descripcion</h3>
            {found.descripcion}
          </div>

          </>}
      <Slider slice={10} title='Relacionados' />
    </>

  )
}

export default Details
