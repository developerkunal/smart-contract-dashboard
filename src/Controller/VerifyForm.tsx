import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { tier1, tier2, tier3 } from '../assets/Whitelist/whitelist';
import { ethers } from 'ethers';
function VerifyForm() {

    const provider = new ethers
    .providers
    .JsonRpcProvider(`https://${process.env.REACT_APP_CHAIN_NAME}.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`);
    
    const [tier, setFound] = useState<string>('')
    
    const [addressfound, setaddressfound] = useState<string>('');
    
    const checkEns = async () => {
        const resolvedaddress = await provider.resolveName(addressfound)
        checkverify(resolvedaddress
            ?.toLowerCase());
    }

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
