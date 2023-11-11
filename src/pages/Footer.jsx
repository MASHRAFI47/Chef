import React from 'react'
import style from './footer.module.css'
import { Col, Container, Row } from 'react-bootstrap'

//react-icons
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const date = new Date();
const fullYear = date.getFullYear();

const Footer = () => {
    const handleClickNewsLetter = () => {
        const inputValue = document.getElementById('myInput').value;
        if(inputValue.trim() === '') {
            toast("Please provide proper email")
        }
        else {
            toast("Thanks for subscribing to our newsletter")
        }
    }

    return (
        <section className={style.footerSection}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <div className={style.center}>
                        <h4 className={style.heading}>Our Services</h4>
                        <ul className={style.unorderedList}>
                            <li className={style.listedItems}><a href="" className={style.anchor}>What's New</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>How to Order</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Payment Method</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Order Status</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Subscription</a></li>
                        </ul>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className={style.center}>
                        <h4 className={style.heading}>Our Team</h4>
                        <ul className={style.unorderedList}>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Our Local Farms</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Craftsmanship</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Our Sources</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Sustainability</a></li>
                        </ul>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className={style.center}>
                        <h4 className={style.heading}>Legal</h4>
                        <ul className={style.unorderedList}>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Privacy Policy</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>Our Promises</a></li>
                            <li className={style.listedItems}><a href="" className={style.anchor}>More Information</a></li>
                        </ul>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <form action="" className={style.center}>
                            <h4 className={style.heading}>Join Our Newsletter</h4>
                            <p className={style.para}>Get the latest updates on our meals</p>
                            <input type="text" placeholder='Your E-Mail Address' className={'form-control' + ` ${style.inputField}`} id="myInput"/>
                            <button type='button' className={'btn btn-primary' + ` ${style.button}`} onClick={handleClickNewsLetter}>Submit</button>
                            <ToastContainer />
                        </form>
                    </Col>
                </Row>

                <Row>
                    <div className={style.copyRight}>
                        <Col md={6}>
                            <h6 className={style.copyrightHeading}>{`Copyright ${fullYear} Chef Norman Meals Co. All Rights Reserved`}</h6>
                        </Col>
                        <Col md={6}>
                            <ul className={style.unorderedListSocial}>
                                <li className={style.listedItemsSocial}>
                                    <a href="" className={style.anchorSocial}>
                                        <FaFacebookSquare />
                                    </a>
                                </li>
                                <li className={style.listedItemsSocial}>
                                    <a href="" className={style.anchorSocial}>
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li className={style.listedItemsSocial}>
                                    <a href="" className={style.anchorSocial}>
                                        <FaTwitter />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Footer