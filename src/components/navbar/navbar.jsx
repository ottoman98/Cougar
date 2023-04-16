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
                <div onClick={() => hideShowHombre()}>

                  Caballero

                  <img className='down-arrow' src={downArrow} alt='' />
                </div>

                <div className='dropdown-men' hidden={showHombre}>

                  <div className='dropdown-half'>
                    <p className='dropdown-title'> <Link>Po,pósas pintas</Link> </p>
                    <div />

                    <div className='list-nav'>
                      <ul>
                        <li><Link to='/category/caballero'>Caballero</Link></li>
                        <li><Link to='/category/pantalones'>Pantalones</Link></li>
                        <li><Link to='/category/chaquetas'>Chaquetas</Link></li>
                        <li><Link to='/category/zapatos'>Zapatos</Link></li>
                        <li><Link to='/category/sudaderas'>Sudaderas</Link></li>
                      </ul>
                      <ul>
                        <li><Link to='/category/camisetas'>Camisetas</Link></li>
                        <li><Link to='/category/vaqueros'>Vaqueros</Link></li>
                        <li><Link to='/category/abrigos'>Abrigos</Link></li>
                        <li><Link to='/category/zapatillas'>Zapatillas</Link></li>
                        <li><Link to='/category/chalecos'>Chalecos</Link></li>
                      </ul>
                      <ul>
                        <li><Link to='/category/polos'>Polos</Link></li>
                        <li><Link to='/category/bermudas'>Bermudas</Link></li>
                        <li><Link to='/category/chaqueta-de-cuero'>Chaqueta de cuero</Link></li>
                        <li><Link to='/category/botas'>Botas</Link></li>
                        <li><Link to='/category/sombreros'>Sombreros</Link></li>
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
                        <li><Link to='/category/caballero'>Caballero</Link></li>
                        <li><Link to='/category/pantalones'>Pantalones</Link></li>
                        <li><Link to='/category/chaquetas'>Chaquetas</Link></li>
                        <li><Link to='/category/zapatos'>Zapatos</Link></li>
                        <li><Link to='/category/sudaderas'>Sudaderas</Link></li>
                      </ul>
                      <ul>
                        <li><Link to='/category/camisetas'>Camisetas</Link></li>
                        <li><Link to='/category/vaqueros'>Vaqueros</Link></li>
                        <li><Link to='/category/abrigos'>Abrigos</Link></li>
                        <li><Link to='/category/zapatillas'>Zapatillas</Link></li>
                        <li><Link to='/category/chalecos'>Chalecos</Link></li>
                      </ul>
                      <ul>
                        <li><Link to='/category/polos'>Polos</Link></li>
                        <li><Link to='/category/bermudas'>Bermudas</Link></li>
                        <li><Link to='/category/chaqueta-de-cuero'>Chaqueta de cuero</Link></li>
                        <li><Link to='/category/botas'>Botas</Link></li>
                        <li><Link to='/category/sombreros'>Sombreros</Link></li>
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
