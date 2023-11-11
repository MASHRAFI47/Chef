import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import style from './menus.module.css'

//images
import menus1 from '../images/menus1.jpeg'
import menus2 from '../images/menus2.jpeg'
import menus3 from '../images/menus3.jpeg'
import menus4 from '../images/menus4.jpeg'
import menus5 from '../images/menus5.jpeg'

const Menus = () => {
    return (
        <div className={style.menusSection}>
            <Container>
                <Row>
                    <Col md={6} style={{ display: "flex", alignItems: "center" }} >
                        <img src={menus1} alt="" className='img-fluid mb-3' />
                    </Col>
                    <Col md={6}>
                        <div className={style.border}>
                            <h1 className={style.heading}>Barbeque</h1>
                            <p>When bread meets what could go between bread, there’s no end to the culinary possibilities.</p>
                            <h4 className={style.heading2}>CAROLINA ON MY MIND</h4>
                            <p>pulled pork, crispy skin, coleslaw, spicy vinegar sauce, sesame bun</p>
                            <h4 className={style.heading2}>MUSIC CITY</h4>
                            <p>spicy fried chicken breast, greens, pickles, buttermilk ranch, sesame bun</p>
                            <h4 className={style.heading2}>BIG CHEESE</h4>
                            <p>chopped pork or brisket, melted cheese, crispy onions, BBQ sauce, sesame bun</p>
                            <h4 className={style.heading2}>CLUB</h4>
                            <p>smoked turkey, crispy pork belly, avocado, tomato, garlic aioli, texas toast</p>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={6}>
                        <div className={style.border}>
                            <h1 className={style.heading}>CHICKEN WINGS</h1>
                            <p>smoked turkey, melted cheese, grilled tomato, crispy onions, ranch, BBQ sauce, texas toast</p>
                            <h4 className={style.heading2}>TEXAS RANGER</h4>
                            <p>sliced brisket, crispy onions, house pickles, BBQ sauce, texas toast</p>
                            <h4 className={style.heading2}>JIMMY MUSCLES</h4>
                            <p>crispy chicken breast, pork belly, jalapeño relish, sticky garlic sauce, ranch, herbs, sesame bun</p>
                            <h4 className={style.heading2}>TEXAS FLOOD</h4>
                            <p>chopped brisket, jalapeño cheese sausage, spicy pickles, crispy onions, bbq sauce, sesame bun</p>
                            <h4 className={style.heading2}>TOFU BANH MI</h4>
                            <p>crispy tofu burnt ends, pickled veggies, fresh herbs, crispy onions, sticky garlic, aioli, hoagie roll</p>
                        </div>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center", }}>
                        <div className={style.imageDiv}>
                            <img src={menus2} alt="" className='img-fluid mt-3' />
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={6} style={{ display: "flex", alignItems: "center" }}>
                        <img src={menus3} alt="" className='img-fluid mb-3' />
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center" }}>
                        <div className={style.border}>
                            <h1 className={style.heading}>TRADITIONAL SANDWICHES</h1>
                            <p>1/3 lb. of any off-the-bone meat on a sesame bun with BBQ sauce. Ask not what BBQ can do for the sandwich — just get the sandwich. You can figure out the rest later.</p>
                            <h4 className={style.heading2}>BRISKET</h4>
                            <p>chopped or sliced</p>
                            <h4 className={style.heading2}>SLICED SMOKED TURKEY</h4>
                            <h4 className={style.heading2}>PULLED PORK</h4>
                            <h4 className={style.heading2}>SLICED PORK BELLY</h4>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={6}>
                        <div className={style.border}>
                            <h1 className={style.heading}>PLATTERS AND COMBOS</h1>
                            <p>Creating the *perfect* palette of Federalist Pig flavors is an art. And we’re artists. Served with Texas toast & pickles.</p>
                            <h4 className={style.heading2}>TWO STEP</h4>
                            <p>pick any 2 meats & 2 small sides</p>
                            <h4 className={style.heading2}>RIB & CHICKEN</h4>
                            <p>1/2 lb. of ribs, 1/4 chicken & 2 small sides</p>
                            <h4 className={style.heading2}>SAMPLER PLATTER</h4>
                            <p>pick any 3 meats & 2 small sides</p>
                            <h4 className={style.heading2}>PITMASTER SPECIAL FOR 2</h4>
                            <p>pick any 4 meats & 3 small sides</p>
                        </div>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center" }}>
                        <img src={menus4} alt="" className='img-fluid mt-3' />
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={6} style={{ display: "flex", alignItems: "center" }}>
                        <img src={menus5} alt="" className='img-fluid mb-3'/>
                    </Col>
                    <Col md={6} style={{ display: "flex", alignItems: "center" }}>
                        <div className={style.border}>
                            <h1 className={style.heading}>DESSERT</h1>
                            <p>The kind of blue-ribbon treats usually reserved for a State Fair judge, straight to you.</p>
                            <h4 className={style.heading2}>NANA'S BANANA NANA PUDDING</h4>
                            <p>fresh bananas layered with vanilla pudding and nilla wafers</p>
                            <h4 className={style.heading2}>OREO CHOCOLATE PUDDING</h4>
                            <p>chocolate pudding layered with oreo cookie crumbles</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menus