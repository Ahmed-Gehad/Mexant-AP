import React from 'react'

// import imge
import imgTestimonials from "../../imgs/testimonials-01.jpg";
//import bootstrap
import { Col, Container } from 'react-bootstrap'

//import slick for slide
import Slider from "react-slick";

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='testimonials' id='Testimonials'>
            <Container>
                <div className="title text-center pb-4">
                    <h5 className='text-uppercase fw-bold'>Testimonials</h5>
                    <h1 className='pt-2 fw-bold'>What They Say?</h1>
                </div>


                <Slider {...settings}>
                    <div className='items d-flex align-items-center justify-content-center'>
                        <Col lg={6} md={6} sm={6}  className="info p-5">
                            <i class="fa fa-quote-left"></i>
                            <p className='lead my-4'>“Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”</p>
                            <h4 className='orange fw-bold'>David Eigenberg</h4>
                            <p className='green py-2'>CEO of Mexant</p>
                        </Col>
                        <Col lg={3} md={6} sm={6}  xs={12} className="image py-5">
                        <img src={imgTestimonials} alt="imgTestimonials" className='w-100' />
                        </Col>
                    </div>
                    <div className='items d-flex align-items-center justify-content-center'>
                        <Col lg={6}   className="info p-5">
                            <i class="fa fa-quote-left"></i>
                            <p className='lead my-4'>“Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”</p>
                            <h4 className='orange fw-bold'>David Eigenberg</h4>
                            <p className='green py-2'>CEO of Mexant</p>
                        </Col>
                        <Col lg={3}  className="image py-5">
                        <img src={imgTestimonials} alt="imgTestimonials" className='w-100' />
                        </Col>
                    </div>

                </Slider>

            </Container>
        </div>
    )
}

export default Testimonials