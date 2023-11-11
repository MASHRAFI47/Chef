import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//images
import meal1 from '../../images/meal1.png'
import meal2 from '../../images/meal2.png'
import meal3 from '../../images/meal3.png'


const Cards = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Pomegranate Glazed Salmon</Card.Title>
                                <Card.Img variant="top" src={meal1} />
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque!
                                </Card.Text>
                                <div className="buttons">
                                    <Button variant="primary">Learn More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>pomegranate pear salad</Card.Title>
                                <Card.Img variant="top" src={meal2} />
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque!
                                </Card.Text>
                                <div className="buttons">
                                    <Button variant="primary">Learn More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>chef's signature meal plan</Card.Title>
                                <Card.Img variant="top" src={meal3} />
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque!
                                </Card.Text>
                                <div className="buttons">
                                    <Button variant="primary">Learn More</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cards