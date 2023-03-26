import { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


import logo from '../../img/logo.png';
import './navbar.css';

function NavBarMain() {
    const url = 'https://sport-elite-back.onrender.com/product';


    const data = useFetch(url).data;
    const [categories, setCategories] = useState([]);


    setInterval(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => console.log('sucess'))
            .catch((error) => console.error(error));
    }, 600000); // 10 minutos en milisegundos

    if (data) {
        data.map((x) => {

            categories.push(x.categoria);


        });
    }


    const dropDownRefMen = useRef(null);
    const dropDownRefWomen = useRef(null);


    const handleMenuMouseOut = () => {
        dropDownRefMen.current.setAttribute('hidden', true);

    };


    const handleMenuMouseOutWomen = () => {
        dropDownRefWomen.current.setAttribute('hidden', true);

    };

    const handleMenuMouseOver = () => {
        dropDownRefMen.current.removeAttribute('hidden');
        handleMenuMouseOutWomen();
    };

    const handleMenuMouseOverWomen = () => {
        dropDownRefWomen.current.removeAttribute('hidden');
        handleMenuMouseOut();

    };





    const expand = 'md';
    return (
        <>


            <Navbar key={expand} bg="light" expand={expand} className="mb-3" id="main-nav" >
                <Container fluid>
                    <Link to={'/'}>

                        <Navbar.Brand>
                            <img
                                alt="sportelite"
                                src={logo}
                                className="d-inline-block align-top "
                                id="logo"
                            />
                            <h2>SportElite</h2>

                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                            >
                                SportElite
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 tra">
                                <Nav.Link
                                    className="drop-link"
                                    onMouseOver={handleMenuMouseOver}
                                >
                                    Hombre
                                </Nav.Link>

                                <Nav.Link
                                    className="drop-link"
                                    onMouseOver={handleMenuMouseOverWomen}
                                >Mujer</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div
                className="drop-menu"
                hidden
                ref={dropDownRefMen}
                onMouseOver={handleMenuMouseOver}
                onMouseOut={handleMenuMouseOut}
            >
                <ul className="menu-list" onMouseOver={handleMenuMouseOver}>
                    <li><Link to="category/tshirts">T-shirts</Link></li>
                    <li><Link to="category/hoodies">Hoodies</Link></li>

                </ul>

                <ul className="menu-list" onMouseOver={handleMenuMouseOver}>
                    <li><Link to="category/dresses">Dresses</Link></li>
                    <li><Link to="category/skirts">Skirts</Link></li>

                </ul>

                <ul className="menu-list" onMouseOver={handleMenuMouseOver}>
                    <li><Link to="category/suits">Suits</Link></li>
                    <li><Link to="category/dress-shirts">Dress shirts</Link></li>

                </ul>
                <div className='all-products'>
                    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0aa19822-f6c9-47ee-8410-cf5e8657ea08/segunda-equipacion-liverpool-fc-tech-fleece-windrunner-sudadera-con-capucha-con-cremallera-completa-ccQSJ2.png" id='img-dropdown' alt="" />
                    <p>Todos los productos</p>
                </div>
            </div>
            <div
                className="drop-menu"
                hidden
                ref={dropDownRefWomen}
                onMouseOver={handleMenuMouseOverWomen}
                onMouseOut={handleMenuMouseOutWomen}
            >
                <ul className="menu-list" onMouseOver={() => { handleMenuMouseOverWomen; }} >
                    <li><Link to="/tshirts">asd</Link></li>
                    <li><Link to="/hoodies">Hoodies</Link></li>
                    <li><Link to="/sweaters">Sweaters</Link></li>

                </ul>

                <ul className="menu-list" onMouseOver={handleMenuMouseOverWomen}>
                    <li><Link to="/dresses">Dresses</Link></li>
                    <li><Link to="/skirts">Skirts</Link></li>

                </ul>

                <ul className="menu-list" onMouseOver={handleMenuMouseOver}>
                    <li><Link to="/suits">Suits</Link></li>
                    <li><Link to="/dress-shirts">Dress shirts</Link></li>
                    <li><Link to="/ties">Ties</Link></li>

                </ul>
                <Link>

                    <div className='all-products'>
                        <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7c5a1997-f5c4-409f-8b96-80b0576929d1/sportswear-everyday-modern-sudadera-con-capucha-de-tejido-fleece-h6Wqpc.png" id='img-dropdown' alt="" />
                        <p>Todos los productos</p>
                    </div>
                </Link>

            </div>


        </>
    );
}

export default NavBarMain;