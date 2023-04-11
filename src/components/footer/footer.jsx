import React from 'react'
import './footer.css'
import img from '../../img/logo.png'
import instagram from '../../icons/instagram.svg'
import gitHub from '../../icons/github.svg'

export default function Footer () {
  return (
    <>
      <footer>
        <div className='footer'>
          <ul>
            <li id='brand-footer'>
              <img id='logo-footer' src={img} alt='' />
              <p>Cougar</p>
            </li>
            <li>
              ¡Adéntrate en el mundo de los Websocks y recibe promociones divertidas!
            </li>

            <li>
              <form action=''>

                <input type='email' />
                <button type='submit'>Suscribirse</button>
              </form>
            </li>

            <li>Teminos & condiciones</li>

          </ul>

          <ul>

            <li>Sobre nosotros</li>
            <li>Envío y devolución</li>
            <li>Términos y condiciones generales</li>
            <li>Política de privacidad</li>
            <li>PQRS</li>
          </ul>
          <ul>

            <li>Mi cuenta</li>
            <li>Blog</li>
            <li>Contacto</li>

            <li className='redes'>
              <img src={instagram} alt='' />
              <img src={gitHub} alt='' />
            </li>
          </ul>

        </div>

      </footer>
    </>
  )
}
