require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x${process.env.PrivateKeySwisstronik}`], //Your private key starting with "0x" 
    },
    polygon_mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.ApiKey}`	,
      accounts: [`0x${process.env.PrivateKeyMumbai}`]
   }
  }
};