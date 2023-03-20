import './gallery.css';
import { useState } from 'react';
import arrow from '../../img/arrow.png';
function Gallery() {
    const imageSources = [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e96e62ed-e87d-4927-8dc7-b1bbb25ee10b/dri-fit-get-fit-sudadera-de-entrenamiento-bwMkQv.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/481889f8-7f20-43fb-946b-15c6902560e4/dri-fit-get-fit-sudadera-de-entrenamiento-bwMkQv.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67e46777-e545-4c20-b17b-0011e11e84dc/dri-fit-get-fit-sudadera-de-entrenamiento-bwMkQv.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f0a8426-f362-40c5-9b50-2f492fa3c76d/dri-fit-get-fit-sudadera-de-entrenamiento-bwMkQv.png",
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const increase = () => {
        selectedIndex + 1 == imageSources.length ? setSelectedIndex(0) : setSelectedIndex(selectedIndex + 1);
    };
    const decrease = () => {
        selectedIndex == 0 ? setSelectedIndex(imageSources.length - 1) : setSelectedIndex(selectedIndex - 1);
    };



    return (
        <>
            <div className="main-gallery">
                <div className="gallery-images">
                    {imageSources.map((x) => {
                        return (
                            <img key={imageSources.indexOf(x)}
                                src={x}
                                alt=""
                                className="gallery-images"
                                onMouseEnter={() => setSelectedIndex(imageSources.indexOf(x))}
                            />
                        );
                    })}
                </div>
                <div className='main-image-container'>
                    <img
                        className="main-image-gallery"
                        src={imageSources[selectedIndex]}
                        alt=""
                    />
                    <div className='arrows-container'>
                        <img src={arrow} className='arrow-left' alt="" onClick={increase} />
                        <img src={arrow} className='arrow-right' alt="" onClick={decrease} />
                    </div>



                </div>

            </div>
        </>
    );
}

export default Gallery; 