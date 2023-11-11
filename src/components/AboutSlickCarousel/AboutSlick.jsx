import React, { Component } from "react";
import Slider from "react-slick";

import style from './aboutslick.module.css'

//images
import about1 from '../../images/about1.jpg'

export default class AboutSlick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className={style.centered}>
                <h1>Our Story</h1>
            </div>
            <img src={about1} alt="" className="img-fluid"/>
          </div>
        </Slider>
      </div>
    );
  }
}