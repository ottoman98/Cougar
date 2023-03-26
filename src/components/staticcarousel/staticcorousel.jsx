import './staticcarousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




function StaticCarosuel(props) {
    const responsive = {

        desktop: {
            breakpoint: { max: 9999, min: 1024 },
            items: 7,

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,


        }
    };


    return <>
        <h2>{props.titulo}</h2>
        <div className='carousel-section-static'>
            <Carousel responsive={responsive} className="carousel-static" removeArrowOnDeviceType={['mobile', 'tablet']}>


                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>
                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>
                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>
                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>
                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>
                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>

                <div className='c-item-static'>
                    <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/acdf9880-4839-4e5a-bd77-57ac1bb9f21f/image.jpg" alt="" />

                    <div className='categoria'>Camisetas</div>


                </div>





            </Carousel>

        </div>



    </>;
}

export default StaticCarosuel;