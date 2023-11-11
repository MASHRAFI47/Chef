import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import style from '../Cards/ourprocesscards.module.css'

//images
import process1 from '../../images/process1.png'
import process2 from '../../images/process2.png'
import process3 from '../../images/process3.png'

const OurProcessCards = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card className={style.card}>
                            <Card.Body className={style.cardBody}>
                                <Card.Title className={style.cardTitle}>Pick a meal plan</Card.Title>
                                <div className={style.cardImage}>
                                    <Card.Img variant="top" src={process1} style={{ width: "100px" }} />
                                </div>
                                <Card.Text className={style.cardText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className={style.card}>
                            <Card.Body className={style.cardBody}>
                                <Card.Title className={style.cardTitle}>Ready to checkout</Card.Title>
                                <div className={style.cardImage}>
                                    <Card.Img variant="top" src={process2} style={{ width: "100px" }} />
                                </div>
                                <Card.Text className={style.cardText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className={style.card}>
                            <Card.Body className={style.cardBody}>
                                <Card.Title className={style.cardTitle}>Sit back and relax</Card.Title>
                                <div className={style.cardImage}>
                                    <Card.Img variant="top" src={process3} style={{ width: "100px" }} />
                                </div>
                                <Card.Text className={style.cardText}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium? 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurProcessCards