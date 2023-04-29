import './preaAbout.css'
import img from '../../img/people.jpg'

function PreAbout () {
  return (
    <>
      <div className='main-about'>
        <img className='about-image' src={img} alt='' />

        <div className='about-us'>
          <h3>Trabajando por ti</h3>
          <p>
            <p className='bold-text'>   ¡Bienvenidos a nuestra tienda de ropa deportiva! Somos una incluyendo ropa deportiva para todas las edades y estilos de vida.</p>
            animi, tempore unde aliquam facere in sit quam aspernatur odit, eius exer
            <br />
            <p className='button-more'>Lee nuesta historia
            </p>
          </p>
        </div>

      </div>

    </>
  )
}

export default PreAbout
