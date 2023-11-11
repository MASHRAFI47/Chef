import React from 'react';
import { register } from 'swiper/element/bundle';

const SwiperCarousel = () => {
    return (
        <div>
            <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true" arrows="true" dots="true">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper-container>

        </div>
    )
}

export default SwiperCarousel