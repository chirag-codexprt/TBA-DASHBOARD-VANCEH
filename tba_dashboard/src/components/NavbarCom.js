import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavbarCom = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='nav px-3'>
                    <Navbar.Brand href="#home" className='ps-0'><img src='/assets/img/TBA-C.png'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto'>
                                <InputGroup className="mt-2 rounded-2 border-0 nav-search">
                                    <InputGroup.Text id="basic-addon1" className='text-white border-0 nav-search'><i class="bi bi-search"></i></InputGroup.Text>
                                    <Form.Control placeholder="Username" className='text-white border-0 ps-0 nav-search' aria-describedby="basic-addon1" />
                                </InputGroup>
                        </Nav>
                        <Nav className='mx-4'>
                            <NavLink style={{textDecoration:'none'}} to={'/perfil'}>
                            <div className='text-white d-flex align-items-center'>Renata Vasconcelos
                            <Nav.Link ><img src="/assets/img/user-img.png" alt="" /></Nav.Link>
                            </div>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>

    )
}

export default NavbarCom