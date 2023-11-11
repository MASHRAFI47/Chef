import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

import '../App.css'

//Banner Meal image
import bannermeal from '../images/bannermeal.png'
import OwlComp from './OwlCarousel/OwlComp';



const BannerComp = () => {
  return (
    <section className='banner'>
      <Container>
        <Row>
          <Col md={6}>
            <div className='bannermealImage'>
              <img src={bannermeal} alt="" className='bannermeal img-fluid' />
              <div className='bannerImageText'>
                <h6>SMOKED MILKFISH GARDEN SALAD</h6>
                <p>Includes: Vegetable Lasagna, Fresh Fruit Platter, <br /> Fresh Lemon Juice, and Creme Brulee  </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="bannerColumn">
              <div className='bannerText'>
                <h1>
                  Worry-Free <br />
                  Meal Plans.
                </h1>
                <div className='buttons'>
                  <button className='btn btn-success start-btn'>Start Your Journey</button>
                  <button className='btn btn-success learn-btn'>Learn More</button>
                </div>
                <div className="productCarousel">
                  <OwlComp />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BannerComp