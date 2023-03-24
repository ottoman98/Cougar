import './gallery.css';
import { useState, useRef } from 'react';
import arrow from '../../img/arrow.png';
function Gallery({ imgs }) {

    const imageSources = imgs;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const collection = useRef(null);


    if (imgs.length == 1) {
        if (collection.current)
            collection.current.hidden = true;



    }


    const increase = () => {
        selectedIndex + 1 == imageSources.length ? setSelectedIndex(0) : setSelectedIndex(selectedIndex + 1);
    };
    const decrease = () => {
        selectedIndex == 0 ? setSelectedIndex(imageSources.length - 1) : setSelectedIndex(selectedIndex - 1);
    };



    return (
        <>
            <div className="main-gallery">
                <div className="gallery-images" >

                    {imgs.length == 1 ? null : imageSources.map((x) => {
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

                    <div className='arrows-container' ref={collection}>
                        <img src={arrow} className='arrow-left' alt="" onClick={increase} />
                        <img src={arrow} className='arrow-right' alt="" onClick={decrease} />
                    </div>



                </div>

            </div>
        </>
    );
}

export default Gallery; 