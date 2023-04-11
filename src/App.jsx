
import { Route, Routes, HashRouter } from 'react-router-dom'

// components
import NavBarMain from './components/navbar/navbar'
import Main from './components/main/main'
import Cards from './components/cards/cardsContainer'
import HighLighted from './components/highlighted/highlighted'

import Footer from './components/footer/footer'
import Details from './components/details/details'
import TextBar from './components/textbar/textbar'
import ProductForm from './components/productform/productform'

import './app.css'
import './normalize.css'
import PopularBrands from './components/popularbrands/popularBrands'
import PreAbout from './components/preabout/preaAbout'

// styles

function App () {
  return (
    <>
      <>
        <HashRouter>
          <TextBar />

          <NavBarMain />
          <div className='body'>

            <Routes>

              <Route
                index element={
                  <>

                    <Main />
                    <HighLighted />
                    <Cards />
                    <PopularBrands />
                    <PreAbout />

                  </>
                }
              />

              <Route
                path='/category/:categoria' element={
                  <>

                    <Cards categoria='Conjuntos dri fit' />

                  </>
                }
              />

              <Route
                path='category/:category/product/:id' element={
                  <>

                    <Details />

                  </>
              }
              />

              <Route
                path='/form' element={
                  <>

                    <ProductForm />

                  </>
}
              />

            </Routes>
          </div>

          <Footer />

        </HashRouter>
      </>

    </>
  )
}

export default App
