import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './specialplans.module.css'


//images
import meals1 from '../../images/meals1.png';
import meals2 from '../../images/meals2.png'


const SpecialPlans = () => {
  return (
    <section className={style.specialPlans}>
        <div className={style.sideImage1}>
            <img src={meals1} alt="" className={style.img1}/>
        </div>
        <div className={style.sideImage2}>
            <img src={meals2} alt="" className={style.img2} />
        </div>
        <Container fluid>
            <Row>
                <Col md={12}>
                    <div className={style.allTexts}>
                        <h1 className={style.heading}>Special Plans <br /> Made For You</h1>
                        <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda porro exercitationem possimus repellat? Assumenda adipisci quasi eos soluta, sit hic eligendi recusandae rem eius optio veniam asperiores facilis similique sed? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto consequatur odio dolore atque quaerat, fugiat laboriosam expedita explicabo consequuntur</p>
                        <button type='button' className={'btn btn-success' + ` ${style.button}`}>Start Your Journeys</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SpecialPlans