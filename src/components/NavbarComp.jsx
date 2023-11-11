import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import style from './navbarcomp.module.css'

import '../App.css'


//logo
import logo from '../images/Logo.png'
//React-Icons
import { FaSistrix } from "react-icons/fa6";
import { BsFillCartFill } from "react-icons/bs";
//React router dom
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
import { NavLink } from 'react-bootstrap';
import Search from './Search';
import Shop from '../pages/Order';



const NavbarComp = (props) => {

    return (
        <nav className='navbarcompSection'>
            {/*  fixed="top" */}
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top" >
                <Container>
                    {/* onClick={() => props.setShow(true)}  */}
                    <Navbar.Brand href={'/'}>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 m-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href={'/'} className='nav-menu' style={{ color: "#388470", fontWeight: "600" }}>Home</Nav.Link>
                            <Nav.Link href={'/menus'} className='nav-menu' style={{ color: "#388470", fontWeight: "600" }}>Menus</Nav.Link>
                            <Nav.Link href={'/order'} className='nav-menu' style={{ color: "#388470", fontWeight: "600" }}>Order</Nav.Link>
                            <Nav.Link href={'/about'} className='nav-menu' style={{ color: "#388470", fontWeight: "600" }}>About</Nav.Link>
                            <Nav.Link href={'/contact-us'} className='nav-menu' style={{ color: "#388470", fontWeight: "600" }}>Contact Us</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">
                                <FaSistrix />
                            </Button>
                        </Form> */}
                        <div className='d-flex'>
                            <Button type='button' >
                                <BsFillCartFill />
                                <span>{props.size}</span>
                            </Button>
                            {/* <div className='cart' onClick={() => props.setShow(false)}>
                                <span>
                                    <Nav.Link href={'/cart'} className='nav-menu'><i className="fas fa-cart-plus"></i></Nav.Link>
                                </span>
                                <span>{props.size}</span>
                            </div> */}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )
}

export default NavbarComp