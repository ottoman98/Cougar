import { Route, Routes, HashRouter } from 'react-router-dom'

// components
import NavBarMain from './components/navbar/navbar'
import Main from './components/main/main'
import Cards from './components/cards/cards'
import HighLighted from './components/highlighted/highlighted'
import Footer from './components/footer/footer'
import PopularBrands from './components/popularbrands/popularBrands'
import Details from './components/details/details'
import TextBar from './components/textbar/textbar'
import Slider from './components/carousel/carousel'

// styles
import './app.css'
import './normalize.css'
import Guaranty from './components/guaranty/guaranty'

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

                    <Slider />
                    <HighLighted />
                    <Guaranty />
                    <PopularBrands />
                    <Cards title='Lo Mas Vendido' />

                  </>
                }
              />

              <Route
                path='/:gender/:categoria' element={
                  <Cards />
                }
              />

              <Route
                path='/:id' element={
                  <>
                    <Details />
                  </>
              }
              />

              <Route
                path='/form' element={

                  <Footer />

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
