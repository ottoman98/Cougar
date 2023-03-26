
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";


//components
import NavBarMain from "./components/navbar/navbar";
import MainVideo from "./components/mainvideo/mainvideo";
import Cards from "./components/cards/cardsContainer";
import Lema from "./components/lema/lema";
import Carosuel from "./components/carousel/corousel";
import Footer from "./components/footer/footer";
import Details from "./components/details/details";
import TextBar from "./components/textbar/textbar";
import ProductForm from "./components/productform/productform";
import StaticCarosuel from "./components/staticcarousel/staticcorousel";



//styles
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";








function App() {

  return (
    <>
      <>
        <HashRouter >
          <TextBar />

          <NavBarMain />
          <div className='body'>

            <Routes>

              <Route index element={<>

                <MainVideo />
                <Lema />
                <Carosuel titulo="Destacado" />
                <Carosuel titulo="Mas vendidos" />
                <StaticCarosuel titulo='Categorias' />

              </>} />

              <Route path="/category/:categoria" element={
                <>

                  <Cards categoria='Conjuntos dri fit' />

                </>} />

              <Route path="category/:category/product/:id" element={
                <>

                  <Details />

                </>
              } />

              <Route path="/form" element={
                <>

                  <ProductForm />

                </>} />

            </Routes>
          </div>



          <Footer />



        </HashRouter>
      </>


    </>
  );
}

export default App;;
