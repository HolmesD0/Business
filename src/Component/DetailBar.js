import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Home" className="nav-link">
              Home
            </Link>
            <Link to="/Services" className="nav-link">
              Services
            </Link>
            <Link to="/About" className="nav-link">
              About Us
            </Link>
            <Link to="/Contact" className="nav-link">
              Contact Us
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Home">
              <IconContext.Provider value={{ size: "1.5rem", className: "" }}>
                <div>
                  <FaFacebookSquare />
                  <FaInstagramSquare />
                  <FaLinkedin />
                </div>
              </IconContext.Provider>
            </Nav.Link>
            <Nav.Link href="#buttons">© 2022 All Rights Reserved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DetailBar;
