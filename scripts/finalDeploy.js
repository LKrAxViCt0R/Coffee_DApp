const hre = require("hardhat");

async function main() {
    
    const coffee = await hre.ethers.getContractFactory("Coffee");
    const contract = await coffee.deploy(); //instance of contract
  
    await contract.deployed();
    console.log("Address of contract: ", contract.address);
}