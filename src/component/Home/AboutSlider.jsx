import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

// import react awesome
import { Zoom } from 'react-awesome-reveal';


const AboutSlider = () => {
    const [activeTab, setActiveTab] = useState("Web Design")
    const handelClick = (tab) => {
        setActiveTab(tab)

    }

    const tabs = {
        "Web Design": [
            ["Website Redesign", "$1,500 to $2,200", "2022 Dec 12", "Web Biz"],
            ["Website Renovation", "$2,500 to $3,600", "2022 Dec 10", "Online Ads"],
            ["Marketing Plan", "$2,500 to $4,200", "2022 Dec 8", "Web Biz"],
            ["All-new Website", "$3,000 to $6,600", "2022 Dec 2", "Web Presence"],
        ],
        "Graphic Design": [
            ["Graphics Redesign", "$500 to $800", "2022 Nov 24", "Media One"],
            ["Digital Graphics", "$1,100 to $2,400", "2022 Nov 18", "Second Media"],
            ["New Artworks", "$1,500 to $3,000", "2022 Nov 10", "Artwork Push"],
            ["Complex Arts", "$2,200 to $4,400", "2022 Nov 3", "Media One"],
        ],
        "Web Coding": [
            ["Backend Coding", "$1,100 to $2,400", "	2022 Nov 3", "PHP MySQL"],
            ["Frontend Interactions", "$3,000 to $6,000", "	2022 Nov 10", "JavaScripts"],
            ["Video Creations", "$1,500 to $3,000", "	2022 Nov 18", "Multimedia"],
            ["New Web App", "$2,000 to $5,000", "	2022 Nov 28", "Python Programming"],
        ],
    };

    return (
        <div className='aboutSlider'>
            <Container>
                <div className="title text-center pb-4">
                    <h5 className='text-uppercase fw-bold'>About Us</h5>
                    <h1 className='pt-2 fw-bold'>Know Us Better</h1>
                </div>
                <div className="content mt-5">
                    <Row>
                        <Col lg={8} sm={12}>
                            <div className="left">
                                <div className='tabs d-flex justify-content-center align-items-center mx-1'>

                                    {Object.keys(tabs).map((tab) => (
                                        <motion.button
                                            whileTap={{ scale: 0.85 }} className='motionBtn '>
                                            <button key={tab} onClick={() => handelClick(tab)}
                                                className={activeTab === tab ? "active " : ""} >{tab} </button>
                                        </motion.button>
                                    ))}

                                </div>

                                <Zoom key={activeTab}>
                                    <div className="table-content " >
                                        <table className='mb-5'>
                                            <thead >
                                                <tr >
                                                    <th >Project Title</th>
                                                    <th>Budget</th>
                                                    <th>Deadline</th>
                                                    <th>Client</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {tabs[activeTab].map(
                                                    ([Title, Budget, Deadline, Client], index) => (
                                                        <tr key={index} >
                                                            <td className='py-3 green fw-bold'>{Title}</td>
                                                            <td>{Budget}</td>
                                                            <td>{Deadline}</td>
                                                            <td>{Client}</td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </Zoom>


                            </div>
                        </Col>




                        <Col lg={4} sm={12} >
                            <h2 className='fw-bold'>Please tell us about your idea and how you want it to be</h2>
                            <p className='lead mt-4'>You are allowed to use this template for your websites. You are <span className='orange'> NOT allowed </span> to redistribute the template ZIP file on any other template websites.</p>

                            <p className='lead fw-lighter'>Thank you for downloading and using our templates. Please tell your friends about our website.</p>
                            <motion.button whileTap={{ scale: 0.85 }} className='motionBtn'>
                                <Button variant="success" size='lg' className='orangeBtn m-4'>Discover More</Button>
                            </motion.button>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}

export default AboutSlider