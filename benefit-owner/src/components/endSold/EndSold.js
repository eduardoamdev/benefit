import React, { Component } from "react";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.benefitService = this.props.benefitService;
    this.benefit = this.props.benefit;
    this.web3 = this.props.web3;
    this.state = {
      account: undefined,
    };
  }

  async componentDidMount() {
    let account = (await this.web3.eth.getAccounts())[0];
    this.setState({
      account: account,
    });
  }

  async handleClickEvent(event) {
    event.preventDefault();
    let address = this.state.account;
    await this.benefitService.endSold(address);
  }

  render() {
    return (
      <div className="mt-5 pt-5">
        <div className="mt-5 pt-5">
          <button
            type="submit"
            className="btn btn-danger"
            onClick={this.handleClickEvent.bind(this)}
          >
            Liquidate contract
          </button>
        </div>
      </div>
    );
  }
}

export default Transfer;
