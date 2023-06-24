
import './App.css';
import { useState, useEffect } from 'react';
import {ethers} from 'ethers';
function App() {
  const {ethereum} = window;
  const[address, setAddress] = useState('connet wallet');
  const[balance,setbalance] = useState('');
 
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
      </header>
    </div>
  );
}

export default App;
