import React from 'react'

//Import bootstrap
import { Col, Container, Row } from 'react-bootstrap'


// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const StepsAbout = () => {
    return (
        <div className='stepsAbout mb-5' id='about'>
            <Container>
                <Row className='mt-5 d-flex justify-content-between'>
                    <Col lg={6} className='px-3'>
                        <h3 className='fw-bold mt-5'>Please tell us about your idea and how you want it to bePlease tell us about your idea and how you want it to be</h3>
                        <p className='py-3 lead'>If you need more HTML templates, you can try visiting TooCSS blog and Tooplate websites. You can get many good templates on those websites.</p>
                        <p className='lead'>Nulla non placerat neque, a gravida elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sed dolor condimentum tellus commodo volutpat non malesuada turpis.</p>
                        <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>
                            <Button variant="success" size='lg' className='orangeBtn m-4'>Discover More</Button>
                        </motion.button>
                    </Col>
                    <Col lg={6}>
                       <Row>
                       <Col lg={6}> 
                        <div className="item ">
                            <span>01</span>
                            <h4 className='py-3'>First Step</h4>
                            <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                        </div>
                        </Col>
                        <Col lg={6}> 
                        <div className="item mt-5">
                            <span>02</span>
                            <h4 className='py-3'>Second Step</h4>
                            <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                        </div>
                        </Col>
                       </Row>
                       <Row className='py-3'>
                       <Col lg={6}> 
                        <div className="item ">
                            <span>03</span>
                            <h4 className='py-3'>Third Step</h4>
                            <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                        </div>
                        </Col>
                        <Col lg={6}> 
                        <div className="item mt-5">
                            <span>04</span>
                            <h4 className='py-3'>Fourth Step</h4>
                            <p>Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.</p>
                        </div>
                        </Col>
                       </Row>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StepsAbout