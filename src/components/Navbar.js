import React, { useState, useEffect } from 'react';

// Image
import logo from '../image/logo2.png'

//Custom css
import './NavBarStyle.css';

//React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import LinkContainer from 'react-router-bootstrap/LinkContainer'

//React Jquery
import $ from 'jquery'

const NavbarComponent = () => {
    

    return (
        <>
        
                    <Navbar id="nav" expand="lg" className="bg-primary navbar-light py-2">
                        <Container>
                            <LinkContainer to="/">
                                <Navbar.Brand><Image src={logo} height="50px"></Image></Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto mt-3 mt-lg-0">

                                    <LinkContainer to="/">
                                        <Nav.Link>Home</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/whole-number">
                                        <Nav.Link>Whole Number</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/fraction">
                                        <Nav.Link>Fraction</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/converter">
                                        <Nav.Link>Convert any!</Nav.Link>
                                    </LinkContainer>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
               
        </>
    )
}

export default NavbarComponent