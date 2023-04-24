import './main.css'

import shoes from '../../img/shoes.jpg'

function Main () {
  return (
    <>
      <div id='split'>

        <div className='splited-half-1'>
          <div className='split-x' />
          <div className='lines' />

          <div className='main-text'>

            <p id='high-text'>El mundo del deporte a tus manos</p>
            <p id='low-text'>Que bendicion muchachos</p>

            <div className='all-catalog'> Descubre mas</div>

          </div>

        </div>
        <div className='splited-half-2'>
          <img src={shoes} alt='' />
        </div>

      </div>

    </>
  )
}

export default Main
