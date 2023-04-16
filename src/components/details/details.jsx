import { useState } from 'react'
import Gallery from '../gallery/gallery'
import './details.css'
import truck from '../../icons/truck-moving.png'
import clock from '../../icons/time-forward.png'
import cart from '../../icons/shopping-cart.png'
import Cards from '../cards/cards'

function Details () {
  const imgs = ['https://cdn.webshopapp.com/shops/277570/files/329026334/500x500x2/apollo-bio-katoenen-sneakersokken.jpg', 'https://cdn.webshopapp.com/shops/277570/files/329026325/500x500x2/apollo-bio-katoenen-sneakersokken.jpg']

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
      <div id='details'>

        <Gallery imgs={imgs} />

        <div className='info'>
          <h4>Apollo Bio katoenen sneakersokken</h4>
          <div className='item'>

            <h5 id='precio'>$ 3000</h5>

          </div>

          <div className='item'>
            <p className='topic'>Tallas:</p>
            <div className='tallas'>
              <p>S</p>
              <p>M</p>
              <p>L</p>
            </div>

          </div>
          <div className='item'>
            <p className='topic'>Colores:</p>
            <div>
              <p>S</p>
              <p>M</p>
              <p>L</p>
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
              <p>
                <h5>Costos de envio</h5>
                Envío gratuito a partir de 25 euros.
              </p>
            </div>
            <div>
              <img className='info-icons' src={clock} alt='' />
              <p>
                <h5>Tiempos de entrega</h5>
                1-2 Dias
              </p>
            </div>
          </div>

          <p className='add-cart'><img src={cart} alt='' /> Agregar al carrito</p>
        </div>

      </div>
      <div id='details-description'>
        <h3>Descripcion</h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores hic illo architecto, nobis, quas velit veniam voluptas veritatis earum amet temporibus perferendis doloremque illum esse voluptate, delectus magnam eaque numquam?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ab quas nobis, minima debitis, ratione architecto magnam, quam dolore laboriosam quaerat expedita. Animi, consectetur quae accusamus id eveniet ad fuga.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod temporibus obcaecati rem repudiandae, velit alias autem tempora facilis amet, placeat quam fugiat assumenda sequi minus consequuntur voluptates tenetur deleniti dicta.
      </div>
      <Cards />
    </>
  )
}

export default Details
