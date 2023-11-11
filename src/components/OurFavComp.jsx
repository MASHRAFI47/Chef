import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

import '../App.css'
import Cards from './Cards/Cards';

const OurFavComp = () => {
  return (
    <section className='our-fav'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className='our-fav-text'>
                        <h1>Our Favorites</h1>
                        <h6>Meals That Our Customers Enjoy</h6>
                    </div>
                    <Cards />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default OurFavComp