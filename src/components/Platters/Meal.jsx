import React from 'react'
import style from './meal.module.css'
import { Col, Container, Row } from 'react-bootstrap';


const Meal = (props) => {
  const { meal } = props;
  const { id, title, desc, price, image } = meal;



  return (
    <div style={{ width: "33%", display: "inline-block" }} className={style.mobileWidth}>
      <Container>
        <Row>
          <Col>
            <div>
              <img src={image} alt="" className='img-fluid' />
              <h1 className={style.mealTitle}>{title}</h1>
              <p className={style.para}>{desc}</p>
              <p className={style.price}>{price}</p>
              {/* */}
              <button type='button' className={'btn btn-primary' + ` ${style.addCartBtn}`} onClick={()=>props.handleClick(meal)}  >Add To Cart</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Meal