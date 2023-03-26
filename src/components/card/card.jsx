import { Link } from "react-router-dom";
import numberSeparator from "../../utils/thousands_separator";
import './card.css';

function CardProduct({ data }) {




    return <>
        <Link to={`product/${data._id}`}>
            <div className='card-item' >
                {data.descuento > 0 ? <div className="discount"> -{data.descuento}%</div> : null}

                <img className="image-card" src={data.imgUrls[0]} alt="" />

                <div className='card-item-text'>
                    <h4>{data.nombre}</h4>

                    <i>{data.colores.length}  colores</i>

                    {data.descuento == 0 ?
                        <p className="antes-despues">

                            <span className="ahora-card">{numberSeparator(data.precio)} <span>$</span></span>

                        </p>
                        :
                        <p className="antes-ahora">

                            <span className="antes-card">{numberSeparator(data.precio)} <span>$</span></span>
                            <span className="ahora-card">{numberSeparator(data.precio * ((100 - data.descuento) / 100))} <span>$</span></span>

                        </p>
                    }



                </div>

            </div>
        </Link>

    </>;
}
export default CardProduct;