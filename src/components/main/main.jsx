import './main.css'
import image from '../../img/sunset.jpg'

function Main () {
  return (
    <>
      <div id='split'>

        <div className='splited-half-1'>
          <div className='split-x' />
          <div className='lines' />

          <img className='img-title' src='https://cdn.webshopapp.com/shops/277570/themes/177681/v/838625/assets/hero_image_left.jpg?20210826194049' alt='' />

          <div className='main-text'>

            <p id='high-text'>El mundo del deporte a tus manos</p>
            <p id='low-text'>Que bendicion muchachos</p>

            <div className='all-catalog'> Descubre mas</div>

          </div>

        </div>
        <div className='splited-half-2'>
          <img src={image} alt='' />
        </div>

      </div>

    </>
  )
}

export default Main
