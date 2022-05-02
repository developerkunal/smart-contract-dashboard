import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import LoginModal from '../Controller/LoginModal';


const  Login: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
              <Button  onClick={() => setModalShow(true)}>
                Login
              </Button>
              <LoginModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
            </div>
          </Col>
        </Row>
      </Form>


    </Container>
  );
}

export default Login;