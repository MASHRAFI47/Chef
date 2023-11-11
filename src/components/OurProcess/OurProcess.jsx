import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OurProcessCards from '../Cards/OurProcessCards'

const OurProcess = () => {
  return (
    <section className='ourProcess'>
        <Container>
            <Row>
                <Col md={12}>
                    <div className="processTexts">
                        <h1>Our Process</h1>
                        <h6>MEALS THAT OUR CUSTOMERS ENJOY</h6>
                    </div>
                    <OurProcessCards />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default OurProcess