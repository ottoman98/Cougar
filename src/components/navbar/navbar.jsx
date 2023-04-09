import { useState, useEffect } from 'react'

import logo from '../../img/logo.png'
import './navbar.css'
import downArrow from '../../icons/angle-small-down.png'
import shopCart from '../../icons/shopping-cart.png'
import menu from '../../icons/menu-burger.png'

function NavBarMain () {
  const [showBurguer, setShowBuguer] = useState(false)
  const [showDama, setShowDama] = useState(false)

  function hideShow () {
    setShowBuguer(!showBurguer)
    console.log(showBurguer)
  }
  function hideShowDama () {
    setShowBuguer(!showBurguer)
  }
  function hideShowCaballero () {
    setShowDama(!showDama)
  }

  console.log(window.innerWidth)
  useEffect(() => {
    if (!showBurguer) {
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

                Caballero

                <img className='down-arrow' src={downArrow} alt='' />
                <div className='dropdown-men'>

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

              <div id='woman-hover'>
                Dama
                <img className='down-arrow' src={downArrow} alt='' />

                <div className='dropdown-woman'>

                  <ul>
                    <li>lea</li>
                    <li>Pantalones</li>
                    <li>Blusas</li>
                    <li>Zapatos</li>
                    <li>Faldas</li>
                  </ul>
                  <ul>
                    <li>Chaquetas</li>
                    <li>Jeans</li>
                    <li>Sombreros</li>
                    <li>Botas</li>
                    <li>Bufandas</li>
                  </ul>
                  <ul>
                    <li>Camisetas</li>
                    <li>Leggings</li>
                    <li>Zapatillas</li>
                    <li>Cinturones</li>
                    <li>Pantalones</li>
                  </ul>

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
