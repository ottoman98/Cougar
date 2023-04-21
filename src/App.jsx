
import { Route, Routes, HashRouter } from 'react-router-dom'

// components
import NavBarMain from './components/navbar/navbar'
import Main from './components/main/main'
import Cards from './components/cards/cards'
import HighLighted from './components/highlighted/highlighted'

import Footer from './components/footer/footer'

import TextBar from './components/textbar/textbar'

import './app.css'
import './normalize.css'
import PopularBrands from './components/popularbrands/popularBrands'
import PreAbout from './components/preabout/preaAbout'
import Details from './components/details/details'

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
                    <Cards title='Destacados' />
                    <PopularBrands />
                    <PreAbout />

                  </>
                }
              />

              <Route
                path='/category/:categoria' element={
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
