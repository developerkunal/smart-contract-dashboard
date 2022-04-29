import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
function VerifyForm() {
    return (
        <Container className='mt-5'>
            <h1>Check WhiteList</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                        Enter Address
                    </Form.Label>
                    <Form.Control type="address" placeholder="Enter Wallet Address or ENS Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    );
}

export default VerifyForm;
