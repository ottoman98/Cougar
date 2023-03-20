import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBarMain from "./components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainVideo from "./components/mainvideo/mainvideo";
import Cards from "./components/cards/cards";
import './app.css';
import Carosuel from "./components/carousel/corousel";
import Footer from "./components/footer/footer";
import Details from "./components/details/details";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";







function App() {


  return (
    <>
      <>


        <BrowserRouter>
          <NavBarMain />

          <div className='body'>
            <Routes>

              <Route path='/' element={<>
                <MainVideo />
                <Carosuel titulo="Destacado" />
                <Carosuel titulo="Mas vendidos" />




              </>} />
              <Route path="/2" element={
                <>

                  <Cards categoria='Buzos' />

                </>} />
              <Route path="/d" element={
                <>
                  <Details />

                </>
              } />



            </Routes>
          </div>



          <Footer />
        </BrowserRouter>


      </>


    </>
  );
}

export default App;
