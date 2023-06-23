require("@nomiclabs/hardhat-waffle");
task("accounts","print the list of accounts",async (taskArgs,hre)=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account)
     const address = await account.getAddress();
     const balance = await account.getBalance();
    console.log(address + " : " + hre.ethers.utils.formatEther(balance));
  }
});



module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks:{
hardhat: {},
sepolia: {
      url: "https://sepolia.infura.io/v3/92749f7f986f4e64b94322c9258968c2",
      accounts: ["8719dcd276b7ac19b8ee5c2d29d60aa1c4c36cb135940fb0d82359c5605ddae2"]
    },

    
  
}

  
};
