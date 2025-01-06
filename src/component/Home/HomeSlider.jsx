import React from 'react'

// import slider
import Carousel from 'react-bootstrap/Carousel';

//import imgs
import imgSlider1 from "../../imgs/pikaso_embed.jpeg";
import imgSlider2 from "../../imgs/pikaso_edit.jpeg";
import Slider3 from "../../imgs/pikaso_embed1.jpeg";

// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

// import react awesome
import { Fade } from 'react-awesome-reveal';

//router for nav
import { Link } from 'react-router-dom';



function HomeSlider() {
    return (
        <div className='home-slider'>

            <Carousel>
                <Carousel.Item>
                    <img src={imgSlider1} alt="imgSlider1" className='w-100' />

                    <Fade>
                        <Carousel.Caption>
                            <h1 className='col-md-12'>Get <span>ready</span> for your business <br /> & upgrade  <span>all aspects</span></h1>
                            <div className='line mt-3'></div>
                            <p className='lead mt-3'>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.</p>

                            <div>
                                <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>
                                    <Button variant="success" size='lg' className='orangeBtn'>Discover More</Button>
                                </motion.button>
                                <Link to="/contact">
                                <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>
                                    <Button variant="success" size='lg'>Countact</Button>
                                </motion.button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Fade>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={imgSlider2} alt="imgSlider1" className='w-100' />

                    <Fade>
                        <Carousel.Caption>
                            <h1 className='col-md-12'><span>Digital</span> Currency for you<br />& Best <span>Crypto</span> Tips</h1>
                            <div className='line mt-3'></div>
                            <p className='lead mt-3'>ou will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.</p>

                            <div>
                                <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>
                                    <Button variant="success" size='lg' className='orangeBtn'>Discover More</Button>
                                </motion.button>
                                <Link to="/contact">
                                <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>
                                    <Button variant="success" size='lg'>Countact</Button>
                                </motion.button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Fade>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Slider3} alt="imgSlider1" className='w-100' />

                    <Fade>
                        <Carousel.Caption>
                            <h1 className='col-md-12'>Best One in Town<br />& Crypto <span>Services</span></h1>
                            <div className='line mt-3'></div>
                            <p className='lead mt-3'>When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>

                            <div>
                                <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>
                                    <Button variant="success" size='lg' className='orangeBtn'>Discover More</Button>
                                </motion.button>

                                <Link to="/contact">
                                    <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>

                                        <Button variant="success" size='lg'>Countact</Button>

                                    </motion.button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Fade>
                </Carousel.Item>

            </Carousel>

        </div>
    );
}

export default HomeSlider





