import React from 'react'
import { Container, Row } from 'react-bootstrap'

// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const WelcomePage = () => {
    return (
       <div className='welcome-page'>
         <Container className="text-center  welcome">
            <Row>
                <h1 className=''>Welcome to our brand</h1>

                <Link to="/">
                <motion.button
                    whileTap={{ scale: 0.85 }} className='motionBtn '>
                    <Button className="btn btn-primary " type="submit" to="HomePage">let's Start</Button>

                </motion.button>
                </Link>
            </Row>

        </Container>
       </div>
    )
}

export default WelcomePage