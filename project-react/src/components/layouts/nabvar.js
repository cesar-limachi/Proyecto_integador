import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './img/logo1.png'
import Nabvar from './Navbar.css'
import Fondo from './img/Sel.jpg'

function Navegacion() {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='nav-fondo'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="No carga" width='50px' height='50px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className='links'> Hotel Familiar </Nav.Link>
                            <Nav.Link href="#" className='links'> Hotel Spa </Nav.Link>
                            <Nav.Link href="#" className='links'> Hotel Campo </Nav.Link>
                            <Nav.Link href="#" className='links'> Hotel Resort </Nav.Link>
                            <Nav.Link href="#" className='links'> Hotel Playa </Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link href="/login" className='links'>Iniciar Sesion</Nav.Link>
                        <Nav.Link href="/register" className='links links-register'>Registrarse</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Navegacion;