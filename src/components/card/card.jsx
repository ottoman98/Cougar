import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function CardProduct({ data }) {



    return <>
        <Link to={`product/${data._id}`}>
            <div className='card-item' >
                <img src={data.imgUrls[0]} alt="" />

                <div className='card-item-text'>
                    <h4>{data.nombre}</h4>
                    <i>{data.colores.length}  colores</i>
                    <p>{data.precio}$</p>

                </div>
            </div>
        </Link>

    </>;
}
export default CardProduct;