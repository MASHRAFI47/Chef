import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


//images
import mealplans1 from '../../src/images/mealplans1.png'
import meal4 from '../images/meal4.png'
import meal5 from '../images/meal5.png'

const MeatPlans = () => {
    return (
        <section className='mealPlans'>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="image">
                            <img src={mealplans1} alt="" className='img-fluid mealplansImage' />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="mealPlansText">
                            <h6>Smoked Milkfish Garden Salad</h6>
                            <h1>April 2021 <br />Meal Plans</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eligendi ullam explicabo necessitatibus laudantium veritatis eius magni id, dignissimos dolore.</p>
                        </div>
                        <div className="imageOrder">
                            <Row>
                                <Col sm={6}>
                                    <div className="image">
                                        <img src={meal4} alt="" className='img-fluid'/>
                                        <button type='button' className='btn btn-primary'>Order Now</button>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="image">
                                        <img src={meal5} alt="" className='img-fluid'/>
                                        <button type='button' className='btn btn-primary'>Order Now</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MeatPlans