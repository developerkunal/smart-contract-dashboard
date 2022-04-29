import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>


                <Link className='navbar-brand' to="/">
                    Smart Contract Dashboard
                </Link>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/update">

                            Update Whitelist

                        </Link>


                        <Link className='nav-link' to="/verify">
                            Verify whitelist
                        </Link>


                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
