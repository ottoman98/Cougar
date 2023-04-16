
import { Link, useParams } from 'react-router-dom'
import TopTemplate from '../topTemplate/topTemplate'
import './cards.css'
import Filter from '../filter/filter'

function Cards () {
  const { categoria } = useParams()

  let textFormatted
  if (categoria) {
    textFormatted =
      categoria.charAt(0).toLocaleUpperCase() +
      categoria.slice(1).replace(/-/g, ' ')
  }

  return (
    <div className='full-cards'>
      {categoria ? <Filter /> : null}

      <div id='cards-section'>
        <TopTemplate
          title={textFormatted}

        />
        <div id='cards-body'>

          <div className='cards-container'>
            <div className='product-item'>
              <Link to={`/${categoria}/22`}>
                <img
                  className='product-img'
                  src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                  alt=''
                />
              </Link>

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
                <p className='add'>Agregar al carrito</p>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>

            <div className='product-item'>
              <img
                className='product-img'
                src='https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e548ca32c7447daaf77afcd014ba31b_9366/Camiseta_Visitante_Seleccion_Colombia_Femenina_23_Multicolor_HS7544_01_laydown.jpg'
                alt=''
              />

              <div className='product-data'>
                <p id='product-brand'>adedos</p>
                <p>Camisea colombia</p>
                <p>100.000$</p>
              </div>
              <div className='data-hide'>
                <div className='colores'>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                  <div className='color'> </div>
                </div>
                <div className='tallas'>
                  <div className='talla'> S</div>
                  <div className='talla'> M</div>
                  <div className='talla'> L</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Cards
