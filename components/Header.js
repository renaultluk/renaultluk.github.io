import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar sticky="top" expand="lg" style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Navbar.Brand href="/">RL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                    <NavDropdown title="My Work" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Product Design & Embedded Systems</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Graphic Design & Digital Marketing</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;