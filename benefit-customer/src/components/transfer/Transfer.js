import React, { Component } from "react";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.benefitService = this.props.benefitService;
    this.benefit = this.props.benefit;
    this.web3 = this.props.web3;
    this.state = {
      account: undefined,
      destinationAddress: "",
      tokensToTransfer: 0,
    };
  }

  async componentDidMount() {
    let account = (await this.web3.eth.getAccounts())[0];
    this.setState({
      account: account,
    });
  }

  handleChangeDestinationAddress(event) {
    event.preventDefault();
    this.setState({
      destinationAddress: event.target.value,
    });
  }

  handleChangeTokens(event) {
    event.preventDefault();
    this.setState({
      tokensToTransfer: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let destinationAddress = this.state.destinationAddress;
    let tokensToTransfer = this.state.tokensToTransfer;
    this.transferTokens(destinationAddress, tokensToTransfer);
  }

  async transferTokens(_destinationAddress, _tokensToTransfer) {
    let decimals = await this.benefitService.getDecimals();
    let address = this.state.account;
    let destinationAddress = _destinationAddress;
    let tokensToTransfer = _tokensToTransfer * 10 ** decimals;
    await this.benefitService.transferTokens(
      tokensToTransfer,
      address,
      destinationAddress
    );
    this.setState({
      destinationAddress: "",
      tokensToTransfer: 0
    });
  }

  render() {
    return (
      <div className="mt-5 pt-5">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div className="form-group pt-3">
            <label htmlFor="destinationAddress" className="mb-2">Destination address:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="destinationAddress"
              value={this.state.destinationAddress}
              onChange={this.handleChangeDestinationAddress.bind(this)}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="tokensToTransfer" className="mb-2">Tokens to transfer:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="tokensToTransfer"
              value={this.state.tokensToTransfer}
              onChange={this.handleChangeTokens.bind(this)}
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

export default Transfer;
