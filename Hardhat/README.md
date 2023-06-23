# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

step  1: npm install --save-dev hardhat        
step  2: npx hardhat   
          then choose a option from given below
step  3: then install dependicies 
          npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers            
now simple hardhet project folder is ready 


configuration ====
1. from npx hardhat accounts we can import a account for hardhat network in ur metamask by using private key
2. after importing we have to connet to localhost to get 10000eth for testing 

3. give the url localhost after running  npx hardhat account here we get sih id also

to run local host just type npx hardhat node

             
             to compile a contract just type npx hardhat compile





             await ethers.getSigners();
             ethers.getContractFactory("Greeter");



             // deploy a contract
             1. const Greeter = await ethers.getContractFactory("Greeter");
             2. const greeter = await Greeter.deploy("hello web");
             3. now we can use the functanitaly to all info from that greeter deployed contract

             eg = greeter.address
              await greeter.gree();

            await  greeter.setGreeting("hi");
