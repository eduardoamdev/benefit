import React, { Component } from "react";

class Redeem extends Component {
  constructor(props) {
    super(props);
    this.benefitService = this.props.benefitService;
    this.benefit = this.props.benefit;
    this.web3 = this.props.web3;
    this.state = {
      account: undefined,
      tokensToRedeem: 0,
    };
  }

  async componentDidMount() {
    let account = (await this.web3.eth.getAccounts())[0];
    this.setState({
      account: account,
    });
  }

  handleChangeTokensToRedeem(event) {
    event.preventDefault();
    this.setState({
      tokensToRedeem: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let tokensToRedeem = this.state.tokensToRedeem;
    this.redeemTokens(tokensToRedeem);
  }

  async redeemTokens(_tokensToRedeem) {
    let decimals = await this.benefitService.getDecimals();
    let address = this.state.account;
    let tokensToRedeem = _tokensToRedeem * 10 ** decimals;
    await this.benefitService.redeemTokens(address, tokensToRedeem);
  }

  render() {
    return (
      <div className="mt-5 pt-5">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div className="form-group mb-4 pt-5">
            <label htmlFor="tokensToRedeem" className="mb-2">How many tokens do you want to redeem?</label>
            <input
              type="text"
              className="form-control"
              id="tokensToRedeem"
              value={this.state.tokensToRedeem}
              onChange={this.handleChangeTokensToRedeem.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Confirm
          </button>
        </form>
      </div>
    );
  }
}

export default Redeem;
