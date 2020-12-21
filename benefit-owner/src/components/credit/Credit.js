import React, { Component } from "react";

class Credit extends Component {
  constructor(props) {
    super(props);
    this.benefitService = this.props.benefitService;
    this.benefit = this.props.benefit;
    this.web3 = this.props.web3;
    this.state = {
      account: undefined,
      etherToCredit: 0
    };
  }

  async componentDidMount() {
    let account = (await this.web3.eth.getAccounts())[0];
    this.setState({
      account: account,
    });
  }

  handleChangeEther(event) {
    event.preventDefault();
    this.setState({
      etherToCredit: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let etherToCredit = this.state.etherToCredit;
    this.beginSold(etherToCredit);
  }

  async beginSold(_ether) {
    let address = this.state.account;
    let ether = _ether;
    await this.benefitService.creditEther(
      address,
      ether
    );
    this.setState({
      etherToCredit: 0
    })
  }

  render() {
    return (
      <div className="mt-5 pt-5">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div className="form-group pt-5 mb-4">
            <label htmlFor="etherToCredit" className="mb-2">Ether to credit:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="etherToCredit"
              value={this.state.etherToCredit}
              onChange={this.handleChangeEther.bind(this)}
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

export default Credit;
