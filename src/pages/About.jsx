import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import style from './about.module.css';
import AboutSlick from '../components/AboutSlickCarousel/AboutSlick';
import AboutCard from '../components/Cards/AboutCard';

const About = () => {
    return (
        <section className={style.aboutSection}>
            <AboutSlick />

            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className={style.para}>
                                <p className='mt-4'>Welcome to our restaurant, where every dish tells a story. Our culinary journey began with a passion for food and a dream to create a dining experience that celebrates flavors, culture, and the joy of sharing a meal. Join us as we take you through the chapters of our restaurant's story, from our humble beginnings to our present-day culinary excellence.</p>
                                <p>Our story begins in a small, cozy kitchen where our chef and founder, [Alex-Jordan], experimented with recipes, flavors, and spices. Inspired by the rich tapestry of global cuisine, [Alex-Jordan] started crafting unique dishes that showcased the beauty of fusion cuisine. Friends and family were the first to taste these innovative creations, and their enthusiastic feedback was the spark that ignited our restaurant's journey.</p>
                                <p>In 2023, we opened the doors to our very first restaurant, a quaint and charming space that quickly became a neighborhood favorite. The menu was an eclectic blend of flavors, taking inspiration from [Alex-Jordan]'s travels and culinary explorations. From the very beginning, we prioritized using locally sourced, fresh ingredients to create dishes that would not only tantalize taste buds but also nourish the soul.</p>
                                <p>As word spread about our unique culinary creations, our restaurant's popularity grew. We moved to a larger location, complete with a beautiful dining room and a vibrant bar. Our talented team expanded, and together, we continued to refine our menu, always pushing the boundaries of creativity while staying true to our roots.</p>
                                <p>Our restaurant evolved into a hub for food lovers and travelers alike. We introduced themed tasting menus that took diners on a journey across continents, offering a gastronomic experience like no other. Whether it was a Moroccan-inspired tagine, a Japanese sushi extravaganza, or a classic Italian pasta night, our goal remained the same: to transport our guests through the world's diverse culinary landscapes.</p>
                                <p>As our restaurant's story continued, we felt a deep sense of responsibility towards our community and the environment. We partnered with local farmers and producers to support sustainability and reduce our carbon footprint. Our commitment to responsible sourcing and waste reduction has allowed us to not only serve exceptional food but also contribute to a more sustainable world.</p>
                                <p>Today, our restaurant stands as a testament to the passion, creativity, and dedication that have driven our journey. Our menu is a reflection of years of learning, exploring, and growing. We invite you to join us as we continue to create, innovate, and share our love for food with the world.</p>
                                <p>Our restaurant's story is a tribute to the power of culinary artistry, a testament to the beauty of sharing meals, and a celebration of the diverse flavors that unite us all. We invite you to be a part of our story, to savor the chapters of our journey, and to create lasting memories around our tables. Thank you for being a part of our culinary adventure.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <div className={style.cont}>
                        <Row>
                            <div className={style.headingText}>
                                <h1 className='mb-4'>OUR OG CREW</h1>
                            </div>
                            <Col md={12}>
                                <AboutCard />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default About