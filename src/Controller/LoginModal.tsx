import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { LoginProps } from '../Model/TypesUse';
import coinbase from '../assets/img/coinbase.png'
import metamask from '../assets/img/metamask.png'
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { connectors } from '../utils/Connectors'
import {useNavigate } from 'react-router-dom';

function LoginModal(props: LoginProps) {
  const { activate, active } = useWeb3React();
  const navigate=useNavigate()

  const handleInjected = async() => {

    if (typeof window.ethereum !== "undefined") {
      await activate(connectors.injected);
      localStorage.setItem("provider", "injected");
      props.onHide();
      navigate('/dashboard')
    } else {
      window.location.replace(
        "https://metamask.app.link/dapp/mint.staydao.io/"
      );
    }
  };
  const handleCoinbase = async() => {
    await activate(connectors.coinbaseWallet);
    localStorage.setItem("provider", "coinbaseWallet");
    props.onHide();
    navigate('/dashboard')
  };

  useEffect( () => {
    if (!active) {
      const cachedProvider: any = localStorage.getItem("provider");
      if (cachedProvider) {
        activate(connectors.cachedProvider);
        navigate('/dashboard')
      }
    }
  }, [active,activate,navigate]);
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Web3 Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-grid gap-2">

          <Button variant="danger" size="lg" onClick={handleCoinbase}>
            <img src={coinbase} alt='coinbase' width={36} height={36} />
            Coinbase
          </Button>
          <Button variant="danger" size="lg" onClick={handleInjected}>
            <img src={metamask} alt='metamask' width={36} height={36} />
            Metamask
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default LoginModal;
