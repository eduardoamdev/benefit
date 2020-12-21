import React, { Component } from "react";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.benefitService = this.props.benefitService;
    this.benefit = this.props.benefit;
    this.web3 = this.props.web3;
    this.state = {
      account: undefined,
      tokensToBuy: 0,
    };
  }

  async componentDidMount() {
    let account = (await this.web3.eth.getAccounts())[0];
    this.setState({
      account: account,
    });
  }

  handleChangeEvent(event) {
    event.preventDefault();
    this.setState({
      tokensToBuy: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let tokens = this.state.tokensToBuy;
    this.buyTokens(tokens);
  }

  async buyTokens(numTokens) {
    let tokenPrice = await this.benefitService.getTokenPrice();
    let decimals = await this.benefitService.getDecimals();
    let price = tokenPrice * numTokens;
    let tokens = numTokens * 10 ** decimals;
    let account = this.state.account;
    await this.benefitService.buyTokens(tokens, account, price);
    this.setState({
      tokensToBuy: 0,
    });
  }

  render() {
    return (
      <div className="mt-5 pt-5">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div className="form-group mb-4 pt-5">
            <label htmlFor="tokensToBuy" className="mb-2">How many tokens do you want to buy?</label>
            <input
              type="text"
              className="form-control"
              id="tokensToBuy"
              value={this.state.tokensToBuy}
              onChange={this.handleChangeEvent.bind(this)}
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

export default Buy;
