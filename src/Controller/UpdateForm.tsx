import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Owner } from '../utils/ContractCalls';
import { useWeb3React } from '@web3-react/core';
import SetMercelTree from './SetMercelTree'
function UpdateForm() {
    const {account,library } = useWeb3React();
    const [file, setFile] = useState<any>('');
    const [file2, setFile2] = useState<any>('')
    const [file3, setFile3] = useState<any>('')
    const [fileupload, setUploadedFile] = useState<string>('')
    const [owner,setOwner] = useState<string>('')
    const field1 = (e: any) => {
        setFile(e.target.files[0]);
    };
    const field2 = (e: any) => {
        setFile2(e.target.files[0]);

    };
    const filed3 = (e: any) => {
        setFile3(e.target.files[0]);

    };
    const onSubmit = async (e: any) => {if(account===owner){
        e.preventDefault();
        const formData = new FormData();
        formData.append('tier1', file);
        formData.append('tier2', file2);
        formData.append('tier3', file3);
        try {
            const res = await axios.post('http://localhost:8080/upload-csv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            if (res) {
                setUploadedFile('Uploaded Success');
            }
        } catch (err: any) {
            if (err.response.status === 500) {
                console.log(err.response)
            } else {
                console.log(err.response);
            }
            setUploadedFile('Uploaded Failed');
        }}
        else{
            setUploadedFile('You are not owner');
        }
    };

    useEffect(() => {
        const Data = async () => {
            const data = await Owner(library);
            setOwner(data.owner)
        }
        Data();
    }, [library, owner])

    return (
        <Container className='mt-5'>
            <h1>
                Update WhiteList
            </h1>
            <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                        Select Tier1 Whitelist File
                    </Form.Label>
                    <Form.Control type="file" name='tier1' onChange={field1} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                        Select Tier2 Whitelist File
                    </Form.Label>
                    <Form.Control type="file" name='tier2' onChange={field2} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                        Select Tier3 Whitelist File
                    </Form.Label>
                    <Form.Control type="file" name='tier3' onChange={filed3} />
                </Form.Group>

                <Button variant="primary" onClick={onSubmit}>
                    Submit
                </Button>{'  '}
                <SetMercelTree/>
            </Form>
            {fileupload && <p>{fileupload}</p>}
        </Container>

    );
}

export default UpdateForm;
