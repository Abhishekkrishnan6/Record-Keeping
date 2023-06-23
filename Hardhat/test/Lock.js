const {expect , assert} = require("chai");
const {ethers} = require("hardhat");
describe("Greeter",async function(){
  let data;

  beforeEach(async()=>{
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("hello world");
    await greeter.deployed();
    data = greeter;
  })
  it("should return the new greeting once its changed", async function(){
    expect(await data.greet()).to.equal("hello world");

  });


  it("should assign new greeting once its changed", async function(){
    
    const setGreetingTx = await data.setGreeting("hello ");
    await setGreetingTx.wait();
    
    
    //expect(await data.greet()).to.equal("hello ");
    assert.equal(await data.greet(),"hello ");
  });


})