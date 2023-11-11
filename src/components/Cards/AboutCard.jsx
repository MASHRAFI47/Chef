import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import style from './aboutcard.module.css'

//images
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'


const AboutCard = () => {
    return (
        <div>
            <Container className={style.cardWidth}>
                <Row>
                    <Col md={6}>
                        <Card style={{ width: '18rem', border:"none", textAlign:"center" }} className={style.card}>
                            <Card.Img variant="top" src={avatar1} />
                            <Card.Body>
                                <Card.Title>Founder</Card.Title>
                                <Card.Text className={style.cardText}>
                                    Mohammed Hasin
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: '18rem', border:"none", textAlign:"center" }} className={style.card}>
                            <Card.Img variant="top" src={avatar2} />
                            <Card.Body>
                                <Card.Title>Executive Chef</Card.Title>
                                <Card.Text className={style.cardText}>
                                    Afghan Sulaiman
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutCard