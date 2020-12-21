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

  async buyTokens(_numTokens, _from, _value) {
    let tokens = _numTokens;
    let account = _from;
    let ether = _value;
    await this.contract.buy(tokens, { from: account, value: ether });
  }

  async transferTokens(_numTokens, _from, _to) {
    let addressTo = _to;
    let tokens = _numTokens;
    let addressFrom = _from;
    await this.contract.transfer(addressTo, tokens, { from: addressFrom });
  }

  async redeemTokens(_address, _tokens) {
    let address = _address;
    let tokensToRedeem = _tokens;
    await this.contract.redeemTokens(tokensToRedeem, { from: address });
  }

  async getAccountBalance(_address) {
    let address = _address.toString();
    let accountBalance = await this.contract.balanceOf(address);
    let accountBalanceNumber = Number(accountBalance);
    return accountBalanceNumber;
  }

  async getAccountDividends(_address) {
    let address = _address.toString();
    let accountDividends = await this.contract.consultAccountDividends({
      from: address,
    });
    let accountDividendsNumber = Number(accountDividends);
    return accountDividendsNumber;
  }
}
