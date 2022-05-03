import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { setWhitelists } from '../utils/ContractCalls';
import Toasts from './Toasts'


function SetMercelTree() {
    const { account, library } = useWeb3React();
    const [shows, setShow] = useState<boolean>(false)
    const [messages, setMessage] = useState<string>('')
    const [Bigmessages, setBigmessage] = useState<string>('')
    const [bg, setBg] = useState<string>('')

    const setMercelRoot = async () => {
        await setWhitelists(account, library)
            .then((res: any) => {
                setShow(true);
                setMessage('SUCCESS');
                setBigmessage('You Have Withdrawal Successfully');
                setBg('Success')
                setTimeout(() => {
                    setShow(false)
                }, 4000)
            })
            .catch((err: any) => {
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
        <Button variant="primary" onClick={setMercelRoot}>
            Set Mercel Tree
        </Button>

    </>
    );
}

export default SetMercelTree;
