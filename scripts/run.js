const main = async () => {
  // Get wallet address of contract owner
  const [owner, randomPerson] = await hre.ethers.getSigners();

  // Compile smart contract
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  // Deploy it to local blockchain
  const waveContract = await waveContractFactory.deploy();

  // Wait for contract to be deployed
  await waveContract.deployed();

  // Log contract address and contract owner address
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  // Manually call functions
  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  const waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
