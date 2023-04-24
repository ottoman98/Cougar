import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import TopTemplate from '../topTemplate/topTemplate'
import Filter from '../filter/filter'
import Card from './card'
import woman from '../../img/woman.jpg'
import men from '../../img/men.jpg'
import './cards.css'

function Cards ({ title, button }) {
  const url = 'https://sport-elite-back.onrender.com/product/v1'
  const data = useFetch(url, 'GET')
  const { categoria, gender } = useParams()
  const [more, setMore] = useState(12)
  const [hide, setHide] = useState(false)

  let textFormatted
  if (categoria) {
    textFormatted =
      categoria.charAt(0).toUpperCase() +
      categoria.slice(1).replace(/-/g, ' ')
  } else {
    textFormatted = title
  }
  let currentImg
  let currentText

  if (gender === 'hombre') {
    currentImg = men
    currentText = 'Hombres'
  }

  if (gender === 'mujer') {
    currentImg = woman
    currentText = 'Mujeres'
  }
  useEffect(() => {
    return () => {
      if (data && more >= data.length) {
        setHide(true)
      }
    }
  }, [more])
  let tra
  useEffect(() => {
    if (data) {
      if (tra.length <= more) {
        setHide(true)
      }
    }
  }, [data])

  if (data) {
    tra = data.filter((x) => x.genero === gender && x.categoria === categoria.replace(/-/g, ' '))
  }

  return (
    <>
      <div id='category-main'>
        <img src={currentImg} alt='' />
        <div>
          <h1 className='no-fill'>{currentText}</h1>
          <h1 id='main-genre'>{currentText}</h1>
          <h1 className='no-fill'>{currentText}</h1>
        </div>
      </div>
      {categoria && gender
        ? <div id='breadcrumb'>
          <Link to='/'>Home</Link> / <Link>{gender}</Link> / {categoria}
          </div>
        : null}

      {!data
        ? 'Cargando..'
        : <> <div className='full-cards'>
          {categoria ? <Filter data={tra} /> : null}

          <div id='cards-section'>
            <TopTemplate
              title={textFormatted}
              content={button}
            />
            <div id='cards-body'>

              <div className='cards-container'>
                {tra.slice(0, more).map(x => {
                  return (
                    <React.Fragment key={x._id}>

                      <Card data={x} />
                    </React.Fragment>

                  )
                })}

              </div>

            </div>

            <span id='showmore' hidden={hide} onClick={() => setMore(more + 12)}>MOSTRAR 12 MÁS</span>
          </div>
        </div>

        </>}
    </>

  )
}

export default Cards
