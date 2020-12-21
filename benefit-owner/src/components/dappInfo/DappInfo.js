import React, { Component } from "react";

class DappInfo extends Component {
  constructor(props) {
    super(props);
    this.benefitService = this.props.benefitService;
    this.benefit = this.props.benefit;
    this.state = {
      totalSupply: 0,
      soldTokens: 0,
      contractTokens: 0,
      contractBalance: 0,
      support: 0,
      tokenPrice: 0,
    };
  }

  async componentDidMount() {
    let sold = this.benefit.Sold();
    let transfer = this.benefit.Transfer();
    sold.watch(
      ((err, result) => {
        this.getContractTokens();
        this.getContractBalance();
        this.getSupport();
        this.getTokenPrice();
      }).bind(this)
    );
    transfer.watch(
      ((err, result) => {
        this.getContractTokens();
        this.getContractBalance();
        this.getSupport();
        this.getTokenPrice();
      }).bind(this)
    );
    this.load();
  }

  async getDecimals() {
    let contractDecimals = await this.benefitService.getDecimals();
    return contractDecimals;
  }

  async getTotalSupply() {
    let decimals = await this.getDecimals();
    let totalSupplyOfTokens = await this.benefitService.getTotalSupply();
    let totalSupplyUsingDecimals = totalSupplyOfTokens / 10 ** decimals;
    this.setState({
      totalSupply: totalSupplyUsingDecimals,
    });
  }

  async getContractTokens() {
    let decimals = await this.getDecimals();
    let contractAddress = await this.benefitService.contract.address;
    let supplyOfTokens = await this.benefitService.getAccountBalance(
      contractAddress
    );
    let supplyUsingDecimals = supplyOfTokens / 10 ** decimals;
    this.setState({
      contractTokens: supplyUsingDecimals,
    });
  }

  async getContractBalance() {
    let decimals = await this.getDecimals();
    let contractBalance = await this.benefitService.getContractBalance();
    let contractBalanceUsingDecimals = contractBalance / 10 ** decimals;
    this.setState({
      contractBalance: contractBalanceUsingDecimals,
    });
  }

  async getSupport() {
    let decimals = await this.getDecimals();
    let support = await this.benefitService.getSupport();
    let supportUsingDecimals = support / 10 ** decimals;
    this.setState({
      support: supportUsingDecimals,
    });
  }

  async getTokenPrice() {
    let decimals = await this.getDecimals();
    let tokenPrice = await this.benefitService.getTokenPrice();
    let tokenPriceUsingDecimals = tokenPrice / 10 ** decimals;
    this.setState({
      tokenPrice: tokenPriceUsingDecimals,
    });
  }

  load() {
    this.getTotalSupply();
    this.getContractTokens();
    this.getContractBalance();
    this.getSupport();
    this.getTokenPrice();
  }

  render() {
    return (
      <div className="mt-5 pt-5">
        <div className="pt-3">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <h5>Total supply:</h5>
                </td>
                <td>
                  <h5>{this.state.totalSupply} BNF</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Available tokens:</h5>
                </td>
                <td>
                  <h5>{this.state.contractTokens} BNF</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Contract balance:</h5>
                </td>
                <td>
                  <h5>{this.state.contractBalance} ETH</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Support:</h5>
                </td>
                <td>
                  <h5>{this.state.support} ETH</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Token price:</h5>
                </td>
                <td>
                  <h5>{this.state.tokenPrice} ETH</h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DappInfo;
