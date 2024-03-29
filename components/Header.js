import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import FeedbackBar from './FeedbackBar';

const Header = () => {
    return (
        <>
            {/* <FeedbackBar /> */}
            <Navbar variant='dark' sticky="top" expand="lg" style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Navbar.Brand href="/">RL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link> */}
                        <Nav.Link href='/work'>My Work</Nav.Link>
                        <Nav.Link href="/contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;