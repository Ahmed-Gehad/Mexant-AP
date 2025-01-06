import React from 'react'

// Import for bootstrap 
import { Col, Container, Row } from 'react-bootstrap'
// for dropdown arrow 
import Accordion from 'react-bootstrap/Accordion';

// Import for imge 
import imgAboutContent from "../../imgs/coffee-1283672_1920-fotor-2024091019910.png"


const AboutContent = () => {
    return (
        <div className='about-content' id='Services'>
            <Container className='mt-5 '>
                <Row className='d-flex justify-content-between'>
                    <Col lg={4}>
                        <img src={imgAboutContent} alt="imgAboutContent" className='w-100 rounded mb-5 ' />
                    </Col>
                    <Col lg={8}>
                        <div className='content'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >Mexant Financial Planning</Accordion.Header>
                                    <Accordion.Body className=' fw-bold py-4'>
                                        You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free.
                                        <br/>
                                        <br/>
                                        We do not ask you anything in return. You are free to use our templates for any purpose.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Mexant Crypto Investing</Accordion.Header>
                                    <Accordion.Body className=' fw-bold py-4'>
                                        Mexant HTML5 Template is available to download 100% free of charge. This CSS layout is based on Boostrap 5 framework.
                                        <br/>
                                        <br/>
                                        Anyone can edit and use this layout for all professional websites. Thank you for visiting TemplateMo website.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Cryptocurrency Investments</Accordion.Header>
                                    <Accordion.Body className=' fw-bold py-4'>
                                        Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo.
                                        <br/>
                                        <br/>
                                        Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo. Mauris scelerisque venenatis justo, sed interdum sem.</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutContent