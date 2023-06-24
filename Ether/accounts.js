const {ethers,JsonRpcProvider} = require('ethers');
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

async function call(){

const bal = await provider.getBalance(account);
// console.log(ethers.utils.formatEther(bal));
//console.log(await wallet.getAddress())
//console.log(ethers.utils.formatEther(await wallet.getBalance()))
console.log(account, ":" ,ethers.utils.formatEther(bal));
console.log(await wallet.getAddress(), ":" , ethers.utils.formatEther(await wallet.getBalance()))
const trans = await wallet.sendTransaction(
   { to:account,
    value: ethers.utils.parseEther('0.001')
})
await trans.wait();
const bal1 = await provider.getBalance(account);
console.log(account, ":" ,ethers.utils.formatEther(bal1));
console.log(await wallet.getAddress(), ":" , ethers.utils.formatEther(await wallet.getBalance()))


}
call();