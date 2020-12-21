export class BenefitService {
  constructor(contract) {
    this.contract = contract;
  }

  async getDecimals() {
    let decimals = (await this.contract.decimals()).toNumber();
    return decimals;
  }

  async getDividendPerToken() {
    let dividendPerToken = (await this.contract.dividendPerToken()).toNumber();
    return dividendPerToken;
  }

  async getTotalSupply() {
    let totalSupply = (await this.contract.totalSupply()).toNumber();
    return totalSupply;
  }

  async getSoldTokens() {
    let soldTokens = (await this.contract.soldTokens()).toNumber();
    return soldTokens;
  }

  async getSupport() {
    let support = (await this.contract.support()).toNumber();
    return support;
  }

  async getContractBalance() {
    let contractBalance = (await this.contract.contractBalance()).toNumber();
    return contractBalance;
  }

  async getTokenPrice() {
    let tokenPrice = (await this.contract.price()).toNumber();
    return tokenPrice;
  }

  async getAccountBalance(_address) {
    let address = _address.toString();
    let accountBalance = await this.contract.balanceOf(address);
    let accountBalanceNumber = Number(accountBalance);
    return accountBalanceNumber;
  }

  async beginSold(_address, _support) {
    let address = _address;
    let support = _support;
    await this.contract.beginSold(support, { from: address, value: support });
  }

  async extractEther(_address, _ether) {
    let address = _address;
    let ether = _ether;
    await this.contract.extractEtherToInvest(ether, { from: address });
  }

  async endSold(_address) {
    let address = _address;
    await this.contract.endSold({ from: address });
  }

  async creditEther(_address, _ether) {
    let address = _address;
    let ether = _ether;
    await this.contract.creditEtherFromInvestings(ether, { from: address, value: ether });
  }
}
