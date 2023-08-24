import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
      <Container>
        <Navbar.Brand href="#home">Muhammad Huzaifah</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar mx-auto me-4 ">
            <NavLink className="nav-link-with-spacing" to="/">Home</NavLink>
            <NavLink className="nav-link-with-spacing" to="/about">About</NavLink>
            <NavLink className="nav-link-with-spacing" to="/project">Project</NavLink>
            <NavLink className="nav-link-with-spacing" to="/contact">Contact</NavLink>
            <NavLink className="nav-link-with-spacing" to="/resume">Resume</NavLink>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.2"> */}
                {/* Another action */}
              {/* </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4"> */}
                {/* Separated link */}
              {/* </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;