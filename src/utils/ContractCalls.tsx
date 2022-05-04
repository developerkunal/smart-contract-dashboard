import contractAbi from "../assets/ABI/ContractAbi.json"
import { ethers } from "ethers";
const tier1: any[] = Array.from('../../server/public/tier1.json')
const tier2: any[] = Array.from('../../server/public/tier2.json')
const tier3: any[] = Array.from('../../server/public/tier3.json')

const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
export const provider = new ethers
    .providers
    .JsonRpcProvider(`https://${process.env.REACT_APP_CHAIN_NAME}.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`);

const contractaddress = process.env.REACT_APP_CONTRACT_ADDRESS || '';



let whiteListAddressesComp = tier1;
let whiteListAddressesDisc = tier2;
let whiteListAddresses = tier3;

let whiteList = [
    whiteListAddressesComp,
    whiteListAddressesDisc,
    whiteListAddresses,
];

let rootHashes: any[] = [];
let tierTree: any[] = [];
whiteList.forEach((list) => {
    const leafNodes = list.map((addr) => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    tierTree.push(merkleTree);
    rootHashes.push(merkleTree.getRoot());

});
console.log(rootHashes)
export const Details = async (library: any) => {
    const contract = new ethers.Contract(
        contractaddress,
        contractAbi,
        library.getSigner()
    );
    const name = await contract.name()
        .then(async (value: string) => {
            return value;
        })
    const symbol = await contract.symbol()
        .then(async (value: string) => {
            return value;
        })
    const totalSupply = await contract.totalSupply()
        .then(async (value: any) => {
            return Number(value._hex);
        })
    return { name: name, symbol: symbol, totalSupply: totalSupply };
}

export const WithdrawRoyalityfromvault = async (address: any, library: any) => {
    const contract = new ethers.Contract(
        contractaddress,
        contractAbi,
        library.getSigner()
    );
    const response = await contract
        .withdrawRoyaltyToVault({
            from: address,
        }).then(async (tx: any) => {
            console.log(tx)
            return tx;
        })
    return response
}

export const Owner = async (library: any) => {
    const contract = new ethers.Contract(
        contractaddress,
        contractAbi,
        library.getSigner()
    );
    const owner = await contract.owner()
        .then(async (value: string) => {
            return value;
        })

    return { owner: owner };
}


export const setWhitelists = async (address: any, library: any) => {
    const contract = new ethers.Contract(
        contractaddress,
        contractAbi,
        library.getSigner()
    );

    const response = await contract
        .setWhitelistMerkleRoots([...rootHashes], {
            from: address,
        })
        .then((tx: any) => {
            return tx.transactionHash;
        })
    return response
};