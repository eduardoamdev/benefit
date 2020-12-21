import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md bg-success d-flex justify-content-end pt-4 pb-4 pr-5">
          <ul className="navbar-nav">
            <li>
              <Link to="/" className="text-light">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dappInfo" className="text-light ml-5">
                Dapp info
              </Link>
            </li>
            <li>
              <Link to="/accountInfo" className="text-light ml-5">
                Account info
              </Link>
            </li>
            <li>
              <Link to="/buy" className="text-light ml-5">
                Buy tokens
              </Link>
            </li>
            <li>
              <Link to="/transfer" className="text-light ml-5">
                Transfer tokens
              </Link>
            </li>
            <li>
              <Link to="/redeem" className="text-light ml-5">
                Redeem tokens
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
