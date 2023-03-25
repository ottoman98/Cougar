import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Carosuel from "../carousel/corousel";
import Gallery from "../gallery/gallery";
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
                <div className="main-details">

                    <Gallery imgs={data.imgUrls} className="main-details-item" />
                    <div className="main-details-item details-text">
                        <h2>{data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1)}</h2>
                        <i>{data.precio} $</i><br />

                        <i>Tallas</i>
                        <div id="tallas">

                            {data.tallas.map((x) => {
                                return (
                                    <React.Fragment key={x}>
                                        <div>{x}</div>

                                    </React.Fragment>);
                            })}
                        </div>

                        <p>Colores</p>
                        <div id="colores">

                            {data.colores.map((x) => {
                                return (
                                    <React.Fragment key={x}>
                                        <div>{x}</div>

                                    </React.Fragment>);
                            })}
                        </div>

                    </div>


                </div>
            </>
            : null}

        <Carosuel titulo="Completa  tu look" />


    </>);
}

export default Details;