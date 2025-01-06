import React from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//router for nav
import { Link } from 'react-router-dom';

// import imge
import logo from '../imgs/logo.png'

// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

const Navv = () => {
  return (
    <div className='navBar '>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       <Link to='/'>
       <img src={logo} alt='logo' className='logo'/>
       </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="align-items-center">
            <Nav.Link href="#Home" className='active'>Home</Nav.Link>
          
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Testimonials">Testimonials</Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">

              <Link to='/Pages/about'>
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />

              <Link to='/Pages/services'>
              <NavDropdown.Item href="#action/3.2">Services Us</NavDropdown.Item>
              </Link>

            </NavDropdown>

            

          </Nav>
          <Link to="/Contact">
          <motion.button
            whileTap={{ scale: 0.85 }}  className='motionBtn'>
            <Button variant="success" to="ContactPage">Contact Us</Button>
            </motion.button>
            </Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navv