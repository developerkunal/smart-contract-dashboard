import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
function UpdateForm() {
    return (
        <Container className='mt-5'>
            <h1>Update WhiteList</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                        RootHash1
                    </Form.Label>
                    <Form.Control type="hash1" placeholder="Enter First Hash" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                        RootHash2
                    </Form.Label>
                    <Form.Control type="hash2" placeholder="Enter Second Hash" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                        RootHash3
                    </Form.Label>
                    <Form.Control type="hash3" placeholder="Enter Third Hash" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Select Updated Whitelist File</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    );
}

export default UpdateForm;
