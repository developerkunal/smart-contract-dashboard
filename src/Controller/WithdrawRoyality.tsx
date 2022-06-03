import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { WithdrawRoyalityfromvault } from '../utils/ContractCalls';
import Toasts from './Toasts'
function WithdrawRoyality() {
    const { account, library } = useWeb3React();
    const [shows, setShow] = useState<boolean>(false)
    const [messages, setMessage] = useState<string>('')
    const [Bigmessages, setBigmessage] = useState<string>('')
    const [bg, setBg] = useState<string>('')
    const withdraw = async () => {
        await WithdrawRoyalityfromvault(account, library)
            .then((res) => {
                setShow(true);
                setMessage('SUCCESS');
                setBigmessage('You Have Withdrawal Successfully');
                setBg('Success')
                setTimeout(() => {
                    setShow(false)
                }, 4000)
            })
            .catch((err) => {
                setShow(true);
                setMessage('ERROR');
                setBigmessage('Only Onwer Can Do the Request');
                setBg('danger')
                setTimeout(() => {
                    setShow(false)
                }, 4000)
            })
            .finally(() => {

            });
    }
    return (<>
        <Toasts show={shows} message={messages} Bigmessage={Bigmessages} bg={bg} />
        <Container className='mt-5'>
            <h3>Withdraw Royality</h3>
            <Form>

                <Button variant="primary" onClick={withdraw}>
                    Withdraw Royality
                </Button>
            </Form>
        </Container>
    </>
    );
}

export default WithdrawRoyality;
