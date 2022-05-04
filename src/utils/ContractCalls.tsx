import contractAbi from "../assets/ABI/ContractAbi.json"
import { ethers } from "ethers";
import axios from "axios";


const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
export const provider = new ethers
    .providers
    .JsonRpcProvider(`https://${process.env.REACT_APP_CHAIN_NAME}.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`);

const contractaddress = process.env.REACT_APP_CONTRACT_ADDRESS || '';

let rootHashes: any[] = [];
let tierTree: any[] = [];

async function updateData () {
    let tier1:any[]= []
    let tier2:any[]= []
    let tier3:any[]= []
    await axios.get('http://localhost:8080/tier1.json').then((response)=>{
        tier1.push(response.data)
    })
    await axios.get('http://localhost:8080/tier2.json').then((response)=>{
        tier2.push(response.data)
    })
    await axios.get('http://localhost:8080/tier3.json').then((response)=>{
        tier3.push(response.data)
    })

    let whiteListAddressesComp = tier1;
    let whiteListAddressesDisc = tier2;
    let whiteListAddresses = tier3;

let whiteList = [
    whiteListAddressesComp,
    whiteListAddressesDisc,
    whiteListAddresses,
];


whiteList.forEach((list) => {
    const leafNodes = list.map((addr) => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    tierTree.push(merkleTree);
    rootHashes.push(merkleTree.getRoot());

});
}
updateData()
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
console.log(rootHashes)
    const response = await contract
        .setWhitelistMerkleRoots([...rootHashes], {
            from: address,
        })
        .then((tx: any) => {
            return tx.transactionHash;
        })
    return response
};