import './style.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form'


function Header() {
    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>Cocktails bar</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mt-3">
                            <Link to='/cocktails'>
                                <h2 className="fs-6">Cocktails</h2>
                            </Link>


                            <Link to='/drinks'>
                                <h2 className="fs-6">Drinks</h2>
                            </Link>


                            <Form className="mt-2">
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Dark theme"
                                />
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment>



    )
}

export default Header;
