const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("hello world");
  await greeter.deployed();
  console.log("contract deployed to " , greeter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
