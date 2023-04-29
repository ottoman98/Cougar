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
          <h6>Productos en RESERVA</h6>
          <p> El tiempo de entrega de los productos en reserva es de 12-15 días hábiles.</p>
        </div>
        <div className='g-item'>
          <img src={paquete} alt='' />
          <h6>Productos en RESERVA</h6>
          <p> El tiempo de entrega de los productos en reserva es de 12-15 días hábiles.</p>
        </div>
        <div className='g-item'>
          <img src={wallet} alt='' />
          <h6>Productos en RESERVA</h6>
          <p> El tiempo de entrega de los productos en reserva es de 12-15 días hábiles.</p>
        </div>
        <div className='g-item'>
          <img src={devolucion} alt='' />
          <h6>Productos en RESERVA</h6>
          <p> El tiempo de entrega de los productos en reserva es de 12-15 días hábiles.</p>
        </div>
        <div className='g-item'>
          <img src={garantia} alt='' />
          <h6>Productos en RESERVA</h6>
          <p> El tiempo de entrega de los productos en reserva es de 12-15 días hábiles.</p>
        </div>

      </div>

    </>
  )
}

export default Guaranty
