const {ethers} = require('ethers');
const transfer = require('./transfer.json');
const RPC = 'https://sepolia.infura.io/v3/d085ee1749bb40f4825dcec91b424252';

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = '0x92232E92868fe3598e58d52421dE557fD0f32F09';
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
