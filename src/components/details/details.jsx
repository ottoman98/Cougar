import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Carosuel from "../carousel/corousel";
import Gallery from "../gallery/gallery";
import numberSeparator from "../../utils/thousands_separator";
import './details.css';

function Details() {
    const { id } = useParams();

    const url = 'https://sport-elite-back.onrender.com/product';
    const fetch = useFetch(url).data;

    let data;

    if (fetch) {
        data = fetch.find((x) => x._id === id);

    }




    return (<>
        {fetch ?
            <>
                <div id="main-product-page">

                    <div className="main-details">

                        <Gallery imgs={data.imgUrls} className="main-details-item" />
                        <div className="main-details-item ">

                            <div id="product-info">
                                <h2 className="name-product">{data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1)}</h2>


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





                                <h5 className="topic">Tallas</h5>
                                <div className="topic-container">

                                    {data.tallas.map((x) => {
                                        return (
                                            <React.Fragment key={x}>
                                                <div>{x.toUpperCase()}</div>

                                            </React.Fragment>);
                                    })}
                                </div>

                                <h5 className="topic">Colores</h5>
                                <div className="topic-container">

                                    {data.colores.map((x) => {
                                        return (
                                            <React.Fragment key={x}>
                                                <div>{x}</div>

                                            </React.Fragment>);
                                    })}
                                </div>

                            </div>
                            <div className="description-details">
                                <h3>Descripcion</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum, sed possimus cumque, minus ratione exercitationem amet magni, dolorem quaerat in ipsum explicabo doloribus eligendi qui facilis molestias alias magnam?
                                </p>
                            </div>


                        </div>


                    </div>
                    <Carosuel titulo="Completa  tu look" />
                </div>

            </>
            : null}




    </>);
}

export default Details;