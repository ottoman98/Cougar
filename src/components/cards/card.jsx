import React from 'react'
import { Link } from 'react-router-dom'

function Card ({ data }) {
  return (
    <div className='product-item'>
      <Link to={`/${data._id}`}>
        <img
          className='product-img'
          src={data.imgUrls[0]}
          alt=''
        />
      </Link>

      <div className='product-data'>
        <p className='nombre'>{data.nombre}</p>
        <p className='precio'>$ {data.precio}</p>
      </div>
      <div className='data-hide'>
        <div className='colores'>
          <div className='color'> </div>
          <div className='color'> </div>
          <div className='color'> </div>
          <div className='color'> </div>
        </div>
        <div className='tallas'>
          {data.tallas.map((x) => {
            return (
              <React.Fragment key={x}>
                <div className='talla'>{x}</div>
              </React.Fragment>

            )
          })}

        </div>
        <p className='add'>Agregar al carrito</p>
      </div>
    </div>

  )
}

export default Card
