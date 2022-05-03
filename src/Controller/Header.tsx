import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import {useNavigate } from 'react-router-dom';

function Header() {
    const {deactivate} = useWeb3React()
    const navigate=useNavigate()

    const handleDisconnect = async() =>{
        await deactivate()
        localStorage.removeItem('provider')
        navigate('/login')
      }
    
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>


                <Link className='navbar-brand' to="/dashboard">
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
                        
                        <Link className='nav-link' to="/viewaddresses">
                            View Addresses
                        </Link>

                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} onClick={handleDisconnect}>
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
