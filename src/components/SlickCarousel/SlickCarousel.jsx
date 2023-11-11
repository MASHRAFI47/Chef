import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import style from './slickcarousel.module.css'


//images
import carousel1 from '../../images/carousel1.png'
import bannermeal from '../../images/bannermeal.png'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            loop:true,  
            arrows:true,   
            autoplay: true, /* this is the new line */
            autoplaySpeed: 4000,   
            pauseOnHover:false,
        };
        return (
            <div>
                <Slider {...settings} >
                    <div className="slickCaro">
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <div className={style.allTexts}>
                                        <h1 className={style.textSize}>Meal Plans <br /> You Love</h1>
                                        <p className={style.paraColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi nam mollitia iusto assumenda repudiandae voluptatibus eum excepturi cum doloremque dicta voluptatem, ducimus consectetur recusandae laborum aliquid qui ipsam corporis?</p>
                                        <button type='button' className={"btn btn-primary" +` ${style.buttonColor} `}>Start Your Journey</button>
                                        <button type='button' className={"btn btn-primary" +` ${style.buttonColorSecond} `}>Learn More</button>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className={style.image}>
                                        <img src={carousel1} alt="" className="img-fluid"/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <div className={style.allTexts}>
                                        <h1 className={style.textSize}>Check Our <br /> New Love</h1>
                                        <p className={style.paraColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi nam mollitia iusto assumenda repudiandae voluptatibus eum excepturi cum doloremque dicta voluptatem, ducimus consectetur recusandae laborum aliquid qui ipsam corporis?</p>
                                        <button type='button' className={"btn btn-primary" +` ${style.buttonColor} `}>Start Your Journey</button>
                                        <button type='button' className={"btn btn-primary" +` ${style.buttonColorSecond} `}>Learn More</button>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className={style.image}>
                                        <img src={bannermeal} alt="" className="img-fluid"/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Slider>
            </div>
        );
    }
}

