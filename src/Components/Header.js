import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'

const Header = () => {

  const common = {
    marginRight: "15px",
    fontSize: "17px",
    letterSpacing: ".5px"

  }
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div>
            <h2 className='mt-2 h2_right' >
              <Navbar.Brand style={{ color: "#6c8cff" }} href="#home">Muhammad Huzaifah</Navbar.Brand>
            </h2>
          </div>
          <Nav className="">
            <div className='mt-2'>
              <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
              <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
              <NavLink to="/Project" className="text-decoration-none" style={common}>Project</NavLink>
              <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
              <NavLink to="/resume" className="text-decoration-none" style={common}>Resume</NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
