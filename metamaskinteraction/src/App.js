import './App.css';
import { useState, useEffect } from 'react';
import {Wallet, ethers} from 'ethers';
import contract from './Greeter.json';
function App() {
  const {ethereum} = window;
  const[address, setAddress] = useState('connet wallet');
  const[balance,setbalance] = useState('');
  const[greeting,setgreeting] = useState('');
  const contractAddress = "0x05c46645b125b79d2635C83340dF92196DCE4313";
  
  
  const sepoliaprovider = new ethers.providers.JsonRpcProvider(
    "https://sepolia.infura.io/v3/92749f7f986f4e64b94322c9258968c2"
  )
  const walletprovider = new ethers.providers.Web3Provider(
    ethereum
  )
  const getcontractdata = new ethers.Contract(
    contractAddress,
    contract.abi,
    sepoliaprovider
  )

  const sendcontracttx = new ethers.Contract(
    contractAddress,
     contract.abi,
   (walletprovider.getSigner())

  )


  useEffect(()=>{
  ethereum.on("accountsChanged", (accounts) =>{
    setAddress(accounts[0]);

    const getbal = async()=>{
      const balance = await ethereum.request({method: "eth_getBalance",
    params: [accounts[0], 'latest']
    })
    
    setbalance(ethers.utils.formatEther(balance));
    }
    getbal();

  })


  ethereum.on("chainChanged", (chain) =>{ 
    console.log(chain);
  })

})
const getgreeting = async()=>{
  const data = await getcontractdata.greet();
  setgreeting(data);
}

const setgreet = async()=>{
  const senddata = await sendcontracttx.setGreeting("namaste india");
  setgreeting(senddata);
}
const changeChain = async()=>{
  await ethereum.request({method: "wallet_addEthereumChain",
  params: [
    {
      chainId: `0x13881`,
      chainName: "polygon Testnet",
      nativeCurrency: {
        name: "MATIC",
        Symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  
  
  }
    
  ]


})
}

const sendTx = async ()=>{
  await ethereum.request({method: "eth_sendTransaction",
 params: [
  {
    to:'0x7bc7f3Da34a775D2E827bCbd1d868F61682fA808',
    from: address,
    value:`0x${(parseInt(ethers.utils.parseEther('0.1'))).toString(16)}`,
    chainId: '0xaa36a7',
  }
 ]

})
}

  const requestAccount = async ()=>{
//   await ethereum.request({method: "wallet_requestPermissions",
//  params: [{
//   eth_accounts: {}
//  }]

// });
const accounts = await ethereum.request({method: "eth_requestAccounts"})
setAddress(accounts[0]);
 
const balance = await ethereum.request({method: "eth_getBalance",

params: [accounts[0], 'latest']
})

setbalance(ethers.utils.formatEther(balance));


}
  return (
    <div className="App">
      <header className="App-header">
       <a className='App-link' onClick={requestAccount}>
        {address}


       </a>
       <a className='App-link' >
        {balance}


       </a>

       <a className='App-link' onClick={changeChain} >
        change test net


       </a>

       <a className='App-link' onClick={sendTx} >
        send transaction 


       </a>







       <a className='App-link'
       onClick={getgreeting}
       >
       get greeting


       </a>

       <a className='App-link'  
       onClick={setgreet}
       >
       set greeting


       </a>

       <a className='App-link'  >
        {greeting}


       </a>
      </header>
    </div>
  );
}

export default App;


//0x05c46645b125b79d2635C83340dF92196DCE4313