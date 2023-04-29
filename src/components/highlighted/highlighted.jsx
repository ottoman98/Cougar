import './highlighted.css'
import tenis from '../../img/tenis.png'
import futbol from '../../img/futbol.png'
import running from '../../img/running.png'
import baloncesto from '../../img/basket.png'

function HighLighted () {
  return (
    <div id='main-high'>
      <div id='heart'> </div>
      <div id='full-screen'>

        <div className='bottom'>

          <div className='img-div'>

            <img className='img-high first-img' src={futbol} alt='' />
            <p>Futbol</p>

          </div>
          <div className='img-div'>

            <img className='img-high first-img' src={tenis} alt='' />
            <p>Tenis</p>

          </div>

          <div className='img-div'>

            <img className='img-high first-img' src={baloncesto} alt='' />
            <p>Baloncesto</p>

          </div>

          <div className='img-div'>

            <img className='img-high first-img' src={running} alt='' />
            <p>Running</p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default HighLighted
