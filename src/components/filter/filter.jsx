import plus from '../../icons/signo-de-mas.png'
import React, { useState, useEffect } from 'react'
import './filter.css'

function Filter ({ data }) {
  const [tallas, setTallas] = useState(false)
  const [colores, setColores] = useState(false)
  const [precio, setPrecio] = useState(false)
  const [filter, setFilter] = useState(true)

  function hideTallas () {
    setTallas(!tallas)
  }
  function hideColores () {
    setColores(!colores)
  }
  function hidePrecio () {
    setPrecio(!precio)
  }
  function hideFilter () {
    setFilter(!filter)
  }

  useEffect(() => {
    if (window.innerWidth > 900) {
      setFilter(false)
    }
  }, [])

  const nonRepeatTallas = new Set()
  const nonRepeatColores = new Set()

  data.map((x) => x.tallas.map((y) => nonRepeatTallas.add(y)))
  data.map((x) => x.colores.map((y) => nonRepeatColores.add(y)))

  return (
    <div className='filter'>
      <h2 onClick={() => hideFilter()}>Filtro</h2>
      <div className='filter-items' hidden={filter}>

        <div className='tallas-filter'>
          <div className='title-filter' onClick={() => hideTallas()}>
            <h5>Tallas </h5>
            <img id='plus' src={plus} alt='' />
          </div>

          <ul hidden={tallas}>
            {[...nonRepeatTallas].map((x) => {
              return (
                <React.Fragment key={x}>
                  <li>
                    <input type='checkbox' id={x} value={x} />
                    <label htmlFor={x}>{x.toUpperCase()}</label>
                  </li>

                </React.Fragment>
              )
            })}
          </ul>

        </div>

        <div className='colores-filter'>
          <div className='title-filter' onClick={() => hideColores()}>

            <h5>Colores </h5>
            <img id='plus' src={plus} alt='' />
          </div>

          <ul hidden={colores}>
            {[...nonRepeatColores].map((x) => {
              return (
                <React.Fragment key={x}>
                  <li>

                    <input type='checkbox' id={x} value={x} />
                    <label htmlFor={x}>{x.charAt(0).toUpperCase() + x.slice(1)}</label>
                  </li>
                </React.Fragment>
              )
            })}

          </ul>
        </div>

        <div className='colores-filter'>
          <div className='title-filter' onClick={() => hidePrecio()}>

            <h5>Precio </h5>
            <img id='plus' src={plus} alt='' />
          </div>
          <div hidden={precio} className='precio-filter'>
            <input type='number' placeholder='Min' className='price-range' /> - <input placeholder='Max' className='price-range' type='number' />
          </div>

        </div>
        <p id='filter-button'>Filtrar</p>

      </div>

    </div>
  )
}

export default Filter
