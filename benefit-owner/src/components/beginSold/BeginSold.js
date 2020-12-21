import React, { Component } from "react";

class BeginSold extends Component {
  constructor(props) {
    super(props);
    this.benefitService = this.props.benefitService;
    this.benefit = this.props.benefit;
    this.web3 = this.props.web3;
    this.state = {
      account: undefined,
      support: 0
    };
  }

  async componentDidMount() {
    let account = (await this.web3.eth.getAccounts())[0];
    this.setState({
      account: account,
    });
  }

  handleChangeSupport(event) {
    event.preventDefault();
    this.setState({
      support: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let supportEther = this.state.support;
    this.beginSold(supportEther);
  }

  async beginSold(_support) {
    let address = this.state.account;
    let dappSupport = _support;
    await this.benefitService.beginSold(
      address,
      dappSupport
    );
    this.setState({
      support: 0
    })
  }

  render() {
    return (
      <div className="mt-5 pt-5">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div className="form-group pt-5 mb-4">
            <label htmlFor="support" className="mb-2">Support:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="support"
              value={this.state.support}
              onChange={this.handleChangeSupport.bind(this)}
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

export default BeginSold;
