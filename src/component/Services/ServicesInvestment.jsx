import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

// Import for imge 
import investImage1 from "../../imgs/service-details-03.jpg"
import investImage2 from "../../imgs/service-details-02.jpg"
import investImage3 from "../../imgs/service-details-03.jpg"


// import react awesome
import { Zoom } from 'react-awesome-reveal';

export const ServicesInvestment = () => {

  const [activeTab, setActiveTab] = useState("Crypto Investments")
  const handelClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = {
    "Crypto Investments": [
      [
        <img src={investImage1} alt='investImage1' />,
        "Learn more about cryptocurrency investments",
        "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
      ],
    ],

    "Cryptocurrency Market": [
      [
        <img src={investImage2} alt='investImage2' />,
        "Read more on Cryptocurrency Market",
        "Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
      ],

    ],
    "Financial Planning": [
      [
        <img src={investImage3} alt='investImage3' />,
        "How to carefully plan on your online financials",
        "Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
        "- Top Crypto prices and charts",
      ],

    ],

  };

  return (
    <div className='services-investment' id='about'>

      <div className="title text-center ">
        <h5 className='text-uppercase fw-bold orange'>Investment in Details</h5>
        <h1 className='pt-2 fw-bold'>Upgrade your knowledge</h1>
      </div>



      <Container>
        <Row className='text-center'>
          <Col lg={12} className="tabs text-center my-4 d-flex justify-content-center">
            {Object.keys(tabs).map((tab) => (
              <motion.button
                whileTap={{ scale: 0.85 }} className='motionBtn'>
                <Button key={tab} onClick={() => handelClick(tab)}
                  className={activeTab === tab ? "active" : ""}  >{tab}
                </Button>
              </motion.button>
            ))}
          </Col>
        </Row>
      </Container>

      <Zoom key={activeTab}>
        {tabs[activeTab].map(
          ([img, title, desc, span1, span2, span3], index) => (
         
            <Container key={index} className='content'>
              <Row className='d-flex justify-content-between'>
                <Col lg={4}>
                  <div className="imge " >
                    {img}
                  </div>
                </Col>
                <Col lg={6} className='m-5'>
                  <h3 className='fw-bold w-75'>{title}</h3>
                  <p className='py-4 lead w-75'>{desc}</p>
                  <span className='fw-bold lead'>{span1}</span>
                  <br />
                  <span className='fw-bold lead'>{span2}</span>
                  <br />
                  <span className='fw-bold lead'>{span3}</span>
                </Col>
              </Row>
            </Container>
       

          )
        )}

      </Zoom>



    </div>
  )
}
