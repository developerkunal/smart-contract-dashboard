import React, { useEffect, useState } from 'react';
import { Container,Form } from 'react-bootstrap';
import axios from 'axios';

const AddressesView: React.FC = () => {
    const [tier1, setTier1] = useState<Array<string>>([''])
    const [tier2, setTier2] = useState<Array<string>>([''])
    const [tier3, setTier3] = useState<Array<string>>([''])

    useEffect(() => {
        const update = async () => {
            await axios.get('http://localhost:8080/tier1.json')
                .then(response => {
                    setTier1(response.data);
                });
            await axios.get('http://localhost:8080/tier2.json')
                .then(response => {
                    setTier2(response.data);
                });
            await axios.get('http://localhost:8080/tier3.json')
                .then(response => {
                    setTier3(response.data);
                });
        }
        update()
    }, [tier3])

    return (
        <Container className='mt-5'>
            <Form.Label>WhiteList Tier1</Form.Label>
        <Form.Control
        as="textarea"
        placeholder="Leave a comment here"
        style={{ height: '100px' }}
        value={tier1.join("\n").split(/\r?\n/).filter(line => line.trim() !== "").join("\n")}
        disabled
        />
           <Form.Label>WhiteList Tier2</Form.Label>
        <Form.Control
        as="textarea"
        placeholder="Leave a comment here"
        style={{ height: '100px' }}
        value={tier2.join("\n").split(/\r?\n/).filter(line => line.trim() !== "").join("\n")}
        disabled
        />
           <Form.Label>WhiteList Tier3</Form.Label>
        <Form.Control
        as="textarea"
        placeholder="Leave a comment here"
        style={{ height: '100px' }}
        value={tier3.join("\n").split(/\r?\n/).filter(line => line.trim() !== "").join("\n")  }
        disabled
        />
        </Container>
    );
}

export default AddressesView;
