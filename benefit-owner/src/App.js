import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import BenefitContract from "./benefit";
import { Switch, Route } from "react-router-dom";
import { BenefitService } from "./benefitService";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import DappInfo from "./components/dappInfo/DappInfo";
import BeginSold from "./components/beginSold/BeginSold";
import Extract from "./components/extract/Extract";
import Credit from "./components/credit/Credit";
import EndSold from "./components/endSold/EndSold";


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
              path="/beginSold"
              render={() => {
                return (
                  <BeginSold
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                    web3={this.web3}
                  ></BeginSold>
                );
              }}
            />
            <Route
              exact
              path="/extract"
              render={() => {
                return (
                  <Extract
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                    web3={this.web3}
                  ></Extract>
                );
              }}
            />
            <Route
              exact
              path="/credit"
              render={() => {
                return (
                  <Credit
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                    web3={this.web3}
                  ></Credit>
                );
              }}
            />
            <Route
              exact
              path="/endSold"
              render={() => {
                return (
                  <EndSold
                    benefit={this.benefit}
                    benefitService={this.benefitService}
                    web3={this.web3}
                  ></EndSold>
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
