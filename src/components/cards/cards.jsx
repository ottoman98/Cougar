import React from 'react'
import TopTemplate from '../topTemplate/topTemplate'
import './cards.css'
import Filter from '../filter/filter'
import useFetch from '../../hooks/useFetch'
import Card from './card'
import { useParams } from 'react-router-dom'

function Cards ({ title, button }) {
  const url = 'https://sport-elite-back.onrender.com/product/v1'
  const data = useFetch(url, 'GET')
  const { categoria } = useParams()

  let textFormatted
  if (categoria) {
    textFormatted =
      categoria.charAt(0).toUpperCase() +
      categoria.slice(1).replace(/-/g, ' ')
  } else {
    textFormatted = title
  }

  return (
    <>
      {!data
        ? 'Cargando..'
        : <div className='full-cards'>
          {categoria ? <Filter data={data} /> : null}

          <div id='cards-section'>
            <TopTemplate
              title={textFormatted}
              content={button}
            />
            <div id='cards-body'>

              <div className='cards-container'>
                {data
                  .map(x => {
                    return (
                      <React.Fragment key={x._id}>

                        <Card data={x} />
                      </React.Fragment>

                    )
                  })}

              </div>

            </div>

          </div>
        </div>}
    </>

  )
}

export default Cards
