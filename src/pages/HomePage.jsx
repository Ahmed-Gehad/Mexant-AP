import React from 'react'
import HomeSlider from '../component/Home/HomeSlider'
import Services from '../component/Home/Services'
import Business from '../component/Business'
import AboutSlider from '../component/Home/AboutSlider'
import Testimonials from '../component/Home/Testimonials'

const HomePage = () => {
  return (
    <div className=''>
        <HomeSlider />
        <Services />
        <Business />
        <AboutSlider />
        <Testimonials/>
    </div>
  )
}

export default HomePage