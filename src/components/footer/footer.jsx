import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

import './footer.css';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white footer t' >
            <MDBContainer className='pt-4'>
                <section className='mb-4'>
                    <p>Siguenos en:</p>


                    <MDBIcon fab className='fa-instagram icon' />


                    <Link><MDBIcon fab className='fa-github icon' /></Link>




                </section>
            </MDBContainer>

            <div className='text-center text-dark p-3 lower-footer' >
                <p>© 2023 Copyright: SportElite</p>
                <Link><p>Developed by: ottoman98</p></Link>



            </div>
        </MDBFooter>
    );
}