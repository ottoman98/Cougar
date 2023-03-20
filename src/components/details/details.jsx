import Carosuel from "../carousel/corousel";
import Gallery from "../gallery/gallery";
import './details.css';

function Details() {
    return (<>
        <div className="main-details">
            <Gallery className="main-details-item" />
            <div className="main-details-item details-text">
                <h2>Nike Dri-FIT Get Fit</h2>
                <i>30,000 $</i><br />

                <i>Tallas</i>
                <p>Colores</p>
                <ul>
                    <li>Rapé</li>
                    <li>Kaki</li>
                    <li>Mostaza</li>
                    <li>Mango biche</li>
                </ul>
            </div>


        </div>
        <Carosuel titulo="Completa  tu look" />


    </>);
}

export default Details;