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

      <div className='colores'>
        {data.colores.map((x) => {
          return (
            <React.Fragment key={x}>
              <div className='color' style={{ backgroundColor: x }}> </div>

            </React.Fragment>
          )
        })}

      </div>

    </div>

  )
}

export default Card
