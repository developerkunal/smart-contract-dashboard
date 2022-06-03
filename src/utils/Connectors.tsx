import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const walletlink = new WalletLinkConnector({
  url: `https://${process.env.REACT_APP_CHAIN_NAME}.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  appName: "stayDAO",
});

export const connectors = {
  injected: injected,
  coinbaseWallet: walletlink,
  cachedProvider: injected || walletlink
};