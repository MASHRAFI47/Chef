import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

//images
import meal6 from '../images/meal6.png'
import meal4 from '../images/meal4.png'
import meal5 from '../images/meal5.png'
import meal7 from '../images/meal7.png'
import recipesMeal from '../images/recipesMeal.png'

const Recipes = () => {
    return (
        <section className='recipesSection'>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="recipesText">
                            <h6>Smoked Milkfish Garden Salad</h6>
                            <h1>Recipes</h1>
                        </div>
                        <Row>
                            <Col md={6}>
                                <div className="image">
                                    <img src={meal6} alt="" className='img-fluid' />
                                </div>
                                <div className="buttons">
                                    <button type='button' className='btn btn-primary'>See Recipe</button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="image">
                                    <img src={meal4} alt="" className='img-fluid' />
                                </div>
                                <div className="buttons">
                                    <button type='button' className='btn btn-primary'>See Recipe</button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className="image">
                                    <img src={meal7} alt="" className='img-fluid' />
                                </div>
                                <div className="buttons">
                                    <button type='button' className='btn btn-primary'>See Recipe</button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="image">
                                    <img src={meal5} alt="" className='img-fluid' />
                                </div>
                                <div className="buttons">
                                    <button type='button' className='btn btn-primary'>See Recipe</button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={7}>
                        <div className="imageMeal">
                            <img src={recipesMeal} alt="" className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Recipes