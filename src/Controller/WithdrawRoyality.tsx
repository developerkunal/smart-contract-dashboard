import React from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
function WithdrawRoyality() {
    return (
        <Container className='mt-5'>
            <h3>Withdraw Royality</h3>
            <Form>
                <Row className='mb-3 ' sm={4}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                        Enter Amount To Withdraw
                    </Form.Label>
                    <Form.Control type="number" />
                </Form.Group></Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    );
}

export default WithdrawRoyality;
