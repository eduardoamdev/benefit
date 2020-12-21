import React, { Component } from "react";

class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.benefitService = this.props.benefitService;
    this.benefit = this.props.benefit;
    this.web3 = this.props.web3;
    this.state = {
      account: undefined,
      accountBalance: 0,
      accountDividends: 0,
    };
  }

  async componentDidMount() {
    let choosenAccount = (await this.web3.eth.getAccounts())[0];
    this.setState({
      account: choosenAccount,
    });
    let sold = this.benefit.Sold();
    let transfer = this.benefit.Transfer();
    sold.watch(
      ((err, result) => {
        this.getAccountBalance(choosenAccount);
      }).bind(this)
    );
    transfer.watch(
      ((err, result) => {
        this.getAccountBalance(choosenAccount);
      }).bind(this)
    );
    this.load(choosenAccount);
  }

  load(account) {
    this.getAccountBalance(account);
    this.getAccountDividends(account);
  }

  async getAccountBalance(_address) {
    let address = _address;
    let decimals = await this.benefitService.getDecimals();
    let balance = await this.benefitService.getAccountBalance(address);
    let balanceWithDecimals = balance / 10 ** decimals;
    this.setState({
      accountBalance: balanceWithDecimals,
    });
  }

  async getAccountDividends(_address) {
    let address = _address;
    let decimals = await this.benefitService.getDecimals();
    let dividends = await this.benefitService.getAccountDividends(address);
    let dividendsWithDecimals = dividends / 10 ** decimals;
    this.setState({
      accountDividends: dividendsWithDecimals,
    });
  }

  render() {
    return (
      <div className="mt-5 pt-5">
        <table className="table mt-5">
          <tbody>
            <tr>
              <td>
                <h5>Account:</h5>
              </td>
              <td>
                <h5>{this.state.account}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Balance:</h5>
              </td>
              <td>
                <h5>{this.state.accountBalance} BNF</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Dividends:</h5>
              </td>
              <td>
                <h5> {this.state.accountDividends} ETH</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AccountInfo;
