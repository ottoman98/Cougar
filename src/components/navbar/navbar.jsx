import { useState, useEffect } from 'react'

import logo from '../../img/logo.png'
import './navbar.css'
import downArrow from '../../icons/angle-small-down.png'
import shopCart from '../../icons/shopping-cart.png'
import menu from '../../icons/menu-burger.png'

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
      setShowDama(true)
      setShowHombre(true)
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
                <div onClick={() => hideShowHombre()}>
                  Caballero

                  <img className='down-arrow' src={downArrow} alt='' />
                </div>

                <div className='dropdown-men' hidden={showHombre}>

                  <div className='dropdown-half'>
                    <p className='dropdown-title'>Po,pósas pintas</p>
                    <div />

                    <div className='list-nav'>

                      <ul>
                        <li>caballero</li>
                        <li>Pantalones</li>
                        <li>Chaquetas</li>
                        <li>Zapatos</li>
                        <li>Sudaderas</li>
                      </ul>
                      <ul>
                        <li>Camisetas</li>
                        <li>Vaqueros</li>
                        <li>Abrigos</li>
                        <li>Zapatillas</li>
                        <li>Chalecos</li>
                      </ul>
                      <ul>
                        <li>Polos</li>
                        <li>Bermudas</li>
                        <li>Chaqueta de cuero</li>
                        <li>Botas</li>
                        <li>Sombreros</li>
                      </ul>

                    </div>
                  </div>

                </div>

              </div>

              <div id='woman-hover'>
                <div onClick={() => { hideShowDama() }}>
                  Dama
                  <img className='down-arrow' src={downArrow} alt='' />
                </div>

                <div className='dropdown-woman' hidden={showDama}>

                  <div className='dropdown-half'>
                    <p className='dropdown-title'>
                      Po,pósas pintas opero de lea
                    </p>
                    <div />

                    <div className='list-nav'>

                      <ul>
                        <li>caballero</li>
                        <li>Pantalones</li>
                        <li>Chaquetas</li>
                        <li>Zapatos</li>
                        <li>Sudaderas</li>
                      </ul>
                      <ul>
                        <li>Camisetas</li>
                        <li>Vaqueros</li>
                        <li>Abrigos</li>
                        <li>Zapatillas</li>
                        <li>Chalecos</li>
                      </ul>
                      <ul>
                        <li>Polos</li>
                        <li>Bermudas</li>
                        <li>Chaqueta de cuero</li>
                        <li>Botas</li>
                        <li>Sombreros</li>
                      </ul>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div id='center-nav'>
          <img id='logo-navbar' src={logo} alt='' />

        </div>

        <img id='shop-cart' className='navbar-icon' src={shopCart} alt='' />

      </nav>

    </>

  )
}

export default NavBarMain
