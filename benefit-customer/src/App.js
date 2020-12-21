import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import BenefitContract from "./benefit";
import { Switch, Route } from "react-router-dom";
import { BenefitService } from "./benefitService";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import Buy from "./components/buy/Buy";
import DappInfo from "./components/dappInfo/DappInfo";
import AccountInfo from "./components/accountInfo/AccountInfo";
import Transfer from "./components/transfer/Transfer";
import Redeem from "./components/redeem/Redeem";


export class App extends Component {
  async componentDidMount() {
    this.web3 = await getWeb3();
    this.benefit = await BenefitContract(this.web3.currentProvider);
    this.benefitService = new BenefitService(this.benefit);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="d-flex justify-content-center">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Home></Home>;
              }}
            />
            <Route
              exact
              path="/dappInfo"
              render={() => {
                return (
                  <DappInfo
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                  ></DappInfo>
                );
              }}
            />
            <Route
              exact
              path="/buy"
              render={() => {
                return (
                  <Buy
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                    web3={this.web3}
                  ></Buy>
                );
              }}
            />
            <Route
              exact
              path="/accountInfo"
              render={() => {
                return (
                  <AccountInfo
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                    web3={this.web3}
                  ></AccountInfo>
                );
              }}
            />
            <Route
              exact
              path="/transfer"
              render={() => {
                return (
                  <Transfer
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                    web3={this.web3}
                  ></Transfer>
                );
              }}
            />
            <Route
              exact
              path="/redeem"
              render={() => {
                return (
                  <Redeem
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                    web3={this.web3}
                  ></Redeem>
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
