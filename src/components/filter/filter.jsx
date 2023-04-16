import plus from '../../icons/signo-de-mas.png'
import { useState } from 'react'
import './filter.css'

function Filter () {
  const [tallas, setTallas] = useState(false)
  const [colores, setColores] = useState(false)
  const [precio, setPrecio] = useState(false)

  function hideTallas () {
    setTallas(!tallas)
  }
  function hideColores () {
    setColores(!colores)
  }
  function hidePrecio () {
    setPrecio(!precio)
  }

  return (
    <div className='filter'>
      <h2>Filtro</h2>

      <div className='tallas-filter'>
        <div className='title-filter' onClick={() => hideTallas()}>
          <h5>Tallas </h5>
          <img id='plus' src={plus} alt='' />
        </div>

        <ul hidden={tallas}>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </ul>

      </div>

      <div className='colores-filter'>
        <div className='title-filter' onClick={() => hideColores()}>

          <h5>Colores </h5>
          <img id='plus' src={plus} alt='' />
        </div>

        <ul hidden={colores}>
          <li>rojo</li>
          <li>vverde</li>
          <li>kaki</li>
          <li> escarlata</li>
        </ul>
      </div>

      <div className='colores-filter'>
        <div className='title-filter' onClick={() => hidePrecio()}>

          <h5>Precio </h5>
          <img id='plus' src={plus} alt='' />
        </div>
        <div hidden={precio}>
          <input type='number' placeholder='Min' className='price-range' /> - <input placeholder='Max' className='price-range' type='number' />
        </div>

      </div>
      <p id='filter-button'>Filtrar</p>
    </div>
  )
}

export default Filter
