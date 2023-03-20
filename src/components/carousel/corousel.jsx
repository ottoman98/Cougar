import './carousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




function Carosuel(props) {
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return <>
        <h2>{props.titulo}</h2>
        <div>
            <Carousel responsive={responsive} className="carousel">
                <div className='c-item'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />
                </div>
                <div className='c-item'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />
                </div>
                <div className='c-item'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />
                </div>
                <div className='c-item'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />
                </div>
                <div className='c-item'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />
                </div>

            </Carousel>

        </div>



    </>;
}

export default Carosuel;