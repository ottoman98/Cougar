import './guaranty.css'
import reservado from '../../icons/reservado.png'
import entrega from '../../icons/truck-moving.png'
import paquete from '../../icons/package.png'
import wallet from '../../icons/wallet-1.png'
import devolucion from '../../icons/devoluciones.png'
import garantia from '../../icons/proteccion.png'

function Guaranty () {
  return (
    <>
      <div className='guaranty'>
        <div className='g-item'>
          <img src={reservado} alt='' />
          <h6>Productos en RESERVA</h6>
          <p> El tiempo de entrega de los productos en reserva es de 12-15 días hábiles.</p>
        </div>

        <div className='g-item'>
          <img src={entrega} alt='' />
          <h6>Tiempo de Entrega</h6>
          <p>de 2 - 3 días hábiles
            (Barranquilla entrega mismo día)
          </p>
        </div>

        <div className='g-item'>
          <img src={paquete} alt='' />
          <h6>Cubrimiento a Nivel Nacional</h6>
          <p>Hacemos envíos a todas la ciudades del País.</p>
        </div>

        <div className='g-item'>
          <img src={wallet} alt='' />
          <h6>Cougar Sin Miedo</h6>
          <p>Aceptamos cambios y devoluciones. *Aplican T&C</p>
        </div>

        <div className='g-item'>
          <img src={devolucion} alt='' />
          <h6>Cambios y Devoluciones</h6>
          <p>30 días Calendario (es muy importante que las prendas conserven sus etiquetas puestas y estén en perfecto estado.)</p>
        </div>

        <div className='g-item'>
          <img src={garantia} alt='' />
          <h6>Garantía
            de Productos
          </h6>
          <p>Todos nuestro productos tienen garantía 60 días Calendario. Aplican T&C*</p>
        </div>

      </div>

    </>
  )
}

export default Guaranty
