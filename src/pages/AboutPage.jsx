import React from 'react'
import AboutHome from '../component/About/AboutHome'
import AboutContent from '../component/About/AboutContent'
import Business from '../component/Business'
import StepsAbout from '../component/About/StepsAbout'

const AboutPage = () => {
  return (
    <div>
      <AboutHome />
      <AboutContent />
      <Business />
      <StepsAbout/>
    </div>
  )
}

export default AboutPage