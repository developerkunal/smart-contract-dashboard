import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap'
function DataCard() {
    return (
        <Container className='mt-5'>
            <Card bg='danger' text='light' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header>Contract Details </Card.Header>
                    <ListGroup>
                        <ListGroup.Item variant="danger">Contract Name :- </ListGroup.Item>
                        <ListGroup.Item variant="danger">Contract Symbol :- </ListGroup.Item>
                        <ListGroup.Item variant="danger">Total NFT Minted :- </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DataCard;
