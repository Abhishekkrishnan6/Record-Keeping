const {ethers} = require('ethers');
const transfer = require('./transfer.json');
const RPC = 'https://sepolia.infura.io/v3/d085ee1749bb40f4825dcec91b424252';

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = '0xA032AdD03faba2085BA81f5D0572a986A5e7708a';
const ABI= transfer.abi;

async function call(){
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )
    console.log(`The address of owner: ${await contract.callowner()}`); 

}
call();
