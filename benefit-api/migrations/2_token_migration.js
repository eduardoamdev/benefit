var Token = artifacts.require("./Token.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Token, { from: accounts[0] });
};
