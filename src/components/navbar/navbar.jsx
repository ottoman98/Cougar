import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


import logo from '../../img/logo.png';
import './navbar.css';

function NavBarMain() {
    const dropDownRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMenuMouseOver = () => {
        dropDownRef.current.removeAttribute('hidden');
        clearTimeout(timeoutRef.current);
    };

    const handleMenuMouseOut = () => {
        timeoutRef.current = setTimeout(() => {
            dropDownRef.current.setAttribute('hidden', true);
        }, 0);
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
                                <Nav.Link className="drop-link" onMouseOver={handleMenuMouseOut}>Mujer</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div
                className="drop-menu"
                hidden
                ref={dropDownRef}
                onMouseOver={handleMenuMouseOver}
                onMouseOut={handleMenuMouseOut}
            >
                <ul className="menu-list" onMouseOver={handleMenuMouseOver}>
                    <li><Link to="/tshirts">T-shirts</Link></li>
                    <li><Link to="/hoodies">Hoodies</Link></li>
                    <li><Link to="/sweaters">Sweaters</Link></li>
                    <li><Link to="/jackets">Jackets</Link></li>
                    <li><Link to="/jeans">Jeans</Link></li>
                    <li><Link to="/pants">Pants</Link></li>
                </ul>

                <ul className="menu-list" onMouseOver={handleMenuMouseOver}>
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