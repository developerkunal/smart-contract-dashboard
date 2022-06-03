import React from "react";
import { Toast, ToastContainer } from 'react-bootstrap'
import { ToastProps } from '../Model/TypesUse'
function Toasts(props: ToastProps) {

    return (
        <ToastContainer position='bottom-center'>
            <Toast show={props.show} autohide bg={props.bg}>
                <Toast.Header>
                    <strong className="me-auto">{props.message}</strong>
                </Toast.Header>
                <Toast.Body>{props.Bigmessage}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default Toasts;