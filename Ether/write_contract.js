const {ethers} = require('ethers');
const transfer = require('./transfer.json');
const RPC = 'https://sepolia.infura.io/v3/d085ee1749bb40f4825dcec91b424252';
const account = '0x7bc7f3Da34a775D2E827bCbd1d868F61682fA808';
const privatekey ='8719dcd276b7ac19b8ee5c2d29d60aa1c4c36cb135940fb0d82359c5605ddae2';
const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const wallet = new ethers.Wallet(
    privatekey,
    provider
);


const contractAddress = '0xA032AdD03faba2085BA81f5D0572a986A5e7708a';
const ABI= transfer.abi;

async function call(){
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        wallet
    )
    console.log(`${account} : ${ethers.utils.formatEther(await provider.getBalance(account))}`); 
    console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`); 

    const tx = await contract._transfer(account,{
        value: ethers.utils.parseEther('0.3')
    });


 await tx.wait();

 console.log(`${account} : ${ethers.utils.formatEther(await provider.getBalance(account))}`); 
 console.log(`${await wallet.getAddress()} : ${ethers.utils.formatEther(await wallet.getBalance())}`); 
 console.log(tx);


}
call();
