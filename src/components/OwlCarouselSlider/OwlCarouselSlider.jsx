import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Col, Row, Container } from "react-bootstrap";
import style from './owlcarouselslider.module.css'


const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'slideOutUp',
    nav: true,
    dots: false,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
}

const OwlCarouselSlider = () => {
    return (
        <div className='owlCaro'>
            <OwlCarousel className='owl-theme' loop margin={10} nav  {...options}>
                <div className='item'>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className={style.allTexts}>
                                    <h1 className={style.textSize}>Meal Plans <br /> You Love</h1>
                                    <p className={style.paraColor} style={{color: "#388470"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi nam mollitia iusto assumenda repudiandae voluptatibus eum excepturi cum doloremque dicta voluptatem, ducimus consectetur recusandae laborum aliquid qui ipsam corporis?</p>
                                    <button type='button' className={"btn btn-primary" + ` ${style.buttonColor} `}>Start Your Journey</button>
                                    <button type='button' className={"btn btn-primary" + ` ${style.buttonColor} `}>Learn More</button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={style.image}>
                                    <img src="../src/images/carousel1.png" alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='item'>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className={style.allTexts}>
                                    <h1 className={style.textSize}>Check Our <br /> New Love</h1>
                                    <p className={style.paraColor} style={{color: "#388470"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi nam mollitia iusto assumenda repudiandae voluptatibus eum excepturi cum doloremque dicta voluptatem, ducimus consectetur recusandae laborum aliquid qui ipsam corporis?</p>
                                    <button type='button' className={"btn btn-primary" + ` ${style.buttonColor} `}>Start Your Journey</button>
                                    <button type='button' className={"btn btn-primary" + ` ${style.buttonColor} `}>Learn More</button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={style.image}>
                                    <img src="../src/images/bannermeal.png" alt="" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default OwlCarouselSlider