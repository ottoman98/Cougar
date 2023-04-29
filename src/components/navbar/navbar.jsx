import { useState, useEffect } from 'react'

import logo from '../../img/logo.png'
import './navbar.css'
import downArrow from '../../icons/angle-small-down.png'
import shopCart from '../../icons/shopping-cart.png'
import menu from '../../icons/menu-burger.png'
import { Link } from 'react-router-dom'

function NavBarMain () {
  const [showBurguer, setShowBuguer] = useState(false)
  const [showDama, setShowDama] = useState(false)
  const [showHombre, setShowHombre] = useState(false)

  function hideShow () {
    setShowBuguer(!showBurguer)
  }
  function hideShowDama () {
    setShowDama(!showDama)
    setShowHombre(true)
  }
  function hideShowHombre () {
    setShowHombre(!showHombre)
    setShowDama(true)
  }

  useEffect(() => {
    if (!showBurguer && window.innerWidth < 500) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [showBurguer])

  useEffect(() => {
    if (window.innerWidth < 500) {
      setShowBuguer(true)
    }
  }, [])

  return (
    <>
      <nav id='navbar'>

        <div className='handicap' />

        <div id='resolution-left-continer'>
          <img
            id='menu-burguer' onClick={() => hideShow()} className='navbar-icon' src={menu} alt=''
          />

          <div id='opacity-background' hidden={showBurguer}>
            <div id='left-nav'>

              <div id='men-hover'>
                <div onClick={() => hideShowHombre()} className='text-hover'>

                  Caballero

                </div>

                <div className='dropdown-men' hidden={showHombre}>

                  <div className='dropdown-half'>
                    <p className='dropdown-title'> <Link>Caballeros</Link> </p>
                    <div />

                    <div className='list-nav'>

                      <ul>

                        <li><Link to='/hombre/zapatos'>Zapatos</Link></li>
                        <li><Link to='/hombre/pantalones'>Pantalones</Link></li>
                        <li><Link to='/hombre/sudaderas'>Sudaderas</Link></li>

                      </ul>
                      <ul>

                        <li><Link to='/hombre/camisetas'>Camisetas</Link></li>
                        <li><Link to='/hombre/shorts'>Shorts</Link></li>
                        <li><Link to='/hombre/camisillas'>Camisillas</Link></li>

                      </ul>
                      <ul>

                        <li><Link to='/hombre/mochilas'>Mochilas</Link></li>
                        <li><Link to='/hombre/gorros-y-gorras'>Gorros y Gorras</Link></li>
                        <li><Link to='/hombre/balones'>Balones</Link></li>
                        <li><Link to='/hombre/gafas'>Gafas</Link></li>
                        <li><Link to='/hombre/cinturones'>Cinturones</Link></li>

                      </ul>

                    </div>
                  </div>

                </div>

              </div>

              <div id='woman-hover'>
                <div onClick={() => { hideShowDama() }} className='text-hover'>
                  Dama

                </div>

                <div className='dropdown-woman' hidden={showDama}>

                  <div className='dropdown-half'>
                    <p className='dropdown-title'>
                      <Link>Damas</Link>

                    </p>
                    <div />

                    <div className='list-nav'>

                      <ul>
                        <li>
                          <Link to='/mujer/zapatos'>Zapatos</Link>
                        </li>
                        <li>
                          <Link to='/mujer/tops'>Tops</Link>
                        </li>
                        <li>
                          <Link to='/mujer/sudaderas'>Sudaderas</Link>
                        </li>

                      </ul>
                      <ul>

                        <li>
                          <Link to='/mujer/camisetas'>Camisetas</Link>
                        </li>

                        <li>
                          <Link to='/mujer/vestidos-y-faldas'>Vestidos y faldas</Link>
                        </li>

                        <li>
                          <Link to='/mujer/shorts'>shorts</Link>
                        </li>
                        <li><Link to='/mujer/leggings'>Leggings</Link></li>

                      </ul>
                      <ul>

                        <li>
                          <Link to='/mujer/mochilas'>Mochilas</Link>
                        </li>
                        <li>
                          <Link to='/mujer/bolsas-y-bolsos'>Bolsas Y Bolsos</Link>
                        </li>
                        <li>
                          <Link to='/mujer/chaquetas'>Chaquetas</Link>
                        </li>

                        <li>
                          <Link to='/mujer/sombreros'>Sombreros</Link>
                        </li>

                      </ul>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div id='center-nav'>
          <Link to='/'>
            <img id='logo-navbar' src={logo} alt='' />
          </Link>

        </div>

        <img id='shop-cart' className='navbar-icon' src={shopCart} alt='' />

      </nav>

    </>

  )
}

export default NavBarMain
