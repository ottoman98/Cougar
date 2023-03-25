import { useRef, useState, useEffect } from 'react';
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
    const [test, setTest] = useState();

    const data = useFetch(url).data;
    const [categories, setCategories] = useState([]);





    setInterval(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data))
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


            <Navbar key={expand} bg="light" expand={expand} className="mb-3" id="k" >
                <Container fluid>
                    <Link to={'/'}>

                        <Navbar.Brand>
                            <img
                                alt="sportelite"
                                src={logo}
                                className="d-inline-block align-top "
                                id="logo"
                            />
                            SportElite
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
                    <li><Link to="/jackets">Jackets</Link></li>
                    <li><Link to="/jeans">Jeans</Link></li>
                    <li><Link to="/pants">Pants</Link></li>
                </ul>

                <ul className="menu-list" onMouseOver={handleMenuMouseOverWomen}>
                    <li><Link to="/dresses">Dresses</Link></li>
                    <li><Link to="/skirts">Skirts</Link></li>
                    <li><Link to="/tops">Tops</Link></li>
                    <li><Link to="/blouses">Blouses</Link></li>
                    <li><Link to="/pants">Pants</Link></li>
                    <li><Link to="/jeans">Jeans</Link></li>
                </ul>

                <ul className="menu-list" onMouseOver={handleMenuMouseOver}>
                    <li><Link to="/suits">Suits</Link></li>
                    <li><Link to="/dress-shirts">Dress shirts</Link></li>
                    <li><Link to="/ties">Ties</Link></li>
                    <li><Link to="/dress-pants">Dress pants</Link></li>
                    <li><Link to="/jackets">Jackets</Link></li>
                    <li><Link to="/blazers">Blazers</Link></li>
                </ul>
            </div>


        </>
    );
}

export default NavBarMain;