import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SimpleSlider from './SlickCarousel/SlickCarousel'

const MealPlansCarousel = () => {
  return (
    <section className='mealPlansCarousel'>
      <div className="mealPlansCarouselOrange"></div>
        <Container fluid>
            <Row>
                <Col>
                    <SimpleSlider />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default MealPlansCarousel