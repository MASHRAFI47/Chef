import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom'

//logo
import logo from './images/Logo.png';
//React Icons
import { FaSistrix } from "react-icons/fa6";


const Navbar = () => {
    return (
        <nav>
            <Container className='topBar'>
                <Row>
                    <Col lg={4}>
                        <img src = {logo} />
                    </Col>
                    <Col lg={4} className='middleMenu'>
                        <NavLink to={'/'} className="menu">
                            Home
                        </NavLink>
                        <NavLink to={'/reservation'} className="menu">
                            Reservation
                        </NavLink>
                        <NavLink to={'/shop'} className="menu">
                            Shop
                        </NavLink>
                        <NavLink to={'/contact'} className="menu">
                            Contact Us
                        </NavLink>
                    </Col>
                    <Col lg={4} style={{textAlign: "right"}}>
                        <FaSistrix />
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}

export default Navbar