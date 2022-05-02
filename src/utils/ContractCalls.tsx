import contractAbi from "../assets/ABI/ContractAbi.json"
import { ethers } from "ethers";


const contractaddress = process.env.REACT_APP_CONTRACT_ADDRESS || '';

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
    const response = await contract.withdrawRoyaltyToVault({
        from: address,
    }).then(async (tx: any) => {
        console.log(tx)
        return tx;
    })
    return response
}