import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

/* NavDropdown Card FaLaptop FaMobileAlt useState */
function NavBar() {
    /* const [show, setShow] = useState(false);
    const showDropdown = e => {
        setShow(!show);
    };
    const hideDropdown = e => {
        setShow(false);
    }; */

    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#Home">Services</Nav.Link>
                        <Nav.Link href="#Home">About Us</Nav.Link>
                        <Nav.Link href="#Home">Contact Us</Nav.Link>
                        {/* <NavDropdown
                            title="Dropdown"
                            id="basic-nav-dropdown"
                            show={show}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}
                            onClick={showDropdown}
                        >
                            <Nav as="ul">
                                <Nav.Item as="li" href="#action/3.1">
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Body style={{ textAlign: 'center' }}>
                                            <IconContext.Provider value={{ size: "5rem" }}>
                                                <div>
                                                    <FaLaptop />
                                                </div>
                                            </IconContext.Provider>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Animations</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Nav.Item>
                                <Nav.Item as="li" href="#action/3.2">
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Body style={{ textAlign: 'center' }}>
                                            <IconContext.Provider value={{ size: "5rem" }}>
                                                <div>
                                                    <FaMobileAlt />
                                                </div>
                                            </IconContext.Provider>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Animations</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Nav.Item>
                                <Nav.Item as="li" href="#action/3.3">
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Body style={{ textAlign: 'center' }}>
                                            <IconContext.Provider value={{ size: "5rem" }}>
                                                <div>
                                                    <FaLaptop />
                                                </div>
                                            </IconContext.Provider>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Animations</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Nav.Item>
                                <Nav.Item as="li" href="#action/3.4">
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Body style={{ textAlign: 'center' }}>
                                            <IconContext.Provider value={{ size: "5rem" }}>
                                                <div>
                                                    <FaMobileAlt />
                                                </div>
                                            </IconContext.Provider>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>Animations</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Nav.Item>
                            </Nav>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            <IconContext.Provider value={{ size: "1.5rem", className: "logo" }}>
                                <div>
                                    <FaFacebookSquare />
                                    <FaInstagramSquare />
                                    <FaLinkedin />
                                </div>
                            </IconContext.Provider>
                        </Nav.Link>
                        <Nav.Link href="#buttons">
                            <Button variant="outline-light">Give Us A Call</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
