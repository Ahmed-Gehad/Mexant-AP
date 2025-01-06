import React from 'react'
//import bootstrab
import { Col, Container, Row } from 'react-bootstrap'

import { motion } from "framer-motion";

//import imge
import imgServicesContent1 from "../../imgs/service-image-01.jpg";
import imgServicesContent2 from "../../imgs/service-image-02.jpg";
import imgServicesContent3 from "../../imgs/service-image-03.jpg";

const ServicesContent = () => {
    return (
        <div className='services-content mt-5'>
            <Container>
                <Row className='d-flex align-items-center justify-content-between my-4'>
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
                            <div>
                                <img src={imgServicesContent1} alt="imgServicesContent1" className='w-100 rounded' />
                            </div>
                        </motion.div>
                    </Col>
                    <Col lg={6} className='info p-5'>
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
                            <i class="fas fa-archive green m-4" style={{ fontSize: "60px" }}></i>
                            <h4 className='py-3 fw-bold'>Digital Currencies</h4>

                            <p className='lead'>You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.</p>

                        </motion.div>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-between my-4'>

                    <Col lg={6} className='info p-5'>
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
                            <i class="fas fa-archive green m-4" style={{ fontSize: "60px" }}></i>
                            <h4 className='py-3 fw-bold'>Digital Currencies</h4>
                            <p className='lead'>You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.</p>
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
                            <div>
                                <img src={imgServicesContent2} alt="imgServicesContent1" className='w-100 rounded' />
                            </div>
                        </motion.div>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-between my-4'>
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
                            <div>
                                <img src={imgServicesContent3} alt="imgServicesContent1" className='w-100 rounded' />
                            </div>
                        </motion.div>
                    </Col>
                    <Col lg={6} className='info p-5'>
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
                            <i class="fas fa-archive green m-4" style={{ fontSize: "60px" }}></i>
                            <h4 className='py-3 fw-bold'>Digital Currencies</h4>
                            <p className='lead'>You will see a bunch of free CSS templates when you search on Google. TemplateMo is the best one because it is 100% free for anyone. We do not ask you anything in return. You are free to use our templates for any purpose.</p>

                        </motion.div></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesContent