import './popularBrands.css'
import TopTemplate from '../topTemplate/topTemplate'
import puma from '../../img/puma-logo-png-1243.png'
import adidas from '../../img/adidas.png'
import levis from '../../img/levis.png'
function PopularBrands () {
  return (
    <>
      <div id='main-popular'>

        <TopTemplate title='Marcas destacadas' content='Ver todas las marcas' />
        <div className='brand-container'>

          <div className='brand-div'>
            <img className='back-image' src='https://cdn.webshopapp.com/shops/277570/themes/177681/v/838678/assets/brand-1-bg.png?20210826194738' alt='' />
            <img src={puma} alt='' className='brand-over' />

          </div>
          <div className='brand-div'>
            <img className='back-image' src='https://cdn.webshopapp.com/shops/277570/themes/177681/v/838678/assets/brand-3-bg.png?20210826194738' alt='' />
            <img src={adidas} alt='' className='brand-over' />
          </div>
          <div className='brand-div'>
            <img className='back-image' src='https://cdn.webshopapp.com/shops/277570/themes/177681/v/838678/assets/brand-2-bg.png?20210826194738' alt='' />
            <img src={levis} alt='' className='brand-over' />

          </div>
          <div className='brand-div'>
            <img className='back-image' src='https://cdn.webshopapp.com/shops/277570/themes/177681/v/838678/assets/brand-2-bg.png?20210826194738' alt='' />
            <img src={levis} alt='' className='brand-over' />

          </div>
        </div>

      </div>

    </>
  )
}

export default PopularBrands
