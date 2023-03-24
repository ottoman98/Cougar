import './cards.css';
import useFetch from '../../hooks/useFetch.js';
import CardProduct from '../card/card';
import React from 'react';


function Cards(props) {
    const url = 'http://localhost:3000/product';

    const data = useFetch(url).data;

    return (
        <>
            <div>
                <h2>{props.categoria}</h2>


                <div className='cards' >


                    {!data ? <></> : data.map(x => {
                        return (

                            <React.Fragment key={x._id}>
                                <CardProduct data={x} />
                            </React.Fragment>



                        );
                    })}

                </div>


            </div>


        </>

    );
}

export default Cards;