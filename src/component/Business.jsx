import React from 'react'

import { Col, Row } from 'react-bootstrap';

// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Business = () => {
    return (
        <div className='business '>
            <Row className='d-flex justify-content-between'>
            <Col lg={4}  className=' px-2'>
                <h2 className='fw-bold text-white'>Business <span className='orange'> Solutions </span> and
                    <span className='green'> Crypto </span> Investments</h2>
            </Col>
            <Col lg={4}  className=' d-flex mt-5'>
                <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>
                    <Button variant="success" size='lg' className='orangeBtn mb-4'>Discover More</Button>
                </motion.button>

                  <Link to="/contact">
                <motion.button whileTap={{ scale: 0.85 }} className='motionBtn '>
                    <Button variant="success" size='lg' className='mb-4'>Countact</Button>
                </motion.button>
                </Link>
            </Col>
            </Row>
        </div>
    )
}

export default Business