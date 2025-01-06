import React, { useState } from 'react'

import emailjs from '@emailjs/browser';

import { Col, Container, Form, Row } from 'react-bootstrap'
// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';


export const MassageContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the data to the server
        const serviceId = "service_7d8emeq";
        const templateId = "template_w0kq4z3";
        const publicKey = "pu3VVbxuaGyunrZSu";
        
        // create a new object with the data
        const templateParams = {
            form_name: name,    
            form_email: email,
            to_name: "web_Wizard",
            message: message,
        };

        // send the email using emailjs
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email Sent Successfully:',response );
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log('Error Sending Email:',error );
            });
    } 

    return (
        <Container>
            <Row>
                <Col lg={12} className=" py-4">
                    <h2 className='bold'>Leave Us a Message</h2>
                    <p className='text-muted w-75'>We are always happy to hear from you. Please feel free to contact us with any questions or comments you may have. We will respond to your message as soon as possible.</p>
                </Col>
            </Row>
            <Row>
                <Col lg={8} sm={9}>
                    <Form className=' rounded p-4' onSubmit={handleSubmit}>
                        


                        <div className='d-flex justify-content-between mb-3'>


                            <Col lg={6} className="p-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your name"
                                />
                            </Col>



                            <Col lg={6} className="p-3">
                                <Form.Label for="exampleFormControlInput1" className="form-label">Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com" />
                            </Col>


                        </div>
                        <Col lg={8}>
                            <Form.Label for="exampleFormControlTextarea1" className="form-label p-2">Message</Form.Label>
                            <textarea
                             className="form-control mb-3"
                             value={message}
                             onChange={(e) => setMessage(e.target.value)}
                              id="exampleFormControlTextarea1"
                               rows="3" />
                        </Col>

 <motion.button
                whileTap={{ scale: 0.85 }} className='motionBtn'>
                                      <Button className="btn btn-primary " type="submit" onclick="sendEmail()">SEND MESSAGE</Button>

              </motion.button>

                    </Form>
                </Col>
            </Row>


         


        </Container>
    )
}
export default MassageContact