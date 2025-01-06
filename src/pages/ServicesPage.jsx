import React from 'react'
import ServicesHome from '../component/Services/ServicesHome'
import ServicesContent from '../component/Services/ServicesContent'
import Business from '../component/Business'
import { ServicesInvestment } from '../component/Services/ServicesInvestment'

const ServicesPage = () => {
    return (
        <div>
            <ServicesHome />
            <ServicesContent />
            <Business />
            <ServicesInvestment />
        </div>
    )
}

export default ServicesPage