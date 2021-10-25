const main = async () => {
  // Compile smart contract
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  // Deploy it to local blockchain
  const waveContract = await waveContractFactory.deploy();

  // Log address, once the contract is deployed
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
