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
    const block = await provider.getBlockNumber();
    //console.log(`The address of owner: ${await contract.callowner()}`); 
    
//    const transaction = await contract.queryFilter('transactions',block-500,block)
 const trans = contract.filters.transactions('0x0Cc3460aB056c6aA2F8169Fc8BcbF0d30aa1a762',null);  
const transaction = await contract.queryFilter(trans)
   transaction.map((item)=>{
    console.log(item.args.to , ":", ethers.utils.formatEther(item.args.amount));
   })
   
   


}
call();
