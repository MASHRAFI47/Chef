import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import meal1 from '../../images/meal1.png'
import meal2 from '../../images/meal2.png'
import meal3 from '../../images/meal3.png'

const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'slideOutUp',
    nav: false,
    dots: false,
    margin: 0,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
}

const OwlComp = () => {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} nav  {...options}>
                <div className='item'>
                    <img src={meal1} alt=""/>
                    <h6 style={{ color: "white" }}>Seafood</h6>
                </div>
                <div className='item'>
                    <img src={meal2} alt=""/>
                    <h6 style={{ color: "white" }}>Sandwich</h6>

                </div>
                <div className='item'>
                    <img src={meal3} alt=""/>
                    <h6 style={{ color: "white" }}>Veg Salad</h6>

                </div>
                <div className='item'>
                    <img src={meal1} alt=""/>
                    <h6 style={{ color: "white" }}>Green Salad</h6>

                </div>
                <div className='item'>
                    <img src={meal2} alt=""/>
                    <h6 style={{ color: "white" }}>Seafood</h6>

                </div>
                <div className='item'>
                    <img src={meal3} alt=""/>
                    <h6 style={{ color: "white" }}>Sandwich</h6>

                </div>
                <div className='item'>
                    <img src={meal1} alt=""/>
                    <h6 style={{ color: "white" }}>Veg Salad</h6>
                </div>
                <div className='item'>
                    <img src={meal2} alt=""/>
                    <h6 style={{ color: "white" }}>Veg Salad</h6>

                </div>
            </OwlCarousel>
        </div>
    )
}

export default OwlComp