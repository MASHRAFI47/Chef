import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

//images
import testimonial1 from '../../images/testimonial1.png'
import testimonial2 from '../../images/testimonial2.png'
import testimonial3 from '../../images/testimonial3.png'


const WhatTheySay = () => {
    return (
        <section className='whatTheySay'>
            <Container>
                <Row>
                    <div className="theySayText">
                        <h1>What They Say</h1>
                    </div>
                    <Col md={4}>
                        <div className="testimonial">
                            <div className="image">
                                <img src={testimonial1} alt="" />
                            </div>
                            <h6>ANNA LUCAS</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ex iusto tenetur impedit aliquam corrupti.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="testimonial">
                            <div className="image">
                                <img src={testimonial2} alt="" />
                            </div>
                            <h6>ANNA LUCAS</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ex iusto tenetur impedit aliquam corrupti.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="testimonial">
                            <div className="image">
                                <img src={testimonial3} alt="" />
                            </div>
                            <h6>ANNA LUCAS</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ex iusto tenetur impedit aliquam corrupti.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhatTheySay