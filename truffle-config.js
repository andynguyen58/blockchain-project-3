require("dotenv").config();
// require('dotenv-expand')(require('dotenv').config());

const HDWalletProvider = require("truffle-hdwallet-provider");

const fs = require("fs");

const infuraKey = fs.readFileSync(".infuraKey").toString().trim();
const mnemonic = fs.readFileSync(".mnemonic").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      websockets: true,
    },

    goerli: {
      networkCheckTimeout: 10000, // ms
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://goerli.infura.io/v3/${infuraKey}`
        ),
      gas: 6721975,
      gasPrice: 20000000000,

      network_id: "*",
      confirmations: 0,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "^0.4.23",    // Fetch exact version from solc-bin (default: truffle's version)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: true,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
