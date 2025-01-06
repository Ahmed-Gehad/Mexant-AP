import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import ContactHome from '../component/Contact/ContactHome'
import MassageContact from '../component/Contact/MassageContact'
import MapContact from '../component/Contact/MapContact'
import InfoContact from '../component/Contact/InfoContact'

const ContactPage = () => {
  return (
    <div >
        <ContactHome />
        <MapContact />
       <Container>
       <Row className='d-flex justify-content-between '>
        <Col lg={8}>
        <MassageContact />
        </Col>
        <Col lg={4} >
        <InfoContact />
        </Col>
        </Row>
       </Container>
    </div>
  )
}

export default ContactPage