require("@nomicfoundation/hardhat-toolbox");

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
const {
  PRIVATE_KEY_LOCAL,
  PRIVATE_KEY,
  PRIVATE_KEY_ARBITRUM,
  API_KEY_MUMBAI,
  API_KEY_ARBITRUM,
  API_KEY_BSCTESTNET,
  PRIVATE_KEY_BSCSCAN,
  API_KEY_BSCSCAN,
  PRIVATE_KEY_BSCSCAN_TEST,
} = process.env;

module.exports = {
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: [PRIVATE_KEY]
    },
    avalanchetestnet: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [PRIVATE_KEY]
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc/",
      accounts: [PRIVATE_KEY]
    },
    dev: {
      url: "http://127.0.0.1:7545",
      accounts: [PRIVATE_KEY]
    },
  },

  etherscan: {
    apiKey: {
      bsc: API_KEY_BSCSCAN,
      bscTestnet: API_KEY_BSCTESTNET,
      polygonMumbai: API_KEY_MUMBAI,
      arbitrumOne: API_KEY_ARBITRUM,
    }
  },

  solidity: "0.8.18",
};
