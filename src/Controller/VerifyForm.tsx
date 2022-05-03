import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { provider } from '../utils/ContractCalls'
function VerifyForm() {
    const [tier1, setTier1] = useState<Array<string>>([''])
    const [tier2, setTier2] = useState<Array<string>>([''])
    const [tier3, setTier3] = useState<Array<string>>([''])


    const [tier, setFound] = useState<string>('')

    const [addressfound, setaddressfound] = useState<string>('');

    const checkEns = async () => {
        const resolvedaddress = await provider
            .resolveName(addressfound)
        checkverify(resolvedaddress
            ?.toLowerCase());
    }
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


    const checkverify = async (address: any) => {
        if (
            tier1
                .includes(address)) {
            setFound('is Tier 1 Whitelisted')
        } else if (
            tier2
                .includes(address)) {
            setFound('is Tier 2 Whitelisted')
        } else if (
            tier3
                .includes(address)) {
            setFound('is Tier 3 Whitelisted')
        } else {
            setFound('is Not Whitelisted')
        }
    }

    function handleChange(event: any) {
        setaddressfound(event.target.value);
    }
    return (
        <Container className='mt-5'>
            <h1>Check WhiteList</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                        Enter Address
                    </Form.Label>
                    <Form.Control type="address" placeholder="Enter Wallet Address or ENS Address" onChange={handleChange} value={addressfound} />
                </Form.Group>
                <Button variant="primary" onClick={checkEns}>
                    Submit
                </Button>
            </Form>
            {tier && <p>Your Address {tier}</p>}
        </Container>

    );
}

export default VerifyForm;
