export { };

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}
declare global {
  interface ProcessEnv {
    REACT_APP_CHAIN_NAME: string;
    REACT_APP_INFURA_KEY: string;
    REACT_APP_CONTRACT_ADDRESS: string;
  }
}