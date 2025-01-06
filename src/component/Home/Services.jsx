import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { motion } from "framer-motion";

const Services = () => {
    return (
        <div className='services mt-5' id='Services'>
            <Container>
                <div className="title text-center ">
                    <h5 className='text-uppercase fw-bold'>Services</h5>
                    <h1 className='pt-2 fw-bold'>Discover More Services</h1>
                </div>

                <Row className='mt-5'>
                    <Col lg={6}>
                        <motion.div
                            className=""
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: 1 % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >

                            <div className="services-item d-flex mt-4">
                                <i class="fa-solid fa-box-archive "></i>
                                <div>
                                    <h4 className='fw-bold'>CSS Templates</h4>
                                    <p className='lead'>TemplateMo website is the best for you to explore and download free website templates.</p>
                                </div>
                            </div>

                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <motion.div
                            className=""
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: 2 % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >

                            <div className="services-item d-flex mt-4">
                                <i class="fas fa-cloud  "></i>
                                <div>
                                    <h4 className='fw-bold'>HTML5 Web Pages</h4>
                                    <p className='lead'>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
                                </div>
                            </div>

                        </motion.div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg={6}>
                        <motion.div
                            className=""
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: 3 % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="services-item d-flex">
                                <i class="fas fa-charging-station "></i>
                                <div>
                                    <h4 className='fw-bold'>Responsive Designs</h4>
                                    <p className='lead'>All of our CSS templates are 100% free to use for commercial or business websites.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <motion.div
                            className=""
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: 4 % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="services-item d-flex">
                                <i class="fas fa-suitcase  "></i>
                                <div>
                                    <h4 className='fw-bold'>Mobile and Tablet ready!</h4>
                                    <p className='lead'>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg={6}>
                        <motion.div
                            className=""
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: 5 % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="services-item d-flex ">
                                <i class="fas fa-archway "></i>
                                <div>
                                    <h4 className='fw-bold'>Fast Customer Support</h4>
                                    <p className='lead'>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <motion.div
                            className=""
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: 6 % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 1 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="services-item d-flex">
                                <i class="fas fa-puzzle-piece  "></i>
                                <div>
                                    <h4 className='fw-bold'>Fully Customizable</h4>
                                    <p className='lead'>If you have any idea or suggestion about new templates, feel free to let us know.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services


