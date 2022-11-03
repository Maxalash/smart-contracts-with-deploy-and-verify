const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const {NFT_COLLECTION, REWARDS_TOKEN } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const nftCollection = NFT_COLLECTION;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const reward_token = REWARDS_TOKEN;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("StakingContract");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    nftCollection,
    reward_token
  );

  // print the address of the deployed contract
  console.log(
    "Vintage Car Staking Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//npx hardhat verify --network goerli 0x8192F67e49EF2Ccc012B719ECeA6EABa87Acc4D0 "0x00f31c4968eaaa7d549E4fA40E2a6325fB74E749" "0xfD8737409252712A136Bb15cBce10697847d5519"
//npx hardhat run scripts/staking_deploy.js --network goerli
//npx hardhat compile