import React, { useEffect, useState } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { Details } from '../utils/ContractCalls';
import { useWeb3React } from '@web3-react/core';

const DataCard: React.FC = () => {
    const { library } = useWeb3React();
    const [name, setName] = useState<string>('');
    const [symbol, setSymbol] = useState<string>('');
    const [numberMint, setNumberMint] = useState<number>()

    useEffect(() => {
        const Data = async () => {
            const data = await Details(library);
            setName(data.name);
            setSymbol(data.symbol);
            setNumberMint(data.totalSupply);
        }
        Data();
    }, [library, name, symbol, numberMint])

    return (
        <Container className='mt-5'>
            <Card bg='danger' text='light' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header>Contract Details </Card.Header>
                    <ListGroup>
                        <ListGroup.Item variant="danger">Contract Name :- {name}</ListGroup.Item>
                        <ListGroup.Item variant="danger">Contract Symbol :- {symbol}</ListGroup.Item>
                        <ListGroup.Item variant="danger">Total NFT Minted :- {numberMint} </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default DataCard;
