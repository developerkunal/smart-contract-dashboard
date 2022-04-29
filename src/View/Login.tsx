import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
function Login() {
  return (
    <Container>

      <div className='centerbox'>
      </div>

      <Form >
        <Row className='d-flex justify-content-center align-items-center'>
          <Col className='md-4'>
            <h3>
              Sign In
            </h3>
            <div className="mb-3" >
              <Button >
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Form>


    </Container>
  );
}

export default Login;
