import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">AtoZ Travels</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Contact Us</Nav.Link>
                  <NavDropdown title="Packages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Family Package</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Couples Package
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Holiday Package</NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
}

export default BasicExample;