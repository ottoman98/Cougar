import './highlighted.css'
import img from '../../img/sunset.jpg'

function HighLighted () {
  return (
    <div id='main-high'>
      <div id='heart'> </div>
      <div id='full-screen'>
        <div className='top'>

          <div className='img-div first-img-1'>

            <img className='img-high' src='https://cdn.webshopapp.com/shops/277570/files/365354292/image.jpg' alt='' />
            <p>Camisetas</p>

          </div>

          <div className='img-div first-img-2'>

            <img
              className='img-high' src='
              https://cdn.webshopapp.com/shops/277570/files/347910875/image.jpg' alt=''
            />
            <p>Camisetas</p>

          </div>
        </div>
        <div className='bottom'>

          <div className='img-div'>

            <img className='img-high first-img' src={img} alt='' />
            <p>Camisetas</p>

          </div>
          <div className='img-div'>

            <img className='img-high first-img' src={img} alt='' />
            <p>Camisetas</p>

          </div>

          <div className='img-div'>

            <img className='img-high first-img' src={img} alt='' />
            <p>Camisetas</p>

          </div>

          <div className='img-div'>

            <img className='img-high first-img' src={img} alt='' />
            <p>Camisetas</p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default HighLighted
